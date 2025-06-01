function findCommonElements(array1, array2) {
    // Создаем множество из второго массива для быстрого поиска
    const set2 = new Set(array2);
    const commonSet = new Set();

    for (const element of array1) {
        if (set2.has(element)) {
            commonSet.add(element); // добавляем в множество общих элементов
        }
    }

    // Преобразуем множество обратно в массив и возвращаем
    return Array.from(commonSet);
}

// Пример использования:
console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // выведет [2, 3]
