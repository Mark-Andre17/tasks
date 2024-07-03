// 1
let newStr = "Welcome to this Javascript Guide!";
let newArr = newStr.split(" ");
let newArray = [];
for (let i = 0; i < newArr.length; i++) {
    newArray.push(newArr[i].split("").reverse().join(""));
};
console.log(newArray.join(" "));

// 2
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
const deleteDublicate = new Set(array);
console.log(deleteDublicate);

// 3
const arr_1 = [1, 2, 3];
const arr_2 = [4, 5, 6];
const bigArray = arr_1.concat(arr_2);
console.log(bigArray);

// 4
const filterNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < filterNum.length; i++) {
    if(filterNum[i] % 2 === 0) {
        console.log(filterNum[i]);
    }
}

// 5
const words = ['hello', 'world', 'javascript', 'coding'];
for(let i = 0; i < words.length; i++) {
    console.log(words[i].toUpperCase());
}

// 6
const minimalArr = [15, 22, 43, 54, 5, 23];
console.log(Math.min(...minimalArr));
console.log(Math.max(...minimalArr));

// 7
