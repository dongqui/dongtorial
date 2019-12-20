const { readdirSync, renameSync, mkdirSync, rmdirSync } = require('fs');


function addProblem(weekDirPath, num) {
  const dirs = readdirSync(dirPath).sort((a, b) => b - a);
  for (let dir of dirs.slice(0, dirs.length - num + 1)) {
    renameSync(`${weekDirPath}/${dir}`, `${weekDirPath}/${Number(dir) + 1}`);
  }
   mkdirSync(`${weekDirPath}/${num}`)
}

function deleteProblem(weekDirPath, num) {
  rmdirSync(`${weekDirPath}/${num}`);
  const dirs = readdirSync(dirPath).sort((a, b) => a - b);
  dirs.forEach((dir, idx) => {
    renameSync(`${dirPath}/${dir}`, `${dirPath}/${idx + 1}`);
  });
}

const dirPath = './1_week';

addProblem(dirPath, 4);
// deleteProblem(dirPath, 1);
