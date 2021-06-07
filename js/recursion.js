'use strict';

// Возведение в степень
const pow = (base, exponent) => base ** exponent;

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

// Массив
function CustomArray() {
    if(!new.target) {
        return new Array();
    }

    for(let i = 0; i < arguments.length; i++){
        this[i] = arguments[i];
    }

    this.length = arguments.length;
}

const proto = new CustomArray();
CustomArray.prototype = proto;

// Метод flat()
proto.flat = function(array, n = 1) {
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

    collectAllItems(array, n);
    return newArray;
}


const array1 = new CustomArray(1, 2, [7, 9], 4, [2, [14, [39, 56]]], [5, [8, 6]]);

const array2 = CustomArray.prototype.flat(array1, 2);
console.table(array2);