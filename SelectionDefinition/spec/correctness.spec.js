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

describe('haha', () => {
  it('works with jasmine', () => {
    expect(true).toBe(true)
  });

  it('should find the correct sprite', () => {
    const correctness= _.every(positions, (position)=> {
      _.every(maps, (map)=>{
        let selectedSprite = algorithm(map),
          minDistance = distance(selectedSprite, position);
        return _.every(map, _.curryRight(testSprite)(selectedSprite)(minDistance)(position))
      });
    });
    expect(correctness).toBe(true);
  })
});

