//Input 1993-07-28
const reg = /\d{4}-\d{2}-\d{2}/;

exports.validator = (value) =>{
  const pass = value.match(reg);
  if (pass) {
   return true;
  }
  return 'Please enter a valid date';
 }
