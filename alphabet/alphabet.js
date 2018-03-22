// Passed !

function alphabetPosition(text) {
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  otherText = ""
  
  for (let letter = 0; letter < text.length; letter++) {
    if (alphabet.indexOf(text[letter].toLowerCase())  != -1) {
      otherText += alphabet.indexOf(text[letter].toLowerCase()) + 1 + " ";
    }
  }
  text = otherText.trim();
  return text;
}

//console.log(alphabetPosition("My name is jeff"))

// Best solution A
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

// Best solution B
function alphabetPosition(text) {
  return text.match(/[a-zA-Z]/g).map( (el) => el.toLowerCase().charCodeAt() - 96 ).join(' ');
}