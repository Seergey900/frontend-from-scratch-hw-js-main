const isAdmin = false;
const isVerifiedUser = true;
const hasSpecialPermission = true;
const hasTemporaryPass = false;

const isAccess = (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass);
