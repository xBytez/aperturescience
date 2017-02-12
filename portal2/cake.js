/*
 * Creative Commons License
 * Portal 2 End Credits Web by TylaKitty, xBytez, MatheusAvellar & Valve is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
 * Based on a work at xbytez.eu
 */

var cake = {
    delayMultiplier: 1000,

    creditsStartTime: 0,
    creditsMaxTime: 144,

    blinkerTime: 0.3 * 1000,

    maxCredits: 13,

    firstLyricsIndex: 0,
    lastCreditsIndex: 0,

    init: function()
    {
        cake.lyricsdiv = document.getElementById("lyricstext");
        cake.creditsdiv = document.getElementById("creditstext");

        cake.initCredits();

        cake.initBlinker();

        cake.player.play();

        cake.processLyricLines();
        cake.processCreditLines();

    },
    checkForIE: function()
    {
        var result = -1;
        if (navigator.appName == "Microsoft Internet Explorer") {
            var userAgent = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(userAgent) != null)
                result = parseFloat(RegExp.$1);
        }
        return result;
    },
    initMusicPlayer: function()
    {
        cake.player = document.createElement("audio");
        if (cake.player.play) {
            cake.player.setAttribute("prebuffer", "auto");
            cake.player.setAttribute("src", "Want You Gone.mp3");
            cake.player.addEventListener("canplaythrough", cake.init);
        } else {
            var ie = cake.checkForIE();
            if (ie > -1 && ie < 9) {
                cake.lyricsdiv = document.getElementById("lyricstext");
                cake.lyricsdiv.innerText = "I'm sorry, this only works on IE9+ or better browsers";
            } else {
                console.error("Oddly enough, the audio cannot be played.");
            }
        }
    },
    setVolume: function(vol)
    {
        vol = ~~vol / 100;
        if (cake.player && cake.player.volume !== void(0) && vol >= 0 && vol <= 1) {
            cake.player.volume = vol;
        }
    },
    initBlinker: function()
    {
        if (!cake.lyricsBlinker)
        {
            cake.lyricsBlinker = document.createElement("span");
            document.getElementById("lyricstext").appendChild(cake.lyricsBlinker);
            cake.blink(cake.lyricsBlinker);
        }
        if (!cake.creditsBlinker)
        {
            cake.creditsBlinker = document.createElement("span");
            cake.creditsBlinker.id = "creditsBlinker";
            document.getElementById("creditstext").appendChild(cake.creditsBlinker);
            cake.blink(cake.creditsBlinker);
        }
    },

    blink: function(blinker)
    {
        nextChar = blinker.innerHTML;
        var newChar = '_';
        if (nextChar == '_')
            newChar = '&nbsp;';
        if (nextChar == '&nbsp;')
            newChar = '_';
        blinker.innerHTML = newChar;

        if (cake.blinkerTime != 300)
        {
            alert(cake.blinkerTime);
            cake.smash();
        }
        setTimeout(function() {
            cake.blink(blinker)
        }, cake.blinkerTime);

    },

    processLetter: function(type, lineindex, letter)
    {
        var line = document.getElementById(type+lineindex);
        if (line)
        {
            if (letter == "newline")
            {
                line.appendChild(document.createElement("br"));
            }
            else
            {
                if (letter == "<")
                    letter = "&lt;";
                if (letter == ">")
                    letter = "&gt;";
                if (letter == " ")
                    letter = "&nbsp;";
                line.innerHTML = line.innerHTML + letter;
            }
        }
    },
    processLyricLine: function(index)
    {
        if (index < cake.firstLyricsIndex)
            return;
        var lastLineDiv;

        for (var lastIndex=index - 1; lastIndex >= 0 && !lastLineDiv && lyrics[lastIndex].clear == 0; lastIndex--)
        {
            lastLineDiv = document.getElementById("lyrics" + lastIndex);
        }

        var newlyrics=document.createElement("span");
        newlyrics.id = "lyrics" + index;
        if (lastLineDiv)
            cake.lyricsdiv.insertBefore(newlyrics, lastLineDiv.nextSibling);
        else
        {
            var nextLineDiv;
            for (var nextIndex = index + 1; nextIndex < index + 50 && !nextLineDiv; nextIndex++)
            {
                nextLineDiv = document.getElementById("lyrics" + nextIndex);
            }
            if (nextLineDiv)
                cake.lyricsdiv.insertBefore(newlyrics, nextLineDiv);
            else
            {
                cake.lyricsdiv.insertBefore(newlyrics, cake.lyricsBlinker);
            }
        }

        var curlyric = lyrics[index];

        var clear = curlyric["clear"];
        if (clear == 1)
        {
            cake.clearLyrics();
            cake.firstLyricsIndex = index;
        }
        else
        {
            var text = curlyric["text"];
            var delay = curlyric["delay"] * cake.delayMultiplier;
            var letterdelay = 0;
            if (text.length > 0)
            {
                letterdelay = delay / (text.length + 1);
            }
            for (var x = 0; x < text.length; x++)
            {
                timeout = setTimeout("cake.processLetter('lyrics'," + index + ",\"" + text.substring(x, x + 1) + "\")", letterdelay * x);
            }
            if (curlyric["nonewline"] == 0)
            {
                timeout = setTimeout("cake.processLetter('lyrics'," + index + ",'newline')", letterdelay * text.length);
            }
        }
    },
    processLyricLines: function()
    {
        var delay = 0;
        for (var index = 0; index < lyrics.length; index++)
        {
            timeout = setTimeout("cake.processLyricLine(" + (index) + ")", delay);
            delay += lyrics[index]["delay"] * cake.delayMultiplier;
        }
    },
    clearLyrics: function()
    {
        cake.lyricsdiv.innerHTML = "";
        cake.lyricsdiv.appendChild(cake.lyricsBlinker);
    },
    initCredits: function()
    {
        for (var index = 0 - cake.maxCredits; index < 0; index++)
        {
            var newcredits = document.createElement("div");
            newcredits.id = "credits" + index;
            newcredits.innerHTML = "&nbsp;";
            cake.creditsdiv.appendChild(newcredits);
        }
    },
    processCreditLine: function(index)
    {
        for (var lastIndex = cake.lastCreditsIndex - cake.maxCredits; lastIndex >= 0 - cake.maxCredits; lastIndex--)
        {
            var pastLineDiv = document.getElementById("credits" + lastIndex);
            if (pastLineDiv)
                cake.creditsdiv.removeChild(pastLineDiv);
            else
                break;
        }

        if (index < cake.lastCreditsIndex - cake.maxCredits)    // too old
            return;

        var lastLineDiv;

        for (var lastIndex = index - 1; lastIndex >= 0 && !lastLineDiv; lastIndex--)
        {
            lastLineDiv = document.getElementById("credits" + lastIndex);
        }
        var newcredits = document.createElement("span");
        newcredits.id = "credits"+index;

        if (lastLineDiv)
            cake.creditsdiv.insertBefore(newcredits, lastLineDiv.nextSibling);
        else
            cake.creditsdiv.insertBefore(newcredits, cake.creditsBlinker);

        if (index > cake.lastCreditsIndex)
            cake.lastCreditsIndex = index;

        var text = credits[index];
        for (var x = 0; x < text.length; x++)
        {
            setTimeout("cake.processLetter('credits'," + index + ",\"" + text.substring(x, x + 1) + "\")", cake.creditsDelay * x);
        }
        if (index < credits.length - 1)
            setTimeout("cake.processLetter('credits'," + index + ",'newline')", cake.creditsDelay * text.length);
    },
    processCreditLines: function()
    {
        var totalchars = 0;
        for (var index = 0; index < credits.length; index++)
        {
            totalchars += credits[index].length + 1;
        }
        cake.creditsDelay = cake.creditsMaxTime * cake.delayMultiplier / totalchars;

        var delay = cake.creditsStartTime * cake.delayMultiplier;
        for (var index = 0; index < credits.length; index++)
        {
            setTimeout("cake.processCreditLine(" + index + ")", delay);
            delay += credits[index].length * cake.creditsDelay;
        }
    }
}

if (window.addEventListener){
    window.addEventListener("load", cake.initMusicPlayer, false);
} else if (window.attachEvent){
    window.attachEvent("onload", cake.initMusicPlayer);
} else {
    console.error("Oh, dear god, what browser is this?\nFailed to set up event listener.");
}