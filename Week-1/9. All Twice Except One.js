function runProgram(input) {
    input = input.split("\n");
    var ip_size = input[0];
    var limit = 0;
    var arr = [];
    var line = 1;
    for(var i=0; i<ip_size; i++){
        limit = +input[line];
        line++;
        arr = input[line].split(" ").map(Number);
        line++;
        findNonDup(limit, arr);
    }
}
function findNonDup(limit, arr){
    // console.log(limit);
    // console.log(arr);
    let obj = {};
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]]++;
        }
    }
    for(key in obj){
        if(obj[key] === 1){
            console.log(key);
        }
    }
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