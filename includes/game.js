// Modified from : https://github.com/jakesgordon/javascript-breakout/blob/master/levels.js

const Game = {
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
  ]
}
