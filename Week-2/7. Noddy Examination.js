function runProgram(input) {
    input = input.split("\n");
    var size_max = input[0].split(" ").map(Number);
    var arr_size = +size_max[0];
    var max = +size_max[1];
    var arr = input[1].split(" ").map(Number);
    maxMarks(arr_size, arr, max)
}
function maxMarks(arr_size, arr, max){
    // console.log(arr_size);
    // console.log(arr);
    // console.log(max);
    let skip = 1;
    let score = 0;
    for(let i=0; i<arr_size; i++){
        if(arr[i] <= max && skip >= 0){
            score++;
        }else{
            skip--;
        }
    }
    console.log(score);
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