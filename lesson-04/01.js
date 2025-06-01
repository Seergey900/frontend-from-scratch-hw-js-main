function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true; // элемент найден
        }
    }
    return false; // элемент не найден
}
