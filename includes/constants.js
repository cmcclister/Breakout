const detectUA = () => { // Test for browser and device
    let ua  = navigator.userAgent.toLowerCase();
    let key =        ((ua.indexOf("opr")     > -1) ? "opera"   : null);
        key = key || ((ua.indexOf("edge")    > -1) ? "edge"    : null);
        key = key || ((ua.indexOf("firefox") > -1) ? "firefox" : null);
        key = key || ((ua.indexOf("chrome")  > -1) ? "chrome"  : null);
        key = key || ((ua.indexOf("safari")  > -1) ? "safari"  : null);
        key = key || ((ua.indexOf("msie")    > -1) ? "ie"      : null);

    let re      = (key == "ie") ? "msie (\\d)" : key + "\\/(\\d\\.\\d)";
    let matches = ua.match(new RegExp(re, "i"));
    let version = matches ? parseFloat(matches[1]) : null;

    return {
        full:      ua, 
        isFirefox: (key == "firefox"),
        isChrome:  (key == "chrome"),
        isSafari:  (key == "safari"),
        isOpera:   (key == "opera"),
        isEdge:    (key == "edge"),
        isIE:      (key == "ie"),
        hasCanvas: (document.createElement('canvas').getContext),
        hasAudio:  (typeof(Audio) != 'undefined'),
        hasTouch:  ('ontouchstart' in window)
    }
}

// Get device/browser info
const UA = detectUA();

const Constant = {
    Browser: {
        CHROME      : UA.isChrome,
        EDGE        : UA.isEdge,
        FIREFOX     : UA.isFirefox,
        IE          : UA.isIE,
        OPERA       : UA.isOpera,
        SAFARI      : UA.isSafari
    },
    Canvas: {
        BACKGROUND  : 'white',
        ELEMENT     : 'canvas',
        CONTEXT     : '2d'
    },
    Char: {
        COLOR : 'black'
    },
    Color: {
        RED    : '#FFA5E0',
        GREEN  : '#BFFFA5',
        BLUE   : '#7F9DDE',
        ORANGE : '#FFCBA5',
        PURPLE : '#A5B3FF',
        YELLOW : '#FFF7A5'
    },
    Element: {
        STROKE : 'black'
    },
    eNum: {
        Char: {
            INCREMENT : 0.05,
            RADIUS    : 0.2
        },
        Elements: {
            PADDING : 3
        },
        Player: {
            SPEED : 7
        },
        Score: {
            EXTRA_LIVES : [1000, 5000, 20000, 50000, 100000, 250000]
        },
        TileMap: {
            X : 28,
            Y : 36
        }
    },
    Font: {
        FAMILY : 'Arial',
        STYLE  : 'bold'
    },
    Game: {
        NAME : 'Bouncy Bouncy'
    },
    Test: {
        AUDIO : UA.hasAudio,
        TOUCH : UA.hasTouch
    }
};