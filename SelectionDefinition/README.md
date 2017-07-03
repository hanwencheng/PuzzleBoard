# Sprites Selection Definition

Define which sprite is selected, which obey the following rules:

1. The selecting sprite should be included in the sprite.
2. The selecting sprite has the least distance to the mouse position.
3. The leftmost and topmost sprites should be selected with same distance to mouse position

Now the map data is in plain array with Sprite object as 

```javascript
const sprite = {
    x: 55,
    y: 200,
    width: 14,
    height: 100
}
```
### Run correctness test

1. `yarn install`
2. Put module under main.js, which should uses map and position as arguments and exports a function, to get the selected sprite 
3. Run `yarn test` 
4. Bang!

I'm use node version v6.10 (anyway babel transpiling is enabled in Test)
