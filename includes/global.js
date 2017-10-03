const Global = {
	Bottom			: 0,
	ExtraLives  	: [],
	Height  	 	: 0,
	Layout  	 	: Game.Levels[0],
	Left  			: false,
	Level  		 	: 0,
	Lives  		 	: 3,
	Lock			: false,
	Pause 			: true,
	Right 			: false,
	Start 			: false,
	Score  		 	: 0,
	ScoreCounter 	: 1,
	SpeedIncrement 	: 1,
	Sound  		 	: Constant.Test.AUDIO,
	Tile		 	: 0,
	Top			 	: 0,
	Width 		 	: 0,
  	init() {
		if (!Constant.Test.TOUCH) document.getElementById('touchControl').style.display = 'none'; // Only show buttons for touch devices
        Global.Layout = Game.Levels[0];
        Global.Left = Global.Right = Global.Start = false;
        Global.Level = Global.ScoreCounter = 0;
        Global.Lives = 3;
        Global.Score = 0;
        Global.ExtraLives = Constant.eNum.Score.EXTRA_LIVES;
		//Global.set();
	},
	/*set() {
		Global.Bottom = Global.Tile * (Constant.eNum.TileMap.Y * 0.944);
		Constant.eNum.TileMap.Y > Constant.eNum.TileMap.X ? (
			Global.Height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
	  		Global.Width = Global.Height * (Constant.eNum.TileMap.X / Constant.eNum.TileMap.Y),
	  		Global.Tile = Math.round(Global.Height / Constant.eNum.TileMap.Y)
		) : (
	  		Global.Width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
	  		Global.Height = Global.Width * (Constant.eNum.TileMap.Y / Constant.eNum.TileMap.X),
	  		Global.Tile = Math.round(Global.Width / Constant.eNum.TileMap.X)
		);
		Global.Top = Global.Tile * (Constant.eNum.TileMap.Y * 0.056);
	}*/
}