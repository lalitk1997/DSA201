function runProgram(input) {
    input = +input;
    findLevel(input);
  }
function findLevel(input){
    let height = 0;
    let count = 1;
    let stones = 1;
    while(input >= 0){
        input = input - stones;
        height++;
        // console.log(stones);
        // console.log(height);
        count = count + 1;
        stones = (count*(count+1))/2;
    }
    console.log(height-1);
}
if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }