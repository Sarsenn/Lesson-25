// 1.Напишите функцию, которая принимает два числа и возвращает их деление

function sumNumber (a,b) {
	return a / b
}
console.log(sumNumber(10,5))

//2.Напишите функцию, которая принимает число и возвращает его квадрат

 squerNumber = (a) => {return a * a}
console.log(squerNumber(7))

//3.Напишите функцию, которая принимает массив чисел и возвращает их сумму.
let numbers = [1,2,4,6,8,9,2,54,2];

sumArr = (num) => { 
	let count = 0;
	for(let i = 0; i < num.length; i++) {
		count += num[i]
	}
	return count
}

console.log(sumArr(numbers))

//4.Напишите функцию, которая принимает строку и возвращает ее длину
let str = 'Word';

strWord = (str) => {
	return str.length
} 

console.log(strWord(str))

//5.Напишите функцию, которая принимает число и возвращает его абсолютное значение.

absouluteNum = (num) => {
	if(num > 0 ) {
		return num
	} else {
		return num * -1
	}
}
	
console.log(absouluteNum(40))

//6.Напишите функцию, которая принимает массив строк и возвращает новый массив с длинами этих строк.

let arrStr = ['Hello','Hi','Salem','Assalamaleylum'];

const strLenght = function (arr) {
	let arrStrLength = []
	for (let i = 0; i < arr.length; i++) {
		arrStrLength.push(arr[i].length)
	}
	return arrStrLength;
}
console.log(strLenght(arrStr));

//7.Напишите функцию, которая принимает два числа и возвращает большее из них.

function bigNumber (a,b) {
	if(a > b) {
		return console.log(a);
	} else if (b > a) {
		return console.log(b);
	} else {
		console.log('Оба равный!')
	}
}

bigNumber(8,3)

//8.Напишите функцию, которая принимает строку и число, повторяет эту строку указанное количество раз и возвращает результат.

let example = 'str';

function repeatStr (str,count) {
	let i = 0;
	while (i < count) {
		console.log(str)
		i++;
	}
}

repeatStr(example,7)

//9.Напишите функцию, которая принимает массив чисел и возвращает новый массив с удвоенными значениями.

const arr = [1,4,8,5,7,2,3,6];

doubleArr = (arr) => {
	let doubled = []
	for(let i = 0; i < arr.length; i++) {
		doubled.push(arr[i] * 2);
	}
	return doubled
}

console.log(doubleArr(arr))

//10.Напишите функцию, которая принимает число и проверяет, является ли оно четным.

isEven = (num) => {
	if(num % 2 == 0) {
		console.log('its Even')
	} else {
		console.log('its Odd')
	}
}

isEven(2)

