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
        this.Layout = Game.Levels[0];
        this.Left = this.Right = this.Start = false;
        this.Level = this.ScoreCounter = this.Score = 0;
        this.Lives = 3;
        this.SpeedIncrement = 3.5;
        this.ExtraLives = [];
        for (x of Constant.eNum.Score.EXTRA_LIVES) this.ExtraLives.push(x);
	},
	lockUpdate(l = true) { Global.Lock = !l },
	pauseUpdate(p = true) { Global.Pause = !p },
	soundUpdate(s = true) { Global.Sound = !s }
}