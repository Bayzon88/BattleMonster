const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.includes.call(arrayLike, 5));
// true
console.log(Array.prototype.includes.call(arrayLike, 1));
// false
