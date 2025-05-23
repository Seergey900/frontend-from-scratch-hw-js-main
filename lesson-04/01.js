/*
function includesElement(array, element) {
  for (let i = 0; i < array.length; i++) {          // перебираем каждый элемент массива
    if (array[i] === element) {                      // если текущий элемент равен тому, что ищем
      return true;                                   // сразу возвращаем true
    }
  }
  return false;                                     // если дошли сюда — элемент не найден, возвращаем false
}

// Примеры:
console.log(includesElement([1, 2, 3], 2));        // выведет true — 2 есть в массиве
console.log(includesElement(['a', 'b', 'c'], 'd')); // выведет false — 'd' нет в массиве
