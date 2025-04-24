let Str1="listen";
let Str2="silent";

//Remove spaces

let noSpaceStr1= Str1.replace(/\s+/g,'').toLowerCase();

let noSpaceStr2=Str2.replace(/\s+/g,'').toLowerCase();

// sorting

let sortStr1=noSpaceStr1.split('').sort().join()
let sortStr2=noSpaceStr2.split('').sort().join()

//comparing

let isanagram= sortStr1==sortStr2

console.log(isanagram)
