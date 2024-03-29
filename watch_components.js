/* https://www.npmjs.com/package/chokidar */
const chokidar = require('chokidar');
const path = require('path');
const { exec } = require('child_process');

const watch_folder = './src/components';

// One-liner for current directory
const watcher = chokidar.watch(watch_folder);

watcher.on('ready', () => {
  // 초기화 완료 되면

  // watcher.on('change', (path) => console.log(`File ${path} has been change`));

  // 파일 추가 또는 삭제 감지 되면,
  watcher.on('add', updateData);
  watcher.on('unlink', updateData);

  function updateData(file_path) {
    const path_obj = path.parse(file_path);
    const { ext } = path_obj;
    console.log(ext);

    // jsx 데이터 갱신
    if (ext == '.jsx') {
      exec('node create_component_data.js', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        console.log(stdout);
      });
    }
  }
});
