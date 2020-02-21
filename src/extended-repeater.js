module.exports = function repeater(str, options) {
    
    if (typeof str != 'string') {
        str = String(str);
    }
    if (options.addition === undefined ) {
        options.addition = '';
    }
    if ( typeof options.addition != 'string') {
        options.addition = String(options.addition);
    }
    if (options.separator === undefined) {
        options.separator = '+';
    }
    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    }
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 1;
    }
   
    if (options.additionSeparator === undefined) {
        options.additionSeparator = '|';
    }
    if (options.repeatTimes > 1 && options.additionRepeatTimes > 1) {
        return ((str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition + options.separator).repeat(options.repeatTimes - 1) +str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition );
    } else if (options.repeatTimes > 1 && options.additionRepeatTimes == 1) {
        return ((str + options.addition + options.separator).repeat(options.repeatTimes - 1) + (str + (options.addition).repeat(options.additionRepeatTimes)));
    } else if (options.repeatTimes == 1 && options.additionRepeatTimes > 1) {
        return ((str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition));
    } else if (options.repeatTimes == 1 && options.additionRepeatTimes == 1) {
        return (str + options.addition);
    }
};