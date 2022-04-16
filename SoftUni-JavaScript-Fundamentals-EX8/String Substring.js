function solve(word,sentence) {
    let low =sentence.toLowerCase();
    let wordLow=word.toLowerCase();
    if (low.includes(wordLow)) {
        console.log(wordLow);
        return;
    }else{
        console.log(`${wordLow} not found!`);
    }
       
   }