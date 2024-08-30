//1.Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа

const arr = [213, 32, 2312, -213, 32, 21, -123];

const removeNegativeNumbers = function (num) {
  const postivie = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] >= 0) {
      postivie.push(num[i]);
    }
  }
  return postivie;
};

console.log(removeNegativeNumbers(arr));

//2.Напишите функцию, которая принимает строку и возвращает ее в обратном порядке.

let str = "Hiiiii!";

reversStr = (str) => {
  let revers = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revers += str[i];
  }
  return revers;
};

console.log(reversStr(str));

//3.Напишите функцию, которая принимает массив чисел и возвращает среднее арифметическое значение.

let arrNumbrs = [1, 3, 5, 7, 3, 2, 8, 10];

function arithmeticMean(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return console.log(count / arr.length);
}

arithmeticMean(arrNumbrs);

//4.Напишите функцию, которая принимает массив чисел и возвращает новый массив с отсортированными числами по убыванию.
let numbers = [2, 3, 1, 4, 10, 11, 2, 4, 51, 0];
console.log(numbers.sort((a, b) => a - b));

function sortNumbers(arr) {
  return arr.sort((a, b) => a - b).reverse();
}

console.log(sortNumbers(numbers));

//5.Напишите функцию, которая принимает число и возвращает его факториал (произведение всех положительных целых чисел до данного числа включительно).

function findFactorial(num) {
  let count = 1;
  for (let i = 1; i <= num; i++) {
    count *= i;
  }
  return console.log(count);
}

findFactorial(5);

//6.Напишите функцию, которая принимает массив объектов с информацией о студентах (имя, возраст, средний балл) и возвращает массив имен студентов, у которых средний балл выше 70. 0 <= балл <= 100

const students = [
  { name: "Salih", age: 24, averagePoint: 69 },
  { name: "Hamza", age: 23, averagePoint: 72 },
  { name: "Sirim", age: 25, averagePoint: 100 },
  { name: "Atabek", age: 25, averagePoint: 61 },
  { name: "Asel", age: 25, averagePoint: 99 },
];

function findPoint (arr) {
	for (let i = 0; i < arr.length; i++) {
		if(arr[i].averagePoint > 70 && arr[i].averagePoint < 90  ) {
			console.log(`${arr[i].name}: Прошел!`)
		} else if (arr[i].averagePoint > 90) {
			console.log(`${arr[i].name}: Отличный результат!`)
		}
	}
}
findPoint(students)