function runProgram(input) {
    checkUnique(input);
}
function checkUnique(str){
    // console.log(str);
    // console.log(str.length);
    let obj = {};
    for(let i=0; i<str.length; i++){
        if(obj[str[i]] === undefined){
            obj[str[i]] = 1;
        }else{
            obj[str[i]]++;
        }
    }
    for(key in obj){
        if(obj[key] > 1){
            console.log("No");
            return 
        }
    }
    console.log("Unique");
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