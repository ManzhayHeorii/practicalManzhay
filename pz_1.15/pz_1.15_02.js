const reg = new RegExp('\\.[a-z]*$');
let path = `D:\\practical.Manzhay\\pz_1.bug_02.pivo`;
console.log(`Розширення файлу:${path.match(reg)}`);