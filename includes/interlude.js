const Interlude = (() => {
    let animateArray = [];

    const animate = v => {
        Draw.clear(v[0], v[1]);
        Draw.rect('fill', v[2], null, 0, 0, Global.Width, Global.Height);
        Draw.text(v[4], v[3], [[v[7], v[5], v[6]]]);
    }

    const animateBoo1 = () => animate(animateArray[6]);
    const animateBoo2 = () => animate(animateArray[7]);
    const animateGo = () => animate(animateArray[2]);
    const animatePlayAgain = () => animate(animateArray[5]);
    const animateReady = () => animate(animateArray[0]);
    const animateSet = () => animate(animateArray[1]);
    const animateYay1 = () => animate(animateArray[3]);
    const animateYay2 = () => animate(animateArray[4]);    
    const delay = t => new Promise(function (resolve) { setTimeout(resolve, t) }); // utility function for returning a promise that resolves after a delay
    const pub_gameOver = () => Promise.delay(animateBoo1, 1).delay(animateBoo2, 500).delay(animateBoo1, 500).delay(animateBoo2, 500).delay(animateBoo1, 500).delay(animateBoo2, 500).delay(animateBoo1, 500).delay(animateBoo2, 500).delay(animatePlayAgain, 500).delay(Game.init, 2500).delay(Global.lockUpdate, 1);
    const pub_gameStart = () => Promise.delay(animateReady, 1).delay(animateSet, 1500).delay(animateGo, 1500).delay(Global.pauseUpdate, 1500).delay(Draw.canvas, 1).delay(Global.lockUpdate, 1);
    const pub_gameWon = () => Promise.delay(animateYay1, 500).delay(animateYay2, 500).delay(animateYay1, 500).delay(animateYay2, 500).delay(animateYay1, 500).delay(animateYay2, 500).delay(animateYay1, 500).delay(animatePlayAgain, 500).delay(Game.init, 2500).delay(Global.lockUpdate, 1);
    const pub_lifeOver = () => Promise.delay(Global.pauseUpdate, 2000).delay(Draw.canvas, 1).delay(Global.lockUpdate, 1);
    const pub_levelUp = () => Promise.delay(animateYay1, 1).delay(animateYay2, 500).delay(animateYay1, 500).delay(animateYay2, 500).delay(animateYay1, 500).delay(animateYay2, 500).delay(animateYay1, 500).delay(Global.pauseUpdate, 500).delay(Game.levelUp, 1).delay(Global.lockUpdate, 1);

    Promise.delay = function (fn, t) {
        // fn is an optional argument
        if (!t) {
            t = fn;
            fn = function () {};
        }
        return delay(t).then(fn);
    }

    Promise.prototype.delay = function (fn, t) {
        // return chained promise
        return this.then(function () {
            return Promise.delay(fn, t);
        });
    }

    const pub_init = (w, h, c, y, s) => {
        animateArray = [];
        animateArray.push([w, h, Constant.Color.GREEN, Constant.Color.RED, c * (y * 0.2), c, c * (y * 0.56), 'READY']);
        animateArray.push([w, h, Constant.Color.BLUE, Constant.Color.YELLOW, c * (y * 0.33), c, c * (y * 0.56), 'SET']);
        animateArray.push([w, h, Constant.Color.ORANGE, Constant.Color.PURPLE, c * (y * 0.33), c * (y * 0.11), c * (y * 0.56), 'GO']);
        animateArray.push([w, h, Constant.Color.ORANGE, Constant.Color.PURPLE, c * (y * 0.33), c, c * (y * 0.56), 'YAY!']);
        animateArray.push([w, h, Constant.Color.PURPLE, Constant.Color.ORANGE, c * (y * 0.33), c, c * (y * 0.56), 'YAY!']);
        animateArray.push([w, h, Constant.Color.YELLOW, Constant.Color.BLUE, c * (y * 0.05), c, c * (y * 0.56), s.toLocaleString() + '!!!\nPlay Again?']);
        animateArray.push([w, h, Constant.Color.RED, Constant.Color.GREEN, c * (y * 0.33), c, c * (y * 0.56), 'BOO!']);
        animateArray.push([w, h, Constant.Color.GREEN, Constant.Color.RED, c * (y * 0.33), c, c * (y * 0.56), 'BOO!']);
    }

    return {
        init:       pub_init,
        GameOver:   pub_gameOver,
        GameStart:  pub_gameStart,
        GameWon:    pub_gameWon,
        LifeOver:   pub_lifeOver,
        LevelUp:    pub_levelUp,

    };
})();