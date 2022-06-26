function nTraversal(matrix) {
    // console.log(matrix);
    // console.log(matrix.length); // col
    // console.log(matrix[1].length); // row
    let bag = '';
    for(let i=matrix.length-1; i>=0; i--){
        bag = bag + matrix[i][0] + ' ';
    }
    // console.log(bag);
    for(let i=1; i<matrix.length; i++){
        bag = bag + matrix[i][i] + ' ';
    }
    // console.log(bag);
    for(let i=matrix.length-2; i>=0; i--){
        bag = bag + matrix[i][matrix.length-1] + ' ';
    }
    console.log(bag);
    
}
