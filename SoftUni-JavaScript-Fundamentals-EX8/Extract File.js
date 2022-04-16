function solve(word) {
    let words=word.split('\\');
    let cr=words.pop();
    let ex=cr.slice(cr.lastIndexOf('.'));
    ex=ex.substring(1);
    let name=cr.substring(0,cr.lastIndexOf('.'));
    console.log('File name: '+name);
    console.log('File extension: '+ex);
       
   }