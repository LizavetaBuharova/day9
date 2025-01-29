// Условное ветвление
let age = 9;
if (age >= 18) {
    console.log("Вы совершеннолетний");
} else {
    console.log("Вы несовершеннолетний");
}

let number = 10;
if (number % 2 == 0) {
    console.log("Число четное");
} else {
    console.log("Число нечетное");
}

let score = 56;
if (0 <= score && score <= 50) {
    console.log("Неудовлетворительно");
} else if (51 <= score && score <= 65) {
    console.log("Удовлетворительно");
} else if (66 <= score && score <= 85) {
    console.log("Хорошо");
} else if (86 <= score && score <= 100) {
    console.log("Отлично");
} 

//Конструкция switch
let day = 3;
switch (day) {
    case 1: 
        console.log("Понедельник");
        break;
    case 2: 
        console.log("Вторник");
        break;
    case 3: 
        console.log("Среда");
        break;
    case 4: 
        console.log("Четверг");
        break;
    case 5: 
        console.log("Пятница");
        break;
    case 6: 
        console.log("Суббота");
        break;
    case 7: 
        console.log("Воскресенье");
        break;
    default: 
        console.log("Ошибка");
}

let grade = 5;
switch (grade) {
    case 1: 
        console.log("Плохо");
        break;
    case 2: 
        console.log("Удовлетворительно");
        break;
    case 3:
        console.log("Хорошо");
        break;
    case 4: 
        console.log("Очень хорошо");
        break
    case 5: 
        console.log("Отлично");
        break;
    default: 
        console.log("Ошибка");
}

let hour = 17;
switch (true) {
    case 6 <= hour && hour <= 12:
        console.log("Доброе утро");
        break;
    case 13 <= hour && hour <= 16: 
        console.log("Добрый день"); 
        break;
    case 17 <= hour && hour <= 23: 
        console.log("Добрый вечер");
        break;
    case 0 <= hour && hour <= 5: 
        console.log("Доброй ночи");
        break;
    default:
        console.log("Ошибка");
}

//Циклы for
for (let i = 1; i <= 10; i++) {
    console.log(i);
} 

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

for (let i = 2; i <= 20; 2) {
    console.log(i);
}

//Циклы while
let a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}

let b = 1;
let sumTwo = 0;
while (b <= 50) {
    sumTwo += b;
    b++;
}
console.log(sumTwo);

let c = 1;
while (c <= 20) {
    if (c % 2 == 0) {
        console.log(c);
    }
    c++;
}