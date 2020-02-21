const chainMaker = {
  arrChain: [],
  getLength() { return this.arrChain.length;
  },
  addLink(value) { 
      if (value === undefined) value = '';
      this.arrChain.push('('+" " + value +" " + ')');
      return this;  
  },
  removeLink(position) {
    if (typeof position === "number" && position > 0 && position <= this.arrChain.length) {
      this.arrChain.splice(position - 1, 1);
      return this;
    } else {
      this.arrChain = [];
      throw Error;
    }
    },
  reverseChain() {
   this.arrChain.reverse();
   return this;
  },
  finishChain() {
    let chain = this.arrChain;
    this.arrChain = [];
    return chain.join("~~");
  }
};

module.exports = chainMaker;
