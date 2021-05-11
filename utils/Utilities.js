// method to decode string with base64 encoding
exports.decode = (encodedString) => {
    return Buffer.from(encodedString, 'base64').toString();
}