const isAdmin = false
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess = (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass);

console.log(isAccess); // true
