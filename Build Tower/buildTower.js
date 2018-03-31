function towerBuilder(nFloors) {
  let building = [];
  let flrs = 1
  for (let x = 0; x < nFloors; x++) {
    for (let y = 0; y < flrs; y++) {
      building[x] += '*'
    }
   flrs += 2
  }
  return building;
}

towerBuilder(3).forEach(element => {
  console.log(element)
});