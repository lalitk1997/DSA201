function runProgram(input) {
    input = input.split('\n');
    var test_case = +input[0];
    var line = 1;
    for(var i=0; i<test_case; i++){
        var row_col = input[line].split(' ').map(Number);
        line++;
        var row = +row_col[0];
        var col = +row_col[1];
        var arr = [];
        for(var j=0; j<row; j++){
            arr.push(input[line].split(' ').map(Number));
            line++;
        }
        sumEdgeEle(row, col, arr);
    }
}
function sumEdgeEle(row, col, arr){
    // console.log(row);
    // console.log(col);
    // console.log(arr);
    let sum = 0;
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(i===0 || i===row-1 || j===0 || j===col-1){
                continue;
            }else{
                sum = sum + arr[i][j];
            }
        }
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