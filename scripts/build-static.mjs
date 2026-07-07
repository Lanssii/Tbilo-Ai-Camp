import { copyFile, mkdir, readdir, rm, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");

async function copyPath(source, destination) {
  const details = await stat(source);

  if (details.isDirectory()) {
    await mkdir(destination, { recursive: true });
    const entries = await readdir(source);

    for (const entry of entries) {
      await copyPath(join(source, entry), join(destination, entry));
    }

    return;
  }

  await mkdir(dirname(destination), { recursive: true });
  await copyFile(source, destination);
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

await copyPath(join(root, "index.html"), join(dist, "index.html"));

for (const directory of ["styles", "js", "images"]) {
  await copyPath(join(root, directory), join(dist, directory));
}

const publicEntries = await readdir(join(root, "public"));

for (const entry of publicEntries) {
  await copyPath(join(root, "public", entry), join(dist, entry));
}

console.log("Static site built in dist/");
