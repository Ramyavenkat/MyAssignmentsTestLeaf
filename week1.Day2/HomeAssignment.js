let input='Hello World'
let length=0
let foundLengthOfWord=false

for(let i=input.length-1;i>=0;i--){
    if(input[i]!=" "){
        length++
        foundLengthOfWord=true
    }
    else if(foundLengthOfWord){
        break;
    }
}
console.log("length of word is : "+length)
