'use strict';

// Возведение в степень
const pow = (base, exponent) => base * (base ** (exponent - 1));

console.log(pow(2, 4));
console.log(pow(5, 2));

// Вывод скобок в консоль
function bracketWrapper(n) {
    let brackets = [];

    function recursion(n) {
        if(n === 0) {
            return;
        }
    
        brackets.push("(");
        recursion(n - 1);
        brackets.push(")");
    }

    recursion(n);

    function showBrackets(value) {
        console.log(value);
    }

    return brackets.map(showBrackets);
}

bracketWrapper(3);

// Метод flat()
const flat = function(array, depth = 1) {
    const newArray = [];
    
    const collectAllItems = (array, n) => {
        for(let i = 0; i < array.length; i++) {
            if(n > 0) {
                if(Array.isArray(array[i])) {
                    collectAllItems(array[i], n - 1);
                }
                else if(typeof array[i] === "number") {
                    newArray.push(array[i]);
                }
            }
            else{
                newArray.push(array[i]);
            }
        }
    }

    collectAllItems(array, depth);
    return newArray;
}

const array1 = [1, 2, [7, 9], 4, [2, [14, [39, 56]]], [5, [8, 6]]];

const array2 = flat(array1, 2);
console.table(array2);