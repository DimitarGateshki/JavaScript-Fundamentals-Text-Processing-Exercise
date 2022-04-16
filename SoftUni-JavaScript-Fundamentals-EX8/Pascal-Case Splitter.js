function solve(word) {
    let result='';

    for (let l of word) {
        let cr=l.charCodeAt();
        if (cr>=65 && cr<=90) {
            result+=', '
            result+=l;
        }else{
        result+=l;
        }
    }

    result=result.slice(2);

    
    console.log(result);
 
    
}