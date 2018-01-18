const solution = module.exports = {};

solution.contains = function (arr1,arr2) {
    if(!arr1 || !arr2) return null;
    let solution = []
    for (let k = 0; k<arr1.length; k++) {
      for (var i = 0; i < arr2.length; i++) {
        if (arr1[k] === arr2[i]) {
          solution.push(arr1[k])
        }
      }
    }
    if (solution.length === 0) return 'no matches'
    let arrayUnique = Array.from(new Set(solution));
    return arrayUnique;
  }