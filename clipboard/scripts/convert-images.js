import chalk from 'chalk';
import fg from 'fast-glob';
import * as path from 'node:path';
import sharp from 'sharp';

async function convertImages() {
  const targetDir = './public/img/'; // Директория с исходными изображениями (по умолчанию)
  const imgExtensions = 'jpg,png,webp,avif'; // Расширения исходных изображений (по умолчанию jpg и png)
  const quality = 80; // Качество сжатия (по умолчанию 80)
  const enableLogs = true; // Включить вывод логов (по умолчанию true)

  const log = (message, type = 'info') => {
    if (enableLogs) {
      let output = message;
      switch (type) {
        case 'info':
          output = chalk.blue(message);
          break;
        case 'success':
          output = chalk.green(message);
          break;
        case 'error':
          output = chalk.red(message);
          break;
      }
      console.log(output);
    }
  };

  const filesPath = `${targetDir}/**/*.{${imgExtensions}}`;
  const imageFiles = await fg(filesPath);

  log(`Found ${imageFiles.length} images to convert.`, 'info');

  for (const file of imageFiles) {
    const dir = path.dirname(file);
    const outputFileWebp = path.join(
      dir,
      `${path.basename(file, path.extname(file))}.webp`
    );
    const outputFileAvif = path.join(
      dir,
      `${path.basename(file, path.extname(file))}.avif`
    );

    try {
      await Promise.all([
        sharp(file).webp({ quality }).toFile(outputFileWebp),
        sharp(file).avif({ quality }).toFile(outputFileAvif)
      ]);
      log(`Converted: ${file}`, 'success');
    } catch (error) {
      log(error.message, 'error');
    }
  }

  log('All images converted to WebP and AVIF!', 'success');
}

convertImages();
