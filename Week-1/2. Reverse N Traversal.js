function nTraversal(matrix) {
    let bag = '';
    for(let i=0; i<matrix.length; i++){
        bag = bag + matrix[i][0] + ' ';
    }
    // console.log(bag);
    for(let i=matrix.length-2; i>=0; i--){
        let j = ((matrix.length-1) - (i));
        bag = bag + matrix[i][j] + ' ';
    }
    // console.log(bag);
    for(let i=1; i<matrix.length; i++){
        bag = bag + matrix[i][matrix.length-1] + ' ';
    }
    console.log(bag);
}
