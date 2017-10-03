function pauseUpdate(p = true) { Global.Pause = !p; }
function soundUpdate(s = true) { Global.Sound = !s; }
function lockUpdate(l = true) { Global.Lock = !l; }

function game_init() {
  Draw.init(); // Initialize the canvas object
  Global.init(); // Set global variables
  Player.set(); // Reset paddle position
  Char.set(); // Reset ball position
  Elements.init(); // Reset bricks
  Sound.init(Constant.Browser.SAFARI, ['ElementHit', 'GameOver', 'GameStart', 'GameWon', 'LevelUp', 'LifeOver', 'LifeWon', 'PlayerHit'], 'audio');
  Control.init(); // Add event listeners and handle user actions
  Control.resize(Global.Start); // Initialize game based on current browser dimensions
  //Global.Pause = false;
}
/*
function canvasDraw(s = true) {
  Draw.clear(Global.Width, Global.Height); // Clear canvas to redraw
  topDraw(); // Draw score, game name, and lives
  tileMapDraw(); // Game play (most of canvas)
  Player.draw(); // Paddle
  Char.draw(); // Ball
  s ? Elements.draw() : Elements.init(); // Bricks
  controlsDraw(); // Controls at bottom
  // If game has started...
  if (Global.Level > 0 || s) {
    gameLoop(); // Loop through game play
  // Else if game hasn't started, show instructions over tile map
  } else {
    instructionsDraw(); // Marquee default
  }
}

// Top of canvas
function topDraw() {
  Draw.rect('fill', 'white', null, 0, 0, Global.Width, Global.Tile * (Constant.eNum.TileMap.Y * 0.56));
  scoreDraw(); // Score in upper left
  gameNameDraw(); // Name in upper center
  livesDraw(); // Lives in upper right
}

function scoreDraw() {
  Draw.text(Global.Tile, Global.Layout.theme, [['Score:' + Global.Score, Global.Tile, Global.Tile * (Constant.eNum.TileMap.Y * 0.042)]]);
}

function gameNameDraw() {
  Draw.text(Global.Tile * 1.5, Global.Layout.theme, [['Bouncy Bouncy', Global.Tile * (Constant.eNum.TileMap.X  * 0.3), Global.Tile * (Constant.eNum.TileMap.Y * 0.05)]]);
}
  
function livesDraw() {
  Draw.text(Global.Tile, Global.Layout.theme, [['Lives:' + Global.Lives, Global.Tile * (Constant.eNum.TileMap.X * 0.85), Global.Tile * (Constant.eNum.TileMap.Y * 0.042)]]);
}

// Main part of canvas where game is played
function tileMapDraw() {
  Global.Top = Global.Tile * (Constant.eNum.TileMap.Y * 0.056);
  Global.Bottom = Global.Tile * (Constant.eNum.TileMap.Y * 0.944);
  Draw.rect('fill', 'white', null, 0, Global.Top, Global.Width, Global.Bottom);
}

// Bottom of canvas
function controlsDraw() {
  Draw.rect('fill', Global.Layout.theme, null, 0, Global.Tile * (Constant.eNum.TileMap.Y * 0.944), Global.Width, Global.Tile * (Constant.eNum.TileMap.Y * 0.056));
  if (!Constant.Test.TOUCH) {
    Draw.text(Global.Tile, 'white', [['Sound: ', Global.Tile, Global.Tile * (Constant.eNum.TileMap.Y * 0.985)]]); // Sound Text
    drawSoundToggle(); // Sound button
    drawControlInstructions(); // Instructions
  } else {
    Global.Sound ? document.getElementById('S').style.color = 'green' : document.getElementById('S').style.color = 'red';
  }
}

function drawSoundToggle() {
  Draw.rect('round', 'white', 'black', Global.Tile * 5, Global.Tile * (Constant.eNum.TileMap.Y * 0.962), Global.Tile * 2, Global.Tile, Global.Tile / 2, true);
  Global.Sound ? Draw.rect('round', 'gray', null, Global.Tile * 6, Global.Tile * (Constant.eNum.TileMap.Y * 0.962), Global.Tile, Global.Tile, Global.Tile / 2, true) : Draw.rect('round', 'gray', null, Global.Tile * 5, Global.Tile * (Constant.eNum.TileMap.Y * 0.962), Global.Tile, Global.Tile, Global.Tile / 2, true);
}

function drawControlInstructions() {
  Draw.text(Global.Tile * 0.65, 'white', [['Sound: [S], Left: [A], Right: [D], Pause: [SPACE]', Global.Tile * (Constant.eNum.TileMap.X * 0.35), Global.Tile * (Constant.eNum.TileMap.Y - 0.65)]]);
}

function instructionsDraw() {
  // Instruction box
  Draw.rect('round', 'rgba(200, 200, 200, .5)', 'black', Global.Tile * (Constant.eNum.TileMap.X * 0.25), Global.Tile * (Constant.eNum.TileMap.Y * 0.25), Global.Tile * (Constant.eNum.TileMap.X * 0.5), Global.Tile * (Constant.eNum.TileMap.Y * 0.5), Global.Tile, true);
  // Instruction Text
  var textArray = [];
  if (Constant.Test.TOUCH) {
    textArray.push(['TAP "S" to start', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.42)]);
    textArray.push(['game & toggle sound', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.45)]);
    textArray.push(['TAP "P" to pause', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.52)]);
    textArray.push(['TAP "L" for left', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.59)]);
    textArray.push(['and "R" for right', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.62)]);
  } else {
    textArray.push(['Press SPACE or RETURN', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.33)]);
    textArray.push(['to start and pause game', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.36)]);
    textArray.push(['Press LEFT or A', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.44)]);
    textArray.push(['to move paddle left', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.47)]);
    textArray.push(['Press RIGHT or D', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.55)]);
    textArray.push(['to move paddle right', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.58)]);
    textArray.push(['Press TAB or S', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.67)]);
    textArray.push(['to toggle sound', Global.Tile * (Constant.eNum.TileMap.X * 0.285), Global.Tile * (Constant.eNum.TileMap.Y * 0.70)]);
  }
  Draw.text(Global.Tile, Global.Layout.theme, textArray); 
}
*/
function gameLoop() {
  // Continue looping if game isn't paused
  if (!Global.Pause) {
    gameCollisionDetection();
    // If the ball hits the right or left edge of the canvas, reverse the direction
    if (Char.X + Char.DX > Global.Width - Char.R || Char.X + Char.DX < Char.R) {
      Char.DX = -Char.DX;
    }

    // If the ball hits the top edge of the canvas, reverse the direction.
    if (Char.Y + Char.DY < Global.Top) {
      Char.DY = -Char.DY;
    } 
    // If the ball hits the paddle or bottom of canvas...
    else if (Char.Y + Char.DY > Global.Bottom - Player.H - (Char.R / 2)) {
      // Ball bounces off of paddle
      if (Char.X > Player.X && Char.X < Player.X + Player.W) {
        Sound.play('PlayerHit', Constant.Browser.SAFARI);
        // Record where on the paddle the ball hits
        var playerHit = Char.X - Player.X + Player.W;
        // The further from the middle of the paddle that the ball hits should increase the speed, closer should slow it down
        var distFromMid = Math.abs(playerHit - Player.M);
        var speedOffset = (distFromMid - Player.W / 4) / (Player.W / 4);
        
        // Ball should speed up faster than slow down (otherwise, too slow quickly)
        if (speedOffset < 0) {
          speedOffset * 0.5;
        } 
        if (Char.DX > 0) {
          Char.DX += Char.S * speedOffset.toFixed(2);
        } else {
          Char.DX -= Char.S * speedOffset.toFixed(2);
        }

        Char.DY = -Char.DY;
      }
      // Hitting bottom of canvas loses lives / ends game
      else {
        Global.Lives--;
        if (Global.Lives < 1) {
          gameInterlude('GameOver'); // Show "Game Lost" animation
        } else {
          gameInterlude('LifeOver'); // Show "Life lost" animation
          Player.set(); // Reset paddle position
          Char.set(); // Reset ball position
          Global.ScoreCounter = Global.Level + 1; // reset score increment
        }
      }
    }

    // Animate the paddle when the left or right buttons are pressed (stopping at edge of canvas)
    if (Global.Right && Player.X < Global.Width - Player.W) {
      Player.X += Constant.eNum.Player.SPEED;
    } else if (Global.Left && Player.X > 0) {
      Player.X -= Constant.eNum.Player.SPEED;
    }

    // Update ball position
    Char.X += Char.DX;
    Char.Y += Char.DY;

    requestAnimationFrame(Draw.canvas);
  }
}

