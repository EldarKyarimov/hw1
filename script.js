// Задача 1: Работа с текстом  /// DONE ++++
function reverseString(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString('hello'));


// Задача 2: Массивы и фильтрация /// DONE ++++
function check(arr) {
    let result = arr.filter(function (num) {
        return (num % 2) === 0;
    });
    console.log(result);
};


// Задача 3: Проверка электронной почты /// DONE ++++
function validateEmail(email) {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(email);
}
console.log(validateEmail('xxxxxx@gmail.com'));


// Задача 4: Функции для даты и времени /// DONE ---
function dateDiff(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
}
console.log(dateDiff('2023 / 8 / 15', '2023 / 8 / 20'));


// Задача 5: Проект для выполнения нескольких функций









// Задача 6: Геометрические вычисления /// DONE ++++
function calcTriangleArea(a, b, c) {
    let halfP = (a + b + c) / 2;
    let trig = (halfP - a) * (halfP - b) * (halfP - c);
    return Math.sqrt(trig);
};
console.log(calcTriangleArea(13, 14, 15));


// Задача 7: Конвертер валют /// DONE ++++
function curr(sum, currency) {
    let usd = 1.70;
    let eur = 1.80;
    let rub = 0.0196;
    if (currency == 'usd') {
        return sum * usd;
    } else if (currency == 'eur') {
        return sum * eur;
    } else if (currency == 'rub') {
        return sum * rub;
    } else {
        return 'Enter correct currency!'
    }
};
console.log(curr(100, 'eur'));
