const fs = require('fs');

function encodeImage(filePath, mimeType) {
  const data = fs.readFileSync(filePath);
  return `data:${mimeType};base64,${data.toString('base64')}`;
}

const iconBase64 = encodeImage('src/assets/icon_app_dark_1024.png', 'image/png');
const logoBase64 = encodeImage('src/assets/logo_horizontal_color_transparent.png', 'image/png');
const bgBase64 = encodeImage('src/assets/images/cover_bg_buildings_1787066453564.jpg', 'image/jpeg');

const tsContent = `
export const appIconBase64 = "${iconBase64}";
export const logoBase64 = "${logoBase64}";
export const bgImageBase64 = "${bgBase64}";
`;

fs.writeFileSync('src/assets/base64Images.ts', tsContent);
console.log('Successfully created src/assets/base64Images.ts');
