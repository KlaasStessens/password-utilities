function generateStrongPassword(length = 12) {
 const allowedPasswordCharacters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
 const strongPassword = Array.from({ length }, () => {
 
    const randomAllowedPasswordCharacterIndex = Math.floor(Math.random() * allowedPasswordCharacters.length);
    const randomAllowedPasswordCharacter = allowedPasswordCharacters.charAt(randomAllowedPasswordCharacterIndex);
    return randomAllowedPasswordCharacter;
 }).join('');
 return strongPassword;
}


module.exports = {
    isStrongPassword,
}