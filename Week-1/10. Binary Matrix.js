function binaryMatrix(N, M, matrix) {
    // console.log(N);
    // console.log(M);
    // console.log(matrix);
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            if(matrix[i][j] === 0){
                matrix[i][j] = 1;
            }else{
                matrix[i][j] = 0;
            }
        }
    }
    
    let bag = '';
    for(let i=0; i<N; i++){
        bag = '';
        for(let j=0; j<M; j++){
            bag = bag + matrix[i][j] + ' ';
        }
        console.log(bag);
    }
}
