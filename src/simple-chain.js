let resultLink = '';
const chainMaker = {
  getLength() {
    return resultLink.length;
  },
  addLink(value) {
    if (resultLink === '') {
      resultLink = `( ${value} )`;
    } else {
      resultLink += `~~( ${value} )`;
    }
    return this;
  },
  removeLink(position) {
    let arrElements = resultLink.split('~~');
    if (position > 0 && position <= arrElements.length) {
      resultLink = arrElements.filter((el, index) => index != position - 1).join('~~');
    } else {
      resultLink = '';
      throw new Error('Invalid remove position');
    }
    return this;
  },
  reverseChain() {
    resultLink = resultLink.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    const result = resultLink;
    resultLink = '';
    return result;
  }
};

module.exports = chainMaker;