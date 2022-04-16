function solve(word) {
    let result='';
    let result2='';

    for (let i = word.length-1; i >=0 ; i--) {
        if (i>=word.length/2) {
            result+=word[i];
        }else{

            result2+=word[i];
        }
        
    }
    
    console.log(result2);
    console.log(result);
 
    
}