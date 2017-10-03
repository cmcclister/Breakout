const Sound = (() => {
	let audio;
	let audioSrc = new Map();
	let audioObj = new Map();

	const pub_init = (browserCatch, sounds, audioEl) => {
        // Audio files
		if (browserCatch) {
			audio = document.getElementById(audioEl);
			for (sound of sounds) {
				audioSrc.set(sound, `audio/${sound}.mp3`);
				// preload all files to mitigate lag/delay during play
				audio.src = audioSrc.get(sound);
				audio.preload = 'auto';
			}
		} else for (sound of sounds) audioObj.set(sound, new Audio(`audio/${sound}.mp3`));
    }

    const pub_play = (type, browserCatch) => {
    	if (Global.Sound) browserCatch ? (audio.src = audioSrc.get(type), audio.play()) : audioObj.get(type).play();
    }

    return {
        init:       pub_init,
        play:       pub_play,
    };
})();