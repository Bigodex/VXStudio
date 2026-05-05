import fs from "fs";
import path from "path";
import AdmZip from "adm-zip";

const rootDir = process.cwd();

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

function normalize(filePath) {
  return filePath.replaceAll("\\", "/");
}

function shouldIgnore(file) {
  const normalized = normalize(file);

  if (normalized.includes("..")) {
    return true;
  }

  return ignoredPrefixes.some((prefix) => normalized.startsWith(prefix));
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function backupFile(targetPath, relativePath, backupRoot) {
  if (!fs.existsSync(targetPath)) {
    return;
  }

  const backupPath = path.join(backupRoot, relativePath);
  ensureDir(path.dirname(backupPath));
  fs.copyFileSync(targetPath, backupPath);
}

function main() {
  const zipArg = process.argv[2];

  if (!zipArg) {
    console.error("❌ Informe o caminho do pack.");
    console.log("Exemplo:");
    console.log("npm run pack:apply incoming_packs/vxstudio-pack.zip");
    process.exit(1);
  }

  const zipPath = path.resolve(rootDir, zipArg);

  if (!fs.existsSync(zipPath)) {
    console.error(`❌ Pack não encontrado: ${zipPath}`);
    process.exit(1);
  }

  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, "-")
    .replace("T", "_")
    .slice(0, 19);

  const backupRoot = path.join(rootDir, ".pack_backups", timestamp);
  ensureDir(backupRoot);

  const zip = new AdmZip(zipPath);
  const entries = zip.getEntries();

  let added = 0;
  let updated = 0;
  let ignored = 0;

  console.log("📦 Aplicando pack...");
  console.log(`📁 Pack: ${zipPath}`);

  for (const entry of entries) {
    const relativePath = normalize(entry.entryName);

    if (entry.isDirectory || shouldIgnore(relativePath)) {
      ignored++;
      continue;
    }

    const targetPath = path.join(rootDir, relativePath);

    backupFile(targetPath, relativePath, backupRoot);

    ensureDir(path.dirname(targetPath));

    const existedBefore = fs.existsSync(targetPath);
    fs.writeFileSync(targetPath, entry.getData());

    if (existedBefore) {
      updated++;
      console.log(`♻️ Atualizado: ${relativePath}`);
    } else {
      added++;
      console.log(`✨ Adicionado: ${relativePath}`);
    }
  }

  console.log("\n✅ Pack aplicado com sucesso!");
  console.log(`♻️ Arquivos atualizados: ${updated}`);
  console.log(`✨ Arquivos adicionados: ${added}`);
  console.log(`🚫 Arquivos ignorados: ${ignored}`);
  console.log(`🧰 Backup salvo em: ${backupRoot}`);

  console.log("\nAgora rode:");
  console.log("npm install");
  console.log("npm run lint");
  console.log("npm run build");
}

main();