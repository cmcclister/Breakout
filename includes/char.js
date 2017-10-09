const Char = {
  DX   : 1,
  DY   : -1,
	R    : 0,
  S    : 1,
	X    : 0,
	Y    : 0,
  draw() { // Set up character in default locale
  	Draw.arc(Constant.Char.COLOR, null, this.X, this.Y, this.R, 0, Math.PI * 2, true, true, true);
  },
  set() {
    this.R = Constant.eNum.Char.RADIUS * Global.Tile;
    this.S = Global.SpeedIncrement + (Global.SpeedIncrement * (Global.Level * Constant.eNum.Char.INCREMENT));
    this.X = Global.Width / 2;
		this.Y = Player.Y - this.R * 2;
    this.DX = this.S;
    this.DY = -this.S;
  }
}