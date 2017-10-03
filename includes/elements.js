const Elements = {
  Array   : [],
  Counter : 0,
  	draw() { // Set up elements in default locale
      for(var y = 0 ; y < Elements.Array.length ; y++) {
        for (var x = 0 ; x < Elements.Array[y].length ; x++) {
          var el = Elements.Array[y][x];
          if (el.s === 1) {
            Draw.rect('stroke', null, 'black', el.x, el.y, el.w, el.h);
            Draw.rect('fill', el.c, null, el.x+Constant.eNum.Elements.PADDING-2, el.y+Constant.eNum.Elements.PADDING-2, el.w-Constant.eNum.Elements.PADDING+1, el.h-Constant.eNum.Elements.PADDING+1);
          }
        }
      }
  	},
    init(d = true) {
      Elements.Array = [];
      // Layout elements based on levels.js Breakout object
      let elY = Global.Layout.elements.length;
      Elements.Counter = 0;
      let elArrayY = 0;
      for (let y = 0 ; y < elY ; y++) {
        let line  = Global.Layout.elements[y] + " "; // extra space simplifies loop
        if (line !== ' ') {
          let elArrayX = 0;
          Elements.Array[elArrayY] = [];
          let elX = line.length;
          let elW = 1;
          let elN = 0;
          for (let x = 0 ; x < elX ; x++) {
            let c = line[x];
            if (c !== ' ') {
              if (x+1 < elX) elN = x+1;
              if (elN > 0 && c == line[elN]) elW++;
              else {
                let elColor = Global.Layout.colors[c.toLowerCase()];
                Elements.Array[elArrayY][elArrayX] = { 
                  x: Global.Tile * (x-elW+1), 
                  y: Global.Tile * (Constant.eNum.Elements.PADDING + y), 
                  w: (Global.Tile * elW) - Constant.eNum.Elements.PADDING, 
                  h: Global.Tile - Constant.eNum.Elements.PADDING, 
                  c: elColor, 
                  s: 1,
                  z: Global.Tile // a placeholder for window resize handling
                };
                Elements.Counter++;
                elW = 1;
                elN = 0;
                elArrayX++;
              }
            }
          }
          elArrayY++;
        }
      }
      if (d) Elements.draw();
    },
    scale() {
      for(let y = 0 ; y < Elements.Array.length ; y++) {
        for (let x = 0 ; x < Elements.Array[y].length ; x++) {
          let el = Elements.Array[y][x]; // rescale elements
          let oTile = el.z; // scale based upon old tile size
          el.x = (el.x / oTile) * Global.Tile; // rescale
          el.y = (el.y / oTile) * Global.Tile; // rescale
          el.w += Constant.eNum.Elements.PADDING; // clear padding
          el.w = (el.w / oTile) * Global.Tile; // rescale
          el.w -= Constant.eNum.Elements.PADDING; // reset padding
          el.h += Constant.eNum.Elements.PADDING; // clear padding
          el.h = (el.h / oTile) * Global.Tile; // rescale
          el.h -= Constant.eNum.Elements.PADDING; // reset padding
          el.z = Global.Tile; // update scale placeholder
        }
      }
    }
}