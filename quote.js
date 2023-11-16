function generateQuote(){
    const quote=['late is better than never' , 'Everything begins with an idea','Mistakes are key to success','There is always light in the end of th tunnel'];
let myquote=0;
while(myquote <= 5 )
{
myquote= quote[Math.floor(Math.random()*4)];
return  myquote;
}
}
console.log(generateQuote());