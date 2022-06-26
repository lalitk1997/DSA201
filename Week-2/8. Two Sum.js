function runProgram(input) {
    input = input.split("\n");
    var ip = +input[0];
    var line = 1;
    for(var i=0; i<ip; i++){
        var size_sum = input[line].split(" ").map(Number);
        var arr_size = +size_sum[0];
        var sum = +size_sum[1];
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;
        findIdx(arr_size, arr, sum);
    }
}
function findIdx(arr_size, arr, sum){
    // console.log(arr_size);
    // console.log(arr);
    // console.log(sum);
    let fptr = 0;
    let eptr = arr_size-1;
    while(fptr < eptr){
        if(arr[fptr]+arr[eptr] > sum){
            eptr--;
        }else if(arr[fptr]+arr[eptr] < sum){
            fptr++;
        }else if(arr[fptr]+arr[eptr] === sum){
            console.log(fptr+" "+eptr);
            return;
        }
    }
    console.log(-1, -1);
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