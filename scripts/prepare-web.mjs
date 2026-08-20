import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const webDir = path.join(root, "web");

const filesToCopy = [
  "index.html",
  "manifest.webmanifest",
  "service-worker.js"
];

const directoriesToCopy = [
  "assets"
];

fs.rmSync(webDir, { recursive: true, force: true });
fs.mkdirSync(webDir, { recursive: true });

for (const file of filesToCopy) {
  fs.copyFileSync(path.join(root, file), path.join(webDir, file));
}

for (const directory of directoriesToCopy) {
  fs.cpSync(path.join(root, directory), path.join(webDir, directory), { recursive: true });
}

console.log("Web assets prepared in ./web");
