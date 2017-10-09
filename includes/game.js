const Game = {
  // Levels data modified from : https://github.com/jakesgordon/javascript-breakout/blob/master/levels.js
  Levels: [
    { //colors: Breakout.Colors.pastel,
      colors: {
        y: "#FFF7A5", // yellow
        p: "#FFA5E0", // pink
        b: "#A5B3FF", // blue
        g: "#BFFFA5", // green
        o: "#FFCBA5"  // orange
      },

      theme: "#7280CC",
      player: "#FFCBA5",

      elements: [
        "", "", "", "", "", "",
        "yyyyYYYYyyyyYYYYyyyyYYYYyyyy",
        "ppppPPPPppppPPPPppppPPPPpppp",
        "bbbbBBBBbbbbBBBBbbbbBBBBbbbb",
        "ggggGGGGggggGGGGggggGGGGgggg",
        "ooooOOOOooooOOOOooooOOOOoooo"
      ]
    },

    { //colors: Breakout.Colors.arkanoid,
      colors: {
        w: "#FCFCFC", // white
        o: "#FC7460", // orange
        l: "#3CBCFC", // light blue
        g: "#80D010", // green
        r: "#D82800", // red
        b: "#0070EC", // blue
        p: "#FC74B4", // pink
        y: "#FC9838", // yellow
        s: "#BCBCBC", // silver
        d: "#F0BC3C"  // gold
      },

      theme: "#BCBCBC",
      player: "#FC9838",

      elements: [
        "", "",
        "         yy      yy         ",
        "           yy  yy           ",
        "           yy  yy           ", 
        "         ssSSssSSss         ",
        "         ssSSssSSss         ",
        "       SSsswwsswwssSS       ",
        "       SSsswwsswwssSS       ",
        "     ssSSssSSssSSssSSss     ",
        "     ssSSssSSssSSssSSss     ",
        "     ss  ssSSssSSss  ss     ",
        "     ss  ss      ss  ss     ",
        "     ss  ss      ss  ss     ",
        "           ss  ss           ",
        "           ss  ss           "
      ]
    },

    { //colors: Breakout.Colors.arkanoid,
      colors: {
        w: "#FCFCFC", // white
        o: "#FC7460", // orange
        l: "#3CBCFC", // light blue
        g: "#80D010", // green
        r: "#D82800", // red
        b: "#0070EC", // blue
        p: "#FC74B4", // pink
        y: "#FC9838", // yellow
        s: "#BCBCBC", // silver
        d: "#F0BC3C"  // gold
      },

      theme: "#80D010",
      player: "#D82800",

      elements: [
        "",
        "oo",
        "ooll",
        "oollgg",
        "oollggbb",
        "oollggbbrr",
        "oollggbbrroo",
        "oollggbbrrooll",
        "oollggbbrroollgg",
        "oollggbbrroollggbb",
        "oollggbbrroollggbbrr",
        "oollggbbrroollggbbrroo",
        "oollggbbrroollggbbrrooll",
        "oollggbbrroollggbbrroollgg",
        "oollggbbrroollggbbrroollggyy"
      ]
    },

    { //colors: Breakout.Colors.arkanoid,
      colors: {
        w: "#FCFCFC", // white
        o: "#FC7460", // orange
        l: "#3CBCFC", // light blue
        g: "#80D010", // green
        r: "#D82800", // red
        b: "#0070EC", // blue
        p: "#FC74B4", // pink
        y: "#FC9838", // yellow
        s: "#BCBCBC", // silver
        d: "#F0BC3C"  // gold
      },

      theme: "#FC7460",
      player: "#0070EC",

      elements: [
        "", "",
        "             ss             ",
        "         bbBBssggGG         ",
        "       BBbbWWwwWWGGgg       ",
        "     bbBBwwWWwwWWwwggGG     ",
        "     bbBBwwWWwwWWwwggGG     ",
        "     bbBBwwWWwwWWwwggGG     ",
        "     ss  ss  ss  ss  ss     ",
        "             ss             ",
        "             ss             ",
        "         oo  oo             ",
        "         ooOOoo             ",
        "           OO               "
      ]
    },

    { //colors: Breakout.Colors.pastel,
      colors: {
        y: "#FFF7A5", // yellow
        p: "#FFA5E0", // pink
        b: "#A5B3FF", // blue
        g: "#BFFFA5", // green
        o: "#FFCBA5"  // orange
      },

      theme: "#FFCBA5",
      player: "#BFFFA5",

      elements: [
        "", "",
        " yyYYyyYYyyYY YYyyYYyyYYyy ", 
        " bbBBbbBBbbBB BBbbBBbbBBbb ", 
        " ggGGggGGggGG GGggGGggGGgg ", 
        " ooOOooOOooOO OOooOOooOOoo ", 
        "", "", 
        " yyYYyyYYyyYY YYyyYYyyYYyy ", 
        " bbBBbbBBbbBB BBbbBBbbBBbb ", 
        " ggGGggGGggGG GGggGGggGGgg ", 
        " ooOOooOOooOO OOooOOooOOoo ", 
        "", "", 
        " yyYYyyYYyyYY YYyyYYyyYYyy ", 
        " bbBBbbBBbbBB BBbbBBbbBBbb ", 
        " ggGGggGGggGG GGggGGggGGgg ", 
        " ooOOooOOooOO OOooOOooOOoo "
      ]
    },

    { //colors: Breakout.Colors.vintage,
      colors: {
        a: "#EFD279", // yellow
        b: "#95CBE9", // light blue
        c: "#024769", // dark blue
        d: "#AFD775", // light green
        e: "#2C5700", // grass
        f: "#DE9D7F", // red
        g: "#7F9DDE", // purple
        h: "#00572C", // dark green
        i: "#75D7AF", // mint
        j: "#694702", // brown
        k: "#E9CB95", // peach
        l: "#79D2EF"  // blue
      },

      theme: "#2C5700",
      player: "#E9CB95",

      elements: [
        "", "", "", 
        "  aaAAaaAAaaAAaaAAaaAAaaAA  ", 
        "   bbBBbbBBbbBBbbBBbbBBbb   ", 
        "    ccCCccCCccCCccCCccCC    ", 
        "     ddDDddDDddDDddDDdd     ", 
        "      eeEEeeEEeeEEeeEE      ", 
        "       ffFFffFFffFFff       ", 
        "        ggGGggGGggGG        ", 
        "         hhHHhhHHhh         ", 
        "          iiIIiiII          ", 
        "           jjJJjj           ", 
        "            kkKK            ", 
        "             ll             "
      ]
    },

    { //colors: Breakout.Colors.vintage,
      colors: {
        a: "#EFD279", // yellow
        b: "#95CBE9", // light blue
        c: "#024769", // dark blue
        d: "#AFD775", // light green
        e: "#2C5700", // grass
        f: "#DE9D7F", // red
        g: "#7F9DDE", // purple
        h: "#00572C", // dark green
        i: "#75D7AF", // mint
        j: "#694702", // brown
        k: "#E9CB95", // peach
        l: "#79D2EF"  // blue
      },

      theme: "#7F9DDE",
      player: "#EFD279",

      elements: [
        "", "",
        " aabbccddeeffggFFEEDDCCBBAA ",
        "  aabbccddeeffFFEEDDCCBBAA  ",
        "   aabbccddeeffEEDDCCBBAA   ",
        "    aabbccddeeEEDDCCBBAA    ",
        "     aabbccddeeDDCCBBAA     ",
        "      aabbccddDDCCBBAA      ",
        "       aabbccddCCBBAA       ",
        "        aabbccCCBBAA        ",
        "         aabbccBBAA         ",
        "      hh  aabbCCAA  hh      ",
        "     hhHH  aabbAA  hhHH     ",
        "    hhiiHH  aaAA  hhiiHH    ",
        "   hhiiIIHH  aa  hhiiIIHH   ",
        "  hhiijjIIHH    hhiijjIIHH  ",
        " hhiijjJJIIHH  hhiijjJJIIHH "
      ]
    },

    { //colors: Breakout.Colors.pastel,
      colors: {
        y: "#FFF7A5", // yellow
        p: "#FFA5E0", // pink
        b: "#A5B3FF", // blue
        g: "#BFFFA5", // green
        o: "#FFCBA5"  // orange
      },

      theme: "#FFA5E0",
      player: "#A5B3FF",

      elements: [
        "                            ",
        "                            ",
        " bbBBbbBBbbBBbbBBbbBBbbBBbb ",
        " ooggGGggGGggGGggGGggGGggoo ",
        " ooggGGggGGggGGggGGggGGggoo ",
        " ooppPPppPPppPPppPPppPPppoo ",
        " ooppPPppPPppBBppPPppPPppoo ",
        " ooppPPppPPbbBBbbPPppPPppoo ",
        " ooppPPppBBbbOObbBBppPPppoo ",
        " ooppPPbbBBooOOooBBbbPPppoo ",
        " ooppBBbbOOooYYooOObbBBppoo ",
        " oobbBBOOooyyYYyyooOOBBbboo ",
        " oobbooOOYYyyYYyyYYOOoobboo ",
        " ooOOooyyYYyyYYyyYYyyooOOoo ",
        " ooOOYYyyYYyyYYyyYYyyYYOOoo ",
        " ooyyYYyyYYyyYYyyYYyyYYyyoo ",
        " ooyyYYyyYYyyYYyyYYyyYYyyoo ",
        " bbBBbbBBbbBBbbBBbbBBbbBBbb "
      ]
    },

    { colors: {
        b: '#111111', // black,
        w: '#EEEEEE', // white,
        c: '#EC7150', // cherry,
        s: '#B33A2F'  // shadow,
      },

      theme: "#EC7150",
      player: '#B33A2F',

      elements: [
        "",
        "      bBb                   ",
        "     bcCcb                  ",
        "    bcwcCsb  b              ",
        "    bcCcCsb b               ",
        "     bcCsb b                ",
        "   bBsSsBbBb       bBb      ",
        "  bcCcbBbcCcb     bcCcb     ",
        " bcwcCsbcwcCsb   bcwcCsb  b ",
        " bcCcCsbcCcCsb   bcCcCsb b  ",
        " bcCcsSbcCcsSb    bcCsb b   ",
        "  bsSsb bsSsb   bBsSsBbBb   ",
        "   bBb   bBb   bcCcbBbcCcb  ",
        "              bcwcCsbcwcCsb ",
        "              bcCcCsbcCcCsb ",
        "              bcCcsSbcCcsSb ",
        "               bsSsb bsSsb  ",
        "                bBb   bBb   "
      ]
    },

    { colors: {
        r: '#D80000', // red
        b: '#706800', // brown
        o: '#F8AB00', // orange
        f: '#F83800', // fire
        w: '#FFFFFF', // white
        e: '#FFE0A8'  // beige
      },

      theme: '#F83800',
      player: '#706800',

      elements: [
        "",
        "    rRrRr                   ",
        "   rRrRrRrRr                ",
        "   bBboObo                  ",
        "  boboOoboOo     f    f   f ",
        "  bobBoOoboOo   f e         ",
        "  bBoOoObBbB     f  f     e ",
        "    oOoOoOo      fF      e  ",
        "   bBrbBb      e  f fF f  f ",
        "  bBbrbBrbBb     FfFfFf  F  ",
        " bBbBrRrRbBbB   fFeFeFfFf   ",
        " oObrorRorboO  FfEeEeEfF    ",
        " oOorRrRrRoOo  FeEeWwEeFf   ",
        " oOrRrRrRrRoO fFeFwWfEeFf   ",
        "   rRr  RrR   fFeFwWfEeFf   ",
        "  bBb    bBb  fFeEwWeEeFf   ",
        " bBbB    bBbB fFfEeEeEfF    ",
        "               FfFfFfFfF    ",
        "                 FfFfF      "
      ]
    }
  ],
  collisionDetection() {
    for (let y = 0; y < Elements.Array.length; y++) {
        for (let x = 0; x < Elements.Array[y].length; x++) {
          let el = Elements.Array[y][x];
          // If the ball touches one of the bricks, reverse ball direction, remove brick and add to score
          if (el.s === 1 && Char.X > el.x && Char.X < el.x + el.w && Char.Y > el.y && Char.Y < el.y + el.h) {
            Constant.Browser.SAFARI || Constant.Test.TOUCH ? console.log('touch device ignore') : Sound.play('ElementHit', Constant.Browser.SAFARI); // too many audio calls on mobile/tablet
            Char.DY = -Char.DY;
            el.s = 0;
            Global.Score += Global.ScoreCounter;
            // Check if an extra life has been earned
            for (let i = 0; i < Global.ExtraLives.length; i++) {
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
                Game.interlude('GameWon'); // Show "Game Won" animation
              } else {
                Game.interlude('LevelUp'); // Show "Level Up" animation
              }
            }
          }
        }
      }
  },
  init() {
    Draw.init(); // Initialize the canvas object
    Global.init(); // Set global variables
    Player.set(); // Reset paddle position
    Char.set(); // Reset ball position
    Elements.init(); // Reset bricks
    Sound.init(Constant.Browser.SAFARI, ['ElementHit', 'GameOver', 'GameStart', 'GameWon', 'LevelUp', 'LifeOver', 'LifeWon', 'PlayerHit'], 'audio');
    Control.init(); // Add event listeners and handle user actions
    Control.resize(Global.Start); // Initialize game based on current browser dimensions
  },
  interlude(type) { // Initiate interlude animation and sound
      Global.Pause = Global.Lock = true; // Pause game play & lock user control actions (mouse, key, etc.)
      Global.Left = Global.Right = false; // Reset any right or left actions
      Interlude.init(Global.Width, Global.Height, Global.Tile, Constant.eNum.TileMap.Y, Global.Score);
      Sound.play(type, Constant.Browser.SAFARI);
      Interlude[type](); // Trigger interlude animation
      Global.SpeedIncrement = Global.SpeedBaseline; // Reset ball speed
      Player.set(); // Reset paddle position
      Char.set(); // Reset ba;; position
  },
  levelUp() {
      Global.Level++;
      Global.Layout = Game.Levels[Global.Level];
      Player.set(); // Reset paddle position
      Char.set(); // Reset ball position
      Global.ScoreCounter = Global.Level + 1; // reset score increment
      Draw.canvas(false); // Initializes bricks for new level
  },
  loop() {
      // Continue looping if game isn't paused
      if (!Global.Pause) {
        this.collisionDetection();
        // If the ball hits the right or left edge of the canvas, reverse the direction
        if (Char.X + Char.DX > Global.Width - Char.R || Char.X + Char.DX < Char.R) Char.DX = -Char.DX;

        // If the ball hits the top edge of the canvas, reverse the direction.
        if (Char.Y + Char.DY < Global.Top) Char.DY = -Char.DY;
        // If the ball hits the paddle or bottom of canvas...
        else if (Char.Y + Char.DY > Global.Bottom - Player.H - (Char.R / 2)) {
          // Ball bounces off of paddle
          if (Char.X > Player.X && Char.X < Player.X + Player.W) {
            Sound.play('PlayerHit', Constant.Browser.SAFARI);
            // Record where on the paddle the ball hits
            let playerHit = Char.X - Player.X + Player.W;
            // The further from the middle of the paddle that the ball hits should increase the speed, closer should slow it down
            let distFromMid = Math.abs(playerHit - Player.M);
            let speedOffset = (distFromMid - Player.W / 4) / (Player.W / 4);
            
            // Ball should speed up faster than slow down (otherwise, too slow quickly)
            if (speedOffset < 0) speedOffset * 0.5;
            Char.DX > 0 ? Char.DX += Char.S * speedOffset.toFixed(2) : Char.DX -= Char.S * speedOffset.toFixed(2);

            Char.DY = -Char.DY;
          }
          // Hitting bottom of canvas loses lives / ends game
          else {
            Global.Lives--;
            if (Global.Lives < 1) this.interlude('GameOver'); // Show "Game Lost" animation
            else {
              this.interlude('LifeOver'); // Show "Life lost" animation
              Player.set(); // Reset paddle position
              Char.set(); // Reset ball position
              Global.ScoreCounter = Global.Level + 1; // reset score increment
            }
          }
        }

        // Animate the paddle when the left or right buttons are pressed (stopping at edge of canvas)
        if (Global.Right && Player.X < Global.Width - Player.W) Player.X += Constant.eNum.Player.SPEED;
        else if (Global.Left && Player.X > 0) Player.X -= Constant.eNum.Player.SPEED;

        Char.X += Char.DX; // Update ball position
        Char.Y += Char.DY;

        requestAnimationFrame(Draw.canvas);
      }
  }
}
