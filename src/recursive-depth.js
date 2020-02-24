module.exports = class DepthCalculator {
    
    calculateDepth(arr, depth = 0, arrDepth = []) {       
        depth++;
        arrDepth.push(depth);
        for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            this.calculateDepth(arr[i], depth, arrDepth);
        } 
        }
        return Math.max(...arrDepth);
    }
    
};