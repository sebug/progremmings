/* The game */
const k = kaboom({
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0,0,0,1]
});

const JUMP_FORCE = 320;
const MOVE_SPEED = 120;
const FALL_DEATH = 640;

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

k.layers(['bg','obj', 'ui'], 'obj');

k.camIgnore(['ui']);

const map = [
    '                                                  ',
    '                                                  ',
    '                                                  ',
    '                                                  ',
    '                                                  ',
    '                                                  ',
    '                                                  ',
    '                                                  ',
    '                                                  ',
    '                $                                 ',
    '                                                  ',
    '               =====                              ',
    '                                                  ',
    '===================================  ============='
];

const levelCfg = {
    width: 20,
    height: 20,
    '=': [k.sprite('block'), k.solid()],
    '$': [
	k.sprite('coin'),
	"coin"
	]
};

const player = k.add([
    k.sprite('larry'),
    k.pos(0, 0),
    k.scale(1),
    k.body()
]);

player.collides('coin', (c) => {
    k.destroy(c);
});

player.action(() => {
    k.camPos(player.pos);
});

k.keyPress('space', () => {
    if (player.grounded()) {
	player.jump(JUMP_FORCE);
    }
});

k.keyDown('left', () => {
    player.move(-MOVE_SPEED, 0);
});

k.keyDown('right', () => {
    player.move(MOVE_SPEED, 0);
});

const gameLevel = k.addLevel(map, levelCfg);

