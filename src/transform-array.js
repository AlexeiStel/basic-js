module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error;
    } 
    let mas = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== '--discard-prev' && arr[i] !== '--discard-next' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
                mas.push(arr[i]);
            }
            else if (arr[i] === '--discard-prev' && i != 0) {
                mas.pop();
            } else if (arr[i] === '--discard-next' && i != arr.length - 1) {
                arr.splice(i, 1);
            } else if (arr[i] === '--double-next' && i != arr.length - 1) {
                arr[i] = arr[i + 1];
                mas.push(arr[i]);
            } else if (arr[i] === '--double-prev' && i != 0) {
                mas.push(arr[i-1]);
            } else if (arr[i] === '--double-prev' && i == 0 || arr[i] === '--discard-prev' && i == 0) {
            mas.pop();
            } else if (arr[arr.length - 1] === '--double-next' || arr[arr.length - 1] === '--discard-next') {
            arr.splice(arr.length - 1, 0);
            }
        }
    return mas;
};

