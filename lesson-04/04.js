/*
function doubleEachCharacter(str) {
  let result = ''; // сюда будем собирать новую строку

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];  // берём текущий символ
    result += currentChar + currentChar; // добавляем его два раза в result
  }

  return result; // возвращаем новую строку
}

// Пример:
console.log(doubleEachCharacter('hello')); // выведет 'hheelllloo'
