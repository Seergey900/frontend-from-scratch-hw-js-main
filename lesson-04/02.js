function findUniqueElements(array) {
    let uniqueArray = []; // создаём пустой массив для уникальных элементов

    for (let i = 0; i < array.length; i++) { // перебираем все элементы входного массива
        let currentElement = array[i];

        // проверяем, есть ли currentElement в uniqueArray
        if (!includesElement(uniqueArray, currentElement)) {
            uniqueArray.push(currentElement); // если нет, добавляем его в uniqueArray
        }
    }

    return uniqueArray; // возвращаем массив с уникальными элементами
}

// Пример использования:
console.log(findUniqueElements([1, 2, 3, 2, 1, 4])); // выведет [1, 2, 3, 4]
