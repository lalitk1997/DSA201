function runProgram(input) {
    input = input.split('\n');
    var test_case = +input[0];
    var line = 1;
    for(var i=0; i<test_case; i++){
        var arr_size = +input[line];
        line++;
        var arr_1 = input[line].split(' ').map(Number);
        line++;
        var arr_2 = input[line].split(' ').map(Number);
        line++;
        sumArr(arr_size, arr_1, arr_2);
    }
  }
function sumArr(arr_size, arr_1, arr_2){
    // console.log(arr_size);
    // console.log(arr_1);
    // console.log(arr_2);
    let sum = 0;
    for(let i=0; i<arr_size; i++){
        sum = sum + arr_1[i] + arr_2[i];
    }
    console.log(sum);
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