function gameCollisionDetection() {
  for (var y = 0; y < Elements.Array.length; y++) {
    for (var x = 0; x < Elements.Array[y].length; x++) {
      var el = Elements.Array[y][x];
      // If the ball touches one of the bricks, reverse ball direction, remove brick and add to score
      if (el.s === 1 && Char.X > el.x && Char.X < el.x + el.w && Char.Y > el.y && Char.Y < el.y + el.h) {
        Sound.play('ElementHit', Constant.Browser.SAFARI || Constant.Test.TOUCH); // too many audio calls on mobile/tablet
        Char.DY = -Char.DY;
        el.s = 0;
        Global.Score += Global.ScoreCounter;
        // Check if an extra life has been earned
        for (var i = 0; i < Global.ExtraLives.length; i++) {
          if (Global.ExtraLives[i] > 0 && Global.Score > Global.ExtraLives[i]) {
            Global.Lives++;
            Sound.play('LifeWon', Constant.Browser.SAFARI);
            Global.ExtraLives[i] = 0;
            Draw.lives();
          }
        }
        Global.ScoreCounter += Global.Level + 1;
        Elements.Counter--;
        if (Elements.Counter === 0) {
          if (Global.Level === Game.Levels.length - 1) {
            Global.Score *= Global.Lives;
            gameInterlude('GameWon'); // Show "Game Won" animation
          } else {
            gameInterlude('LevelUp'); // Show "Level Up" animation
          }
        }
      }
    }
  }
}

function gameLevelUp() {
  Global.Level++;
  Global.Layout = Game.Levels[Global.Level];
  Player.set(); // Reset paddle position
  Char.set(); // Reset ball position
  Global.ScoreCounter = Global.Level + 1; // reset score increment
  //Global.SpeedIncrement = Global.Level * 0.1 + 1; // reset
  Draw.canvas(false);
}

function gameInterlude(type) {
  Global.Pause = Global.Lock = true;
  Interlude.init(Global.Width, Global.Height, Global.Tile, Constant.eNum.TileMap.Y, Global.Score);
  Sound.play(type, Constant.Browser.SAFARI);
  Interlude[type]();
}
