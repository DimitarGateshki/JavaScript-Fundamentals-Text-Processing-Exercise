function solve(word) {
    let words=word.split(' ');
    let res=[];
       for (let e of words) {
           if (e[0]=='#') {
               let cr=e.slice(1);
               if (check(cr)) {
                   res.push(cr);
               }
               
           }
       }
   
       res.filter(e=>e!='').forEach(e=>console.log(e));
   
       function check(wor) {
           for (let e of wor) {
               let code=e.charCodeAt();
               if (code<65 || code>90 && code<97 || code>122) {
                   return false;
               }
           }
           return true;
       }
       
   }