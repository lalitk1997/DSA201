function runProgram(input) {
    input = input.split('\n');
    var ip = Number(input[0]);
    var line = 1;
    for(var i=0; i<ip; i++){
        var size_q = input[line].split(" ");
        var row = Number(size_q[0]);
        var col = Number(size_q[1]);
        var q = Number(size_q[2]);
        line++;
        var arr = [];
        for(var j=0; j<row; j++){
            arr.push(input[line].split(' ').map(Number));
            line++
        }
        traverseArr(row, col, q, arr);        
    }
}
function traverseArr(row, col, q, arr){
    // console.log(row);
    // console.log(col);
    // console.log(q);
    // console.log(arr);
    if(q === 1){
        let bag = '';
        for(let i=0; i<row; i++){
            if(i%2 === 0){
                for(let j=0; j<col; j++){
                    bag = bag + arr[i][j] + ' ';
                }
            }else{
                for(let j=col-1; j>=0; j--){
                    bag = bag + arr[i][j] + ' ';
                }
            }    
        }
        console.log(bag);
    }else{
        let bag = '';
        for(let i=0; i<row; i++){
            if(i%2 === 0){
                for(let j=col-1; j>=0; j--){
                    bag = bag + arr[i][j] + ' ';
                }
            }else{
                for(let j=0; j<col; j++){
                    bag = bag + arr[i][j] + ' ';
                }
            }
        }
        console.log(bag);
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