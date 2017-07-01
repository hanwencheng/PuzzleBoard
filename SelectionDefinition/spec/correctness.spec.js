const {maps, positions} = require('../src/genTestSets');
const algorithm = require('../src/main');
const _ = require('lodash');

const getCenter = p => ({x: p.x + p.width/2, y: p.y + p.height/2});
const distance = (a, b) => {
  const c1 = getCenter(a);
  const c2 = getCenter(b);
  return Math.pow(c1.x - c2.x, 2) + Math.pow (c1.y - c2.y ,2);
};
const testSprite = (sprite, position, minDistance, selected) => {
  const testDistance = distance(sprite, position);
  if(testDistance === minDistance){
    return !(sprite.x < selected.x || sprite.y < selected.y)
  } else if (testDistance > minDistance){
    return true
  }
  return false
};

const isInclude = (position, selected) => {
  it('position is not included in the selected sprite!', ()=> {
    const includeX = selected.x <= position.x && position.x <= selected.x + selected.width;
    const includeY = selected.y <= position.y && position.y <= selected.y + selected.height;
    expect(includeX && includeY).toBe(true);
  })
};

describe('should find the correct sprite', () => {
  const correctness= _.every(positions, (position) => {
    return _.every(maps, (map) => {
      let selectedSprite = algorithm(map),
        minDistance = distance(selectedSprite, position);
        isInclude(position, selectedSprite);
        return _.every(map, _.curryRight(testSprite)(selectedSprite)(minDistance)(position))
    });
  });

  it('the selected sprite has the least distance to mouse position', () => {
      expect(correctness).toBe(true);
  });
});

