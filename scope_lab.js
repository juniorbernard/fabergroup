// portée globale
var globalvar = "Je suis une variable globale";
let globalLet = "Je suis aussi global, mais avec une portée let";
const globalConst = "Je suis une constante globale";

{
    // portée de bloc
    var blockVar = "Je suis une variable de bloc";
    let blockLet = "Je suis une variable de bloc avec let";
    const blockConst = "Je suis une constante de bloc";
}

// console.log(globalvar); // Accessible
// console.log(globalLet); // Accessible
// console.log(globalConst); // Accessible

// console.log(blockVar); // Accessible (var n'a pas de portée de bloc)
// console.log(blockLet); // Erreur: blockLet n'est pas défini
// console.log(blockConst); // Erreur: blockConst n'est pas défini

function show(){
var functionVar = "Je suis une var à portée de bloc";
let functionLet = "Je suis un let à portée de bloc";
const functionConst = "Je suis un const à portée de bloc";
}
show();

console.log(functionVar); // Lance une ReferenceError
console.log(functionLet); // Lance une ReferenceError
console.log(functionConst); // Lance une ReferenceError