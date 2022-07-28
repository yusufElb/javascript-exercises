// const removeFromArray = function(array, args) {
//     let index = array.indexOf(args);
//     if (index > -1){
//       array.splice(index, 1);
//     }
//     return array;
// };

const removeFromArray = function (...args) {
  const array = args[0];
  const newArray = [];
  array.forEach((item) => {
    if(!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// const removeFromArray = function (...args) {
//   let array = args[0]
//   return array.filter(val => !args.includes(val))
// }

// Do not edit below this line
module.exports = removeFromArray;
