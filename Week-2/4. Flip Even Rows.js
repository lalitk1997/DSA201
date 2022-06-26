function runProgram(input) {
    input = input.split('\n');
    var row_col = input[0].split(' ').map(Number);
    var row = row_col[0];
    var col = row_col[1];
    var arr = [];
    var line = 1;
    for(var i=0; i<row; i++){
        arr.push(input[line].split(' ').map(Number));
        line++;
    }
    flipEven(row, col, arr);
}
function flipEven(row, col, arr){
    // console.log(row);
    // console.log(col);
    // console.log(arr);
    for(let i=0; i<row; i++){
        let bag = '';
        if(i % 2 === 0){
            for(let j=0; j<col; j++){
                bag = bag + arr[i][j] + ' ';
            }
            console.log(bag);
        }else{
            for(let j=col-1; j>=0; j--){
                bag = bag + arr[i][j] + ' ';
            }
            console.log(bag);
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