function findCommonElements(array1, array2) {
    let commonArray = []; // сюда будем складывать общие элементы

    for (let i = 0; i < array1.length; i++) {
        let element = array1[i];

        // Проверяем, есть ли элемент из array1 в array2
        // И одновременно проверяем, что элемент ещё не добавлен в commonArray,
        // чтобы избежать повторов в результирующем массиве
        if (array2.includes(element) && !commonArray.includes(element)) {
            commonArray.push(element); // добавляем общий элемент
        }
    }

    return commonArray; // возвращаем массив с общими элементами
}

// Пример использования:
console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // выведет [2, 3]
