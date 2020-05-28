function isFileValid(file) {
    var c1 = file.size < 100000; // 100ko
    var c2 = 
        file.type == 'image/jpg' ||
        file.type == 'image/jpeg' ||
        file.type == 'image/png' ||
        file.type == 'image/gif'
        ;
    return c1 && c2;
}

module.exports = { isFileValid }