function solve(word) {
    let result='';

    for (let l of word) {
        if (!result.endsWith(l)) {
            result+=l;
        }
    }

    
    console.log(result);
 
    
}