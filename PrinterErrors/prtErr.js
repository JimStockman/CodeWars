// Passed !

function printerError(s) {
  let printer = ("abcdefghijklm");
  
  let count = s.length;
  for (let x = 0; x < s.length; x++) {
    for (let y = 0; y < printer.length; y++) {
      if (s[x] == printer[y]) {
        count--;
      }
    }
  }
  return count  + "/" + s.length;
}

console.log(printerError("aaabbbbhaijjjmzzzz"));

// Best solution
function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}
