const Control = (() => {
    /**
    * Keyboard Methods
    */
    const keyDownHandler = e => {
        if (!Global.Lock) {
          switch (e.keyCode) {
            case 39:
            case 68:
              Global.Right = true;
              break;
            case 37:
            case 65:
              Global.Left = true;
              break;
            case 13:
            case 32:
              pauseUpdate(Global.Pause);
              Global.Pause
              if (!Global.Pause) {
                if (!Global.Start) {
                  gameInterlude('GameStart'); // Show "Ready, Set, Go" animation
                  Global.Start = true;
                } else {
                  gameLoop(); // Continue game
                }
              }
              break;
            case 9: 
            case 83:
              if (Constant.Test.AUDIO) {
                soundUpdate(Global.Sound);
              }
              break;
            default:
              if (!Global.Start && e.keyCode >= 48 && e.keyCode <=57) {
                Global.Level = e.keyCode - 48;
                Global.Layout = Game.Levels[Global.Level];
                Elements.init(false); // Reset elements for updated level
              }
              break;
          }
        }
        
        e.preventDefault();
    }

    const keyUpHandler = e => { // Stop paddle movement when buttons depressed
        if (!Global.Lock) {
          switch (e.keyCode) {
            case 39:
            case 68:
              Global.Right = false;
              break;
            case 37:
            case 65:
              Global.Left = false;
              break;
            default:
              break;
          }
        }
        e.preventDefault();
    }

    /**
    * Mouse Methods
    */
    const mouseMoveHandler = e => {
        if (Global.Start && !Global.Pause && !Global.Lock) {
          let rX = e.clientX - canvas.getBoundingClientRect().left;
          if (rX > Player.W / 3 && rX < canvas.width - Player.W / 3) Player.X = rX - Player.W / 2;
        }
        e.preventDefault();
    }

    /**
    * Touch Methods
    */
    const touchStartHandler = e => {
        if (!Global.Lock) {
          if (!Global.Start) { // If starting game, show "Ready, Set, Go" animation
            gameInterlude('GameStart'); 
            Global.Start = true;
          } else if (Constant.Test.AUDIO) {
            soundUpdate(Global.Sound);
          }
        }
        e.preventDefault();
    }

    const touchPauseHandler = e => {
        if (Global.Start && !Globa.Lock) { // Should only fire if game has started
          pauseUpdate(Global.Pause);
          if (!Global.Pause) gameLoop(); // Continue game
        }
        e.preventDefault();
    }

    const touchLeftStartHandler = e => {
        if (Global.Start && !Global.Pause && !Global.Lock) { // Should only fire if game has started and not paused
          Global.Left = true;
        }
        e.preventDefault();
    }

    const touchLeftEndHandler = e => {
        Global.Left = false;
        e.preventDefault();
    }

    const touchRightStartHandler = e => {
        if (Global.Start && !Global.Pause && !Global.Lock) { // Should only fire if game has started and not paused
          Global.Right = true;
        }
        e.preventDefault();
    }

    const touchRightEndHandler = e => {
        Global.Right = false;
        e.preventDefault();
    }

    const pub_init = () => {
        // Listen for user actions
        document.addEventListener('keydown', keyDownHandler, false);
        document.addEventListener('keyup', keyUpHandler, false);
        document.addEventListener('mousemove', mouseMoveHandler, false);
        document.getElementById('S').addEventListener('touchstart', touchStartHandler, false);
        document.getElementById('P').addEventListener('touchstart', touchPauseHandler, false);
        document.getElementById('L').addEventListener('touchstart', touchLeftStartHandler, false);
        document.getElementById('L').addEventListener('touchend', touchLeftEndHandler, false);
        document.getElementById('R').addEventListener('touchstart', touchRightStartHandler, false);
        document.getElementById('R').addEventListener('touchend', touchRightEndHandler, false);
        window.addEventListener('resize', () => { Control.resize() }); // Handle browser resizing
    }

    const pub_resize = s => { // Any time the browser is resized, redraw canvas
      Global.Pause = true;
      Global.SpeedIncrement = 1; // reset

      Global.Width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      Global.Height = Math.max(document.documentElement.clientHeight, window.innerHeight || /* ie */ document.documentElement.offsetHeight || 0);
     
      let fM = 0; // Fixed measure for scaling tile map to browser dimensions
      let wP = true; // Width precedence (vs. Height precedence)
     
      if (Global.Width < 450) { // width param prevents x overflow on phones in portrait mode
        Global.SpeedIncrement = 3.5;
        fM = Math.floor(380 / Constant.eNum.TileMap.X);
        fM *= Constant.eNum.TileMap.X;
      } else if (Constant.eNum.TileMap.Y > Constant.eNum.TileMap.X) { 
        wP = false;
        for (var i = 0; i < 50; i++) {
          fM = Constant.eNum.TileMap.Y * i;
          if (Global.Height > fM && Global.Height < fM + Constant.eNum.TileMap.Y) break;
          Global.SpeedIncrement *= 1.1;
        }
        if (Constant.Test.TOUCH) Global.SpeedIncrement /= 2; // Tablet fix         
      } else {
        for (var i = 0; i < 50; i++) {
          fM = Constant.eNum.TileMap.X * i;
          if (Global.Width > fM && Global.Width < fM + Constant.eNum.TileMap.X) break;
          Global.SpeedIncrement *= 1.1;
        }
        if (Constant.Test.TOUCH) Global.SpeedIncrement /= 2; // Tablet fix 
      }
      
      if (wP) { // Width of window sets game dimensions
        Global.Width = fM;
        canvas.width = Global.Width;
        canvas.height = fM * (Constant.eNum.TileMap.Y / Constant.eNum.TileMap.X);
        Global.Height = canvas.height;
        Global.Tile = Math.round(Global.Width / Constant.eNum.TileMap.X);
      } else { // Height of window sets game dimensions
        Global.Height = fM;
        canvas.height = Global.Height;
        canvas.width = fM * (Constant.eNum.TileMap.X / Constant.eNum.TileMap.Y);
        Global.Width = canvas.width;
        Global.Tile = Math.round(Global.Height / Constant.eNum.TileMap.Y); 
      }

      Global.Bottom = Global.Tile * (Constant.eNum.TileMap.Y * 0.944);
      Global.Top = Global.Tile * (Constant.eNum.TileMap.Y * 0.056);
      Player.set(); // Reset paddle position
      Char.set(); // Reset ball position
      
      if (Elements.Array.length > 0) {
        Elements.scale(); // Redraw bricks to fit new canvas size
      }

      Draw.canvas(s);
    }

    return {
        init:       pub_init,
        resize:     pub_resize
    };
})();