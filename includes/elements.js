const Elements = {
  Array   : [],
  Counter : 0,
  	draw() { // Set up elements in default locale
      for(let y = 0 ; y < this.Array.length ; y++) {
        for (let x = 0 ; x < this.Array[y].length ; x++) {
          let el = this.Array[y][x];
          if (el.s === 1) {
            Draw.rect('stroke', null, Constant.Element.STROKE, el.x, el.y, el.w, el.h);
            Draw.rect('fill', el.c, null, el.x+Constant.eNum.Elements.PADDING-2, el.y+Constant.eNum.Elements.PADDING-2, el.w-Constant.eNum.Elements.PADDING+1, el.h-Constant.eNum.Elements.PADDING+1);
          }
        }
      }
  	},
    init(d = true) {
      this.Array = [];
      // Layout elements based on levels.js Breakout object
      let elY = Global.Layout.elements.length;
      this.Counter = 0;
      let elArrayY = 0;
      for (let y = 0 ; y < elY ; y++) {
        let line  = Global.Layout.elements[y] + " "; // extra space simplifies loop
        if (line !== ' ') {
          let elArrayX = elN = 0;
          this.Array[elArrayY] = [];
          let elX = line.length;
          let elW = 1;
          for (let x = 0 ; x < elX ; x++) {
            let c = line[x];
            if (c !== ' ') {
              if (x+1 < elX) elN = x+1;
              if (elN > 0 && c == line[elN]) elW++;
              else {
                let elColor = Global.Layout.colors[c.toLowerCase()];
                this.Array[elArrayY][elArrayX] = { 
                  x: Global.Tile * (x-elW+1), 
                  y: Global.Tile * (Constant.eNum.Elements.PADDING + y), 
                  w: (Global.Tile * elW) - Constant.eNum.Elements.PADDING, 
                  h: Global.Tile - Constant.eNum.Elements.PADDING, 
                  c: elColor, 
                  s: 1,
                  z: Global.Tile // a placeholder for window resize handling
                };
                this.Counter++;
                elW = 1;
                elN = 0;
                elArrayX++;
              }
            }
          }
          elArrayY++;
        }
      }
      if (d) this.draw(); // Draw bricks
    },
    scale() {
      for(let y = 0 ; y < this.Array.length ; y++) {
        for (let x = 0 ; x < this.Array[y].length ; x++) {
          let el = this.Array[y][x]; // rescale bricks
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