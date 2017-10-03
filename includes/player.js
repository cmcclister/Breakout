const Player = {
	H 	: 0,
	M 	: 0,
	W 	: 0,
	X 	: 0,
	Y 	: 0,
  	draw() { // Set up paddle in default locale
  		Player.Y = Global.Bottom - Player.H;
  		Draw.rect('round', Global.Layout.player, 'black', Player.X, Player.Y, Player.W, Player.H, Player.H / 2, true);
  	},
    set() {
    	Player.H = Global.Tile;
		Player.W = Global.Tile * 6;
		Player.X = (Global.Width - Player.W) / 2;
		Player.Y = Global.Bottom - Player.H;
		Player.M = Player.W * 1.5;
    }
}