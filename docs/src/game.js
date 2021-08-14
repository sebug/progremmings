/* The game */
const k = kaboom({
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0,0,0,1]
});

k.loadRoot('https://sebug.github.io/progremmings/img/');
k.loadSprite('coin','coin.png');
k.loadSprite('evil-shroom','evil-shroom.png');
k.loadSprite('brick', 'brick.png');
k.loadSprite('block', 'block.png');
k.loadSprite('larry', 'larry.png');
k.loadSprite('mushroom', 'mushroom.png');
k.loadSprite('surprise', 'surprise.png');
k.loadSprite('unboxed', 'unboxed.png');
k.loadSprite('pipe-top-left', 'pipe-top-left.png');
k.loadSprite('pipe-top-right','pipe-top-right.png');
k.loadSprite('pipe-bottom-left', 'pipe-bottom-left.png');
k.loadSprite('pipe-bottom-right', 'pipe-bottom-right.png');

k.scene('game', () => {
    k.layers(['bg','obj', 'ui'], 'obj');
});

start('game');
