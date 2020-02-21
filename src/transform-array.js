module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error;
    } 
    let mas = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '--discard-prev' || arr[i] !== '--discard-next' || arr[i] !== '--double-next' || arr[i] !== '--double-prev') {
            mas.push(arr[i]);
        }
        else if (arr[i] === '--discard-prev' && i != 0) {
            arr.splice(indexOf(arr[i - 1]), 2);
        } else if (arr[i] === '--discard-next' && i != arr.length - 1) {
            arr.splice(indexOf(arr[i]), 2);
        } else if (arr[i] === '--double-next' && i != arr.length - 1) {
            arr[i] = arr[i + 1];
            mas.push(arr[i]);
        } else if (arr[i] === '--double-prev' && i != 0) {
            arr[i] = arr[i - 1];
            mas.push(arr[i]);
    } else if (arr[0] === '--double-prev' || arr[0] === '--discard-prev') {
        arr.splice(0,1);

    } else if (arr[arr.length - 1] === '--double-next' || arr[arr.length - 1] === '--discard-next') {
        arr.splice(arr[arr.length - 1], 1);
    }
}
return mas;
};
