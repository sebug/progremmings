/* The game */
const k = kaboom({
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0,0,0,1]
});

//k.loadSprite();

k.scene('game', () => {
    k.layers(['bg','obj', 'ui'], 'obj');
});

start('game');
