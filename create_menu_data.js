const axios = require('axios');
const FileUtil = require('./file_util.js');

axios
  .get('https://script.google.com/macros/s/AKfycbyd2zymBG-qAM8QOauM6M0agFkbwK1Wp-oWYb0fAz9iLeILpmS0OMhz-alHDhUOmcJy/exec')
  .then((response) => {
    const str = `export default ${JSON.stringify(response.data)}`;
    
    FileUtil.writeFile('./src/js/menu_data.js', str);
  })
  .catch((error) => {
    console.error(error);
  });
