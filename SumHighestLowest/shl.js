// Passed !

function sumArray(array) {
  if (array == null || array.length < 2 ) {
    
  }
  else {
    function getSum(total, num) {
      return total + num;
      }
      // Could be more straight forward but hey :D
      let max = Math.max.apply(null ,array);
      let low = Math.min.apply(null ,array);
      // console.log(max, low);
      return (array.reduce(getSum) - max - low);
  }
}

var dab = [5,4,6,8,7,9,5];
console.log(sumArray(dab));