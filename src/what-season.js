module.exports = function getSeason(strDate) {
  if (strDate === undefined) return 'Unable to determine the time of year!';

  let timeStamp = Date.parse(strDate);
  if (isNaN(timeStamp) || strDate.toString !== Date.prototype.toString) throw new Error('Error');

  let date = new Date(timeStamp);
  let month = date.getMonth(); //0-11

  if (month < 2 || month === 11) return 'winter';
  if (month < 5) return 'spring';
  if (month < 8) return 'summer';
  
  return 'autumn';
};