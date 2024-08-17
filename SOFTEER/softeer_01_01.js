const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []
let res, count = 0

rl.on("line", (line) => { 
  input.push(line);
  count++;
  if (count == 5) {
    rl.close();  
  }
})

rl.on('close', () => {
  for (let i = 0; i < input.length; i++) {
    const time = input[i].split(/:| /);
    const hour = (parseInt(time[2])-parseInt(time[0])) * 60;
    const min = parseInt(time[3])-parseInt(time[1]);
    res += hour + min;
  }
  console.log(res);
})