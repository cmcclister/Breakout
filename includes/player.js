const Player = {
	H 	: 0,
	M 	: 0,
	W 	: 0,
	X 	: 0,
	Y 	: 0,
  	draw() { // Set up paddle in default locale
  		this.Y = Global.Bottom - this.H;
  		Draw.rect('round', Global.Layout.player, 'black', this.X, this.Y, this.W, this.H, this.H / 2, true);
  	},
    set() {
    	this.H = Global.Tile;
		this.W = Global.Tile * 6;
		this.X = (Global.Width - this.W) / 2;
		this.Y = Global.Bottom - this.H;
		this.M = this.W * 1.5;
    }
}