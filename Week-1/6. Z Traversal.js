function zTraversal(N,arr){
    // console.log(N);
    // console.log(arr);
    let bag = '';
    for(let i=0; i<arr.length-1; i++){
        bag = bag + arr[0][i] + ' ';
    }
    var i = 0;
    var j = arr.length-1;
    while(i + j == arr.length-1 && i < arr.length && j < arr.length){
        bag = bag + arr[i][j] + ' ';
        i++;
        j--;
    }
    // console.log(bag);
    for(let k=1; k<arr.length; k++){
        bag = bag + arr[arr.length-1][k] + ' ';
    }
    console.log(bag);
}
