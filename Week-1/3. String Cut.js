function runProgram(input) {
    var str = input;
    cutRev(str);
}
function cutRev(str){
    // console.log(str);
    if(str.length % 2 === 0){
        let mid = str.length/2;
        let bag1 = '';
        for(let i=mid-1; i>=0; i--){
            bag1 = bag1 + str[i];
        }
        // console.log(bag1);
        let bag2 = '';
        for(let i=str.length-1; i>=mid; i--){
            bag2 = bag2 + str[i];
        }
        // console.log(bag2);
        console.log(bag1+bag2);
        return;
    }else{
        let mid = parseInt(str.length/2);
        let bag1 = '';
        for(let i=mid-1; i>=0; i--){
            bag1 = bag1 + str[i];
        }
        let bag2 = str[mid];
        for(let i=str.length-1; i>mid; i--){
            bag2 = bag2 + str[i];
        }
        console.log(bag1+bag2);
        return;
    }
}
if (process.env.USERNAME === "") {
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