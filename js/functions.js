/* Функция для проверки длины строки.
Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true,
если строка меньше или равна указанной длине, и false,
если строка длиннее.
Эта функция нам пригодится для валидации формы. Примеры использования функции: */

/* const stringLengthCheck = (string, length) => {

  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
} */

/* const stringLengthCheck = (string, length) => {
  return (string.length <= length) ? true : false;
} */

const stringLengthCheck = (string, length) => {
  return string.length <= length;
}

console.log(stringLengthCheck('проверяемая строка', 20));
console.log(stringLengthCheck('проверяемая строка', 18));
console.log(stringLengthCheck('проверяемая строка', 6));

/* Функция для проверки, является ли строка палиндромом.
Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево. */

/* // Строка является палиндромом
имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true
// Это не палиндром
имяФункции('Кекс');  // false
// Это палиндром
имяФункции('Лёша на полке клопа нашёл '); // true */

const isPalindrom = (string) => {
  console.log(string);
  let newString = string.toLowerCase().replace(/ /g, '');
  console.log(newString);
  let reversedString = '';

  for (let i = newString.length - 1; i >= 0; i--) {
    reversedString += newString[i];
    console.log(reversedString);
  }

  return newString === reversedString;
}

console.log(isPalindrom('ТОПОТ'));
console.log(isPalindrom('ДовОд'));
console.log(isPalindrom('Кекс'));
console.log(isPalindrom('Лёша на полке клопа нашёл'));

/* Функция принимает строку,
извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN */

/* имяФункции('2023 год');            // 2023
имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
имяФункции('агент 007');           // 7
имяФункции('а я томат');           // NaN */

const isNumber = (string) => {
  console.log(string);

  let cleanedString = string.toLowerCase().replace(/ /g, '');

  let onlyNumbers = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(cleanedString[i])) {
      onlyNumbers += cleanedString[i];
    }
  }

  console.log(onlyNumbers);
  let result = parseFloat(onlyNumbers);
  return isNaN(result) ? NaN : result;
}

console.log(isNumber('2023 год'));
console.log(isNumber('ECMAScript 2022'));
console.log(isNumber('1 кефир, 0.5 батона'));
console.log(isNumber('агент 007'));
console.log(isNumber('а я томат'));
