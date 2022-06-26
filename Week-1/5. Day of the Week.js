function dayOfTheWeek(day, N) {
    let arr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let num = N % 7;
    let i = 0;
    for(i=0; i<arr.length; i++){
        if(day === arr[i]){
            break;
        }
    }
    num = (i + num) % 7;
    console.log(arr[num]);
    
}
