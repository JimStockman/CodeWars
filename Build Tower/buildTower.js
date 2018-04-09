function towerBuilder(nFloors) {
  let building = [];
  let dots = 1;
  let maxDots = nFloors*2-2;

  for (let i = 0; i < nFloors; i++) {
    building[i] = ' '.repeat(maxDots/2 - i) + '*'.repeat(dots) + ' '.repeat(maxDots/2 - i)
    dots += 2
  }

  return building;
}

console.log(towerBuilder(100))
