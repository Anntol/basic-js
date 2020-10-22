module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Error');

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case ('--discard-next'):
        i++;
        result.push(undefined);
        break;
      case ('--discard-prev'):
        result.pop();
        break;
      case ('--double-next'):
        if (i < arr.length - 1) result.push(arr[i + 1]);
        break;
      case ('--double-prev'):
        if (i > 0 && result[result.length - 1] !== undefined) result.push(arr[i - 1]);
        break;
      default:
        result.push(arr[i]);
    }
  }
  return result.filter(item => item !== undefined);
};