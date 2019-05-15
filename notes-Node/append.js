console.log("starting app");
const fs= require('fs');
fs.appendFile('nana.txt','GOD SAVE THE QUEEN',function (err){
    if(err)
        console.log("error");
});