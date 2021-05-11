// method to decode string with base64 encoding
exports.decode = (encodedString) => {
    return Buffer.from(encodedString, 'base64').toString();
}

// method to verify email validity

exports.isValidEmail = (emailAddress) => {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(emailAddress);
}