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
	SpeedBaseline   : 3.5,
	SpeedIncrement 	: 3.5,
	Sound  		 	: Constant.Test.AUDIO,
	Tile		 	: 0,
	Top			 	: 0,
	Width 		 	: 0,
  	init() {
		if (!Constant.Test.TOUCH) document.getElementById('touchControl').style.display = 'none'; // Only show buttons for touch devices
        Global.Layout = Game.Levels[0];
        Global.Left = Global.Right = Global.Start = false;
        Global.Level = Global.ScoreCounter = Global.Score = 0;
        Global.Lives = 3;
        Global.SpeedIncrement = 3.5;
        Global.ExtraLives = [];
        for (x of Constant.eNum.Score.EXTRA_LIVES) Global.ExtraLives.push(x);
	},
	lockUpdate(l = true) { Global.Lock = !l },
	pauseUpdate(p = true) { Global.Pause = !p },
	soundUpdate(s = true) { Global.Sound = !s }
}