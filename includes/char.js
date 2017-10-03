const Char = {
  DX   : 1,
  DY   : -1,
	R    : 0,
  S    : 1,
	X    : 0,
	Y    : 0,
  draw() { // Set up character in default locale
  	Draw.arc(Constant.Char.COLOR, null, Char.X, Char.Y, Char.R, 0, Math.PI * 2, true, true, true);
  },
  set() {
    Char.R = Constant.eNum.Char.RADIUS * Global.Tile;
    Char.S = Global.SpeedIncrement + (Global.SpeedIncrement * (Global.Level * Constant.eNum.Char.INCREMENT));
    Char.X = Global.Width / 2;
		Char.Y = Player.Y - Char.R * 2;
    Char.DX = Char.S;
    Char.DY = -Char.S;
  }
}