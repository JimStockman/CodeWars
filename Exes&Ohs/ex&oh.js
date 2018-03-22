// Passed !

function XO(str) {
  // Base comparator
  if (str.match(/[x]/gi) && str.match(/[o]/gi)) {
    return str.match(/[x]/gi).length == str.match(/[o]/gi).length;
  }
  // Escape comparator
  else if (str.length == 0) {
    return true;
  }
  // :3
  else{
    return false;
  }
}

// Best solution
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}