/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.
*/

const isAdmin = false;
const isVerifiedUser = true;
const hasSpecialPermission = true;
const hasTemporaryPass = false;

let isAccess = (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass);

console.log(isAccess); // true
