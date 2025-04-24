let a="Good Boy";
let length=0;
let foundWord=false;
let lastword=" ";
for(let i=a.length-1;i>=0;i--){
    if(a[i]!==" "){
        lastword=a[i]+lastword;
        length++
        foundWord=true

    }
    else if (foundWord){
        break;
    }
}
console.log("the length of the last word is ",length);
console.log("the word is ",lastword)