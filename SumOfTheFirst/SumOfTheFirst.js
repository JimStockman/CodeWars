// Passed !

function SeriesSum(n)
{
  if (n == 0){ return (0).toFixed(2); }

  else if (n == 1) { return (1).toFixed(2);}

  else {
    let total = 1;
    let decimal = 4;
    
    for (let x = 1; x < n; x++) {
      total += 1/decimal;
      decimal += 3;
    }
    return (total).toFixed(2);
  }

}


// Best solution

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}