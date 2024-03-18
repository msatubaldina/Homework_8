//1
array1 = ['one', 'two', 'three', 'four', 'five'];
array1New = [];
array1.forEach((item) => {
    array1New.push(item.split('').reverse().join(''));
})
console.log(array1New)



//2
document.querySelector('.text-color').style.color = 'red';



//3
array3 = [5, 6, 24, 64, 23];
const filtered3 = array3.filter((item) => {
    return item % 2 === 0;
})
console.log(filtered3)



//5
number5 = 9;
const oddOrEven = (num) => {
    if (num % 2 === 0){
        console.log('четное');
    } else if (num % 2 === 1){
        console.log('нечетное');
    } else {
        console.log('not a number')
    }
}
oddOrEven(number5)



//6
array6 = ['one', 'two', 'three', 'four', 'five'];
array6.pop();
console.log(array6)



//7
string71 = "first";
string72 = "tsrif";
const anagram = (string1, string2) => {
    if (string1 === string2.split('').reverse().join('')){
        console.log(true);
    } else {
        console.log(false);
    }
}
anagram(string71, string72)



//8
document.getElementById('image').style.opacity = "0";



//9
array9 = ['one', 'two', 'three', 'four', 'five'];
array9New = [];
const firstLast = (array) => {
    array9New.push(array[0], array[array.length - 1]);
    console.log(array9New);
}
firstLast(array9)



//10
const users = [{name: "Анна", age: 22}, {name: "Виктор", age: 45}, {name: "Сергей", age: 34}];



//11
document.getElementsByTagName('ul').add('.list-item');



//12
document.getElementById('.status').classList.remove('.inactive');
document.getElementById('.status').classList.add('.active');



//13
document.getElementsByTagName('p').style.fontSize = 'Arial';



//14
array14 = [5, 6, 24, 64, 23];
array14.map(function(item, index) {
    console.log(item * index)
})



//15
array15 = ['one', 'two', 'three', 'four', 'five'];
const filtered15 = array15.filter((item) => {
    return item.length > 3;
})
console.log(filtered15)

