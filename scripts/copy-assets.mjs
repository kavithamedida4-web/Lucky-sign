import fs from 'fs';
import path from 'path';

const srcBase = path.resolve('lucky-signs-content/lucky-signs/images');
const destBase = path.resolve('public/images/lucky-signs');

if (!fs.existsSync(destBase)) {
  fs.mkdirSync(destBase, { recursive: true });
}

const folders = fs.readdirSync(srcBase, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let totalFiles = 0;

for (const folder of folders) {
  const srcFolder = path.join(srcBase, folder);
  const destFolder = path.join(destBase, folder);
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
  }

  const files = fs.readdirSync(srcFolder);
  for (const file of files) {
    const srcFile = path.join(srcFolder, file);
    const destFile = path.join(destFolder, file);
    fs.copyFileSync(srcFile, destFile);
    totalFiles++;
  }
}

console.log(`Successfully migrated ${totalFiles} images across ${folders.length} categories to ${destBase}`);
