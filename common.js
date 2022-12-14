const splitArray = (array, chunkSize) => {
    return Array(Math.ceil(array.length / chunkSize)).fill().map(function (_, i) {
        return array.slice(i * chunkSize, i * chunkSize + chunkSize);
    });
}

const splitToChunks = (array, parts) => {
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}

module.exports = { splitArray, splitToChunks }