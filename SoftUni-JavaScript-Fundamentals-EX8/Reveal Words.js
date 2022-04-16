function solve(word,long) {
    let words=word.split(', ');
    let cr;
    let star='*';
    let finished=long;
    for (let e of words) {
        cr=star.repeat(e.length);
        finished=finished.replace(cr,e);
    }

    console.log(finished);

    
}
