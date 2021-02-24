// Implemente os métodos abaixo:

// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
const newArray = (n,l) => {
    var array = []
    for(var i=0; i<n; i++){
        array.push(l)
    }
    console.log("Resultado Task 1:", array);
}

newArray(3,'a');

// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]
const invertArray = (array) => {
    var finalArray = []
    for(var i=array.length - 1; i >=0; i--){
        finalArray.push(array[i]);
    }
    console.log("Resultado Task 2:", finalArray);
}

invertArray([1,2,3,4]);


// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
const cleanArray = (array) => {
    var finalArray = []
    for(var i=0; i<array.length; i++){
        if(array[i]){
            finalArray.push(array[i]);
        }
        
    }
    console.log("Resultado Task 3:", finalArray);
}

cleanArray([1,2,'', undefined]);


// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}
const arrayToObject = (array) => {
    let result = {}
    for(const element of array){
        result[element[0]] = element[1];
    }

    console.log("Resultado Task 4:", result);

}
arrayToObject([["c",2],["d",4]]);



// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

const selectArray = (array) => {
    var finalArray = []
    for(var i=0; i<array.length; i++){
        if(array[i] != 5 && array[i] != 3){
            finalArray.push(array[i]);
        }
        
    }
    console.log("Resultado Task 5:", finalArray);
}

selectArray([5,4,3,2,5,5,3],5,3);


// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

const noDuplicateValueInArray = (array) => {

    let dictionaryObj = {}

    for(var i=0; i < array.length; i++){
        dictionaryObj[array[i]] = array[i];
    }

    finalArray = []
    for (var key in dictionaryObj){
        finalArray.push(Number(key));
    }

    console.log("Resultado Task 6:", finalArray);
}

noDuplicateValueInArray([1,2,3,3,2,4,5,4,7,3])

// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true
const compareArray = (array1, array2) => {
    return array1.length == array2.length && array1.every((item, index) => item === array2[index])
}

console.log("Resultado Task 7:", compareArray([1,2,3,4],[1,2,3,4]))


// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]
const onlyOneArray = (array) => {

    var newArray = array.reduce((acc, val) => acc.concat(val), []);
    
    console.log("Resultado Task 8:", newArray)

}

onlyOneArray([1,2,[3],[4,5]]);

// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]
const divideArrays = (array) => {
var newArray = []
var param = 2;
for(var i=0; i < array.length; i= i + param){
    newArray.push(array.slice(i, i+param));
}

console.log("Resultado Task 9:", newArray);
}
divideArrays([1,2,3,4,5]);
// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]
const sameValues = (array1, array2) => {
const newArray = []
  for(var i=0; i<array1.length; i++){
  	  if(array2.indexOf(array1[i]) > -1){
  	  	newArray.push(array1[i]);
  	  	}
  	}
  	
  	console.log("Resultado Task 10:", newArray);
}

sameValues([6,8],[8,9]);


// ps: Esses exercícios são de senso comum da comunidade desenvolvimento, utilize o melhor padrão para implementação, criando uma semântica factível.

