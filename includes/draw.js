const Draw = (() => {
	let canvas, ctx;
	
	const pub_arc = (fs, ss, x, y, r, sAngle, eAngle, anticlockwise, f, s) => {
		if (fs) ctx.fillStyle = fs;
    	if (ss) ctx.strokeStyle = ss;
		ctx.beginPath();
		ctx.arc(x, y, r, sAngle, eAngle, anticlockwise);
		if (f) ctx.fill();
		if (s) ctx.stroke();
		ctx.closePath();
	}

	const pub_canvas = (s = true) => {
		  Draw.clear(Global.Width, Global.Height); // Clear canvas to redraw
		  Draw.top(); // Draw score, game name, and lives
		  Draw.map(); // Game play (most of canvas)
		  Player.draw(); // Draw paddle
		  Char.draw(); // Draw ball
		  s ? Elements.draw() : Elements.init();
		  Draw.controls(); // Controls at bottom
		  Global.Level > 0 || s ? Game.loop() : Draw.gameInstructions();
	}

	const pub_clear = (w, h) => ctx.clearRect(0, 0, w, h);

	const pub_controlInstructions = () => Draw.text(Global.Tile * 0.65, Constant.Canvas.BACKGROUND, [['Sound: [S], Left: [A], Right: [D], Pause: [SPACE]', Global.Tile * (Constant.eNum.TileMap.X * 0.35), Global.Tile * (Constant.eNum.TileMap.Y - 0.65)]]);

	const pub_controls = () => {
		Draw.rect('fill', Global.Layout.theme, null, 0, Global.Tile * (Constant.eNum.TileMap.Y * 0.944), Global.Width, Global.Tile * (Constant.eNum.TileMap.Y * 0.056));
		if (!Constant.Test.TOUCH) {
		    Draw.text(Global.Tile, Constant.Canvas.BACKGROUND, [['Sound: ', Global.Tile, Global.Tile * (Constant.eNum.TileMap.Y * 0.985)]]); // Sound Text
		    Draw.soundToggle(); // Sound button
		    Draw.controlInstructions(); // Instructions
		} else {
		    Global.Sound ? document.getElementById('S').style.color = 'green' : document.getElementById('S').style.color = 'red';
		}
	}

	const pub_gameInstructions = () => {
		// Instruction box
		Draw.rect('round', 'rgba(200, 200, 200, .5)', 'black', Global.Tile * (Constant.eNum.TileMap.X * 0.25), Global.Tile * (Constant.eNum.TileMap.Y * 0.4), Global.Tile * (Constant.eNum.TileMap.X * 0.5), Global.Tile * (Constant.eNum.TileMap.Y * 0.35), Global.Tile, true);
		// Instruction Text
		let textArray = [];
		if (Constant.Test.TOUCH) {
		    textArray.push(['TAP "S" to start', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.45)]);
		    textArray.push(['game & toggle sound', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.48)]);
		    textArray.push(['TAP "P" to pause', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.58)]);
		    textArray.push(['TAP "L" for left', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.68)]);
		    textArray.push(['and "R" for right', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.71)]);
		} else {
		    textArray.push(['Press SPACE or RETURN', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.45)]);
		    textArray.push(['to start and pause game', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.48)]);
		    textArray.push(['Press LEFT or A', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.53)]);
		    textArray.push(['to move paddle left', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.56)]);
		    textArray.push(['Press RIGHT or D', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.61)]);
		    textArray.push(['to move paddle right', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.64)]);
		    textArray.push(['Press TAB or S', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.69)]);
		    textArray.push(['to toggle sound', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.72)]);
		}
		Draw.text(Global.Tile, Global.Layout.theme, textArray); 
	}

    const pub_init = () => {
        canvas = document.getElementById(Constant.Canvas.ELEMENT);
        ctx = canvas.getContext(Constant.Canvas.CONTEXT);
        ctx.translate(0.5, 0.5);
    }

    const pub_lives = () => Draw.text(Global.Tile, Global.Layout.theme, [['Lives:' + Global.Lives, Global.Tile * (Constant.eNum.TileMap.X * 0.85), Global.Tile * (Constant.eNum.TileMap.Y * 0.042)]]);

    const pub_map = () => {
    	Global.Top = Global.Tile * (Constant.eNum.TileMap.Y * 0.056);
  		Global.Bottom = Global.Tile * (Constant.eNum.TileMap.Y * 0.944);
  		Draw.rect('fill', Constant.Canvas.BACKGROUND, null, 0, Global.Top, Global.Width, Global.Bottom);
    }

    const pub_name = () => Draw.text(Global.Tile * 1.5, Global.Layout.theme, [[Constant.Game.NAME, Global.Tile * (Constant.eNum.TileMap.X * 0.4), Global.Tile * (Constant.eNum.TileMap.Y * 0.05)]]);

    const pub_rect = (type, fs, ss, x, y, w, h, rl, f, s) => {
    	if (fs) ctx.fillStyle = fs;
    	if (ss) ctx.strokeStyle = ss;
    	if (type === 'fill') ctx.fillRect(x, y, w, h);
    	else if (type === 'stroke') {
    		rl ? ctx.lineWidth = r : ctx.lineWidth = 1;
    		ctx.strokeRect(x, y, w, h);
    	}
    	else if (type === 'round') {
    		/**
			 * From:
			 *  http://js-bits.blogspot.com/2010/07/canvas-rounded-corner-rectangles.html
			 */
			if (typeof s == 'undefined') s = true;
			if (typeof rl === 'undefined') rl = 5;
			if (typeof rl === 'number') rl = {tl: rl, tr: rl, br: rl, bl: rl};
			else {
			    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
			    for (var side in defaultRadius) rl[side] = rl[side] || defaultRadius[side];
			}
			ctx.beginPath();
			ctx.moveTo(x + rl.tl, y);
			ctx.lineTo(x + w - rl.tr, y);
			ctx.quadraticCurveTo(x + w, y, x + w, y + rl.tr);
			ctx.lineTo(x + w, y + h - rl.br);
			ctx.quadraticCurveTo(x + w, y + h, x + w - rl.br, y + h);
			ctx.lineTo(x + rl.bl, y + h);
			ctx.quadraticCurveTo(x, y + h, x, y + h - rl.bl);
			ctx.lineTo(x, y + rl.tl);
			ctx.quadraticCurveTo(x, y, x + rl.tl, y);
			ctx.closePath();
			if (f) ctx.fill();
			if (s) ctx.stroke();
    	}
    }

    const pub_score = () => Draw.text(Global.Tile, Global.Layout.theme, [['Score:' + Global.Score, Global.Tile, Global.Tile * (Constant.eNum.TileMap.Y * 0.042)]]);

    const pub_soundToggle = () => {
    	Draw.rect('round', Constant.Canvas.BACKGROUND, 'black', Global.Tile * 5, Global.Tile * (Constant.eNum.TileMap.Y * 0.962), Global.Tile * 2, Global.Tile, Global.Tile / 2, true);
  		Global.Sound ? Draw.rect('round', 'gray', null, Global.Tile * 6, Global.Tile * (Constant.eNum.TileMap.Y * 0.962), Global.Tile, Global.Tile, Global.Tile / 2, true) : Draw.rect('round', 'gray', null, Global.Tile * 5, Global.Tile * (Constant.eNum.TileMap.Y * 0.962), Global.Tile, Global.Tile, Global.Tile / 2, true);
    }

    const pub_text = (s, f, lines) => {
    	ctx.fillStyle = f;
        ctx.font = Constant.Font.STYLE + ' ' + s + 'px ' + Constant.Font.FAMILY;
        for (line of lines) ctx.fillText(line[0], line[1], line[2]);
    }

	const pub_top = () => {
		Draw.rect('fill', Constant.Canvas.BACKGROUND, null, 0, 0, Global.Width, Global.Tile * (Constant.eNum.TileMap.Y * 0.56));
  		Draw.score(); // Score in upper left
  		Draw.name(); // Name in upper center
  		Draw.lives(); // Lives in upper right
  	}

    return {
        arc:        			pub_arc,
        canvas:     			pub_canvas,
        clear:     				pub_clear,
        controls:   			pub_controls,
        controlInstructions: 	pub_controlInstructions,
        gameInstructions: 		pub_gameInstructions,
        init:       			pub_init,
        lives: 					pub_lives,
        map: 					pub_map,
        name: 					pub_name,
        rect:       			pub_rect,
        score:      			pub_score,
        soundToggle: 			pub_soundToggle,
        text:       			pub_text,
        top: 					pub_top
    };
})();