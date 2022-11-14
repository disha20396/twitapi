
const getIndex = (size, n) => {
    let index = [];
    let div = size / n;
    let begin = 0;
    let end = 0;
    for (let i = 1; i <= n; i++) {
        let range = [];
        if (i === 1) {
            range.push(begin);
            end = begin + div - 1;
            range.push(end);
            index.push(range);
            begin = end + 1;
        } else {
            if (i === n) {
                range.push(begin);
                range.push(size - 1);
                index.push(range);
            } else {
                range.push(begin);
                end = begin + div - 1;
                range.push(end);
                index.push(range);
                begin = end + 1;
            }
        }
    }
    return index;
}

module.exports = { getIndex };