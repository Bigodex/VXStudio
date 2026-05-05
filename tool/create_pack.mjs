import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import archiver from "archiver";

const rootDir = process.cwd();
const packsDir = path.join(rootDir, "packs");

const ignoredPrefixes = [
  "node_modules/",
  ".next/",
  "out/",
  "dist/",
  "build/",
  ".git/",
  "packs/",
  "incoming_packs/",
  ".pack_backups/",
];

const ignoredFiles = [
  "package-lock.json",
  "pnpm-lock.yaml",
  "yarn.lock",
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function shouldIgnore(file) {
  const normalized = file.replaceAll("\\", "/");

  if (ignoredFiles.includes(normalized)) {
    return true;
  }

  return ignoredPrefixes.some((prefix) => normalized.startsWith(prefix));
}

function getChangedFiles() {
  const output = execSync("git status --porcelain", {
    encoding: "utf-8",
  });

  return output
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      // Formato: "M app/page.tsx" ou "?? components/new.tsx"
      return line.slice(3).trim();
    })
    .filter((file) => file && !shouldIgnore(file))
    .filter((file) => fs.existsSync(path.join(rootDir, file)));
}

async function createZip(files) {
  ensureDir(packsDir);

  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, "-")
    .replace("T", "_")
    .slice(0, 19);

  const zipName = `vxstudio-pack-${timestamp}.zip`;
  const zipPath = path.join(packsDir, zipName);

  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", {
    zlib: { level: 9 },
  });

  archive.pipe(output);

  for (const file of files) {
    archive.file(path.join(rootDir, file), {
      name: file.replaceAll("\\", "/"),
    });
  }

  await archive.finalize();

  return zipPath;
}

async function main() {
  console.log("🔎 Procurando arquivos alterados...");

  const files = getChangedFiles();

  if (files.length === 0) {
    console.log("✅ Nenhum arquivo alterado encontrado.");
    return;
  }

  console.log("\n📦 Arquivos incluídos no pack:");
  for (const file of files) {
    console.log(`- ${file}`);
  }

  const zipPath = await createZip(files);

  console.log("\n✅ Pack criado com sucesso!");
  console.log(`📁 Caminho: ${zipPath}`);
  console.log("\nSugestão:");
  console.log("1. Envie esse ZIP para outro ambiente");
  console.log("2. Coloque em incoming_packs/");
  console.log("3. Rode: npm run pack:apply incoming_packs/NOME_DO_PACK.zip");
}

main().catch((error) => {
  console.error("❌ Erro ao criar pack:");
  console.error(error);
  process.exit(1);
});