const Jimp = require('jimp');

Jimp.read('public/logo-icon-white.png')
  .then(image => {
    return image.invert().write('public/logo-icon-black.png');
  })
  .then(() => {
    console.log('Successfully created black icon.');
  })
  .catch(err => {
    console.error('Error:', err);
  });
