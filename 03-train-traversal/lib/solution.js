// findPass.numPass = function(arr) {
//   let car = arr;
//   let total = 0;
//   while (car.next) {
//     total += car.value;
//     car = car.next;
//     findPass.numPass(car);
//   }
//   total += car.value;
// };

const solution = module.exports = {};

solution.numPass = function (car) {
  if (!car) return null;
  if(typeof car !== 'object') return 'not an object';
  let total = 0;
  while (car.next) {
    if(typeof car.value !== 'number') return 'one value in the object is not a number';
    console.log(car.value);
    total += car.value;
    car = car.next;
    solution.numPass(car);
  }
  if(typeof car.value !== 'number') return 'value not a number';
  total += car.value;
  return total;
};
