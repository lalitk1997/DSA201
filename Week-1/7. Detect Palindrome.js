function detectPalII(N, string){
    // console.log(string);
    // console.log(N);
    let obj = {};
    for(let i=0; i<string.length; i++){
        if(obj[string[i]] === undefined){
            obj[string[i]] = 1;
        }else{
            obj[string[i]]++;
        }
    }
    // console.log(obj);
    let count = 0;
    for(key in obj){
        // console.log(key);
        // console.log(obj[key]);
        if(obj[key] % 2 === 1){
            count++;
        }
    }
    if(count > 1){
        console.log("Not Possible!");
        return;
    }
    console.log("Possible!");
}
