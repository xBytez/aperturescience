/* Creative Commons License Portal End Credits Web by xBytez/TylaKitty/Valve is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. Based on a work at https://xbytez.eu/. */
var asciiart = {
    "11": ["                     -$-                ", "                    .H##H,              ", "                   +######+             ", "                .+#########H.           ", "              -$############@.          ", "            =H###############@  -X:     ", "          .$##################:  @#@-   ", "     ,;  .M###################;  H###;  ", "   ;@#:  @###################@  ,#####: ", " -M###.  M#################@.  ;######H ", " M####-  +###############$   =@#######X ", " H####$   -M###########+   :#########M, ", "  /####X-   =########%   :M########@/.  ", "    ,;%H@X;   .$###X   :##MM@%+;:-      ", "                 ..                     ", "  -/;:-,.              ,,-==+M########H ", " -##################@HX%+%$%%+:,,    ", "    .-/H%%+%$H@###############M@+=:/+:", "/XHX%:#####MH%=    ,---:;;;;/%XHM,:###$", "$@#MX %+;-                           .  "],
    "10": ["+@##########M/             :@#########@/", "##############$;H#######@;+#############", "###############M########################", "##############X,-/++/+%+/,%#############", "############M$:           -X############", "##########H;.      ,--.     =X##########", ":X######M;     -$H@M##MH%:    :H#######@", "  =%#M+=,   ,+@#######M###H:    -=/M#% ", "  %M##@+   .X##$, ./+- ./###;    +M##% ", "  %####M.  /###=         @##M.   X###% ", "  %####M.  ;M##H:.     =$###X.   $###% ", "  %####@.   /####M$-./@#####:    %###% ", "  %H#M/,     /H###########@:     ./M#% ", " ;$H##@@H:    .;$HM#MMMH$;,   ./H@M##M$=", "X#########%.      ..,,.     .;@#########", "###########H+:.           ./@###########", "##############/ ./%%+/.-M#############", "##############H$@#######@@##############", "##############X%########M$M#############", "+M##########H:            .$##########X="],
    "13": ["         ,=;%$%$X%%;/%%;=,         ", "     ,/$$+:-                -:+$$/,     ", "   :X$=                          =$X:   ", " ;M%.                              .%M; ", "+#/                                  /#+", "##                                    M#", "H#,                     =;+/;,       ,#X", ".HM-       :@X+%H:   .%M%- .M#.     -M@.", "  /#%.     @#-  ,H@--MH, .;@$-    .%#+  ", "   .$M;    .+@X;, MM#@:/$X;.     ;M$,   ", "     =@H,     ,:+%H#M%;-       ,H@=     ", "      .$#;        -#H         =#$       ", "        %#;        #M        ;#%        ", "         H#-       ##       -#H         ", "         ;#+       ##       +#;         ", "          ;H+;;;;;;HH;;;;;;+H/          ", "           =H#@HHHHHHHHHH@#H=           ", "           =@#H%%%%$HH@#@=           ", "           =@#X%%%%$M###@=           ", "               =+%XHHX%+=               "],
    "12": ["       #+ @      # #              M#@   ", " .    .X  X.%##@;# #   +@#######X. @#%  ", "   ,==.   ,######M+  -#####%M####M-    #", "  :H##M%:=##+ .M##M,;#####/+#######% ,M#", " .M########=  =@#@.=#####M=M#######=  X#", " :@@MMM##M.  -##M.,#######M#######. =  M", "             @##..###:.    .H####. @@ X,", "   ############: ###,/####;  /##= @#. M ", "           ,M## ;##,@#M;/M#M  @# X#% X# ", ".%=   ######M## ##.M#:   ./#M ,M #M ,#$ ", "##/         $## #+;#: #### ;#/ M M- @# :", "#+ #M@MM###M-;M #:$#-##$H# .#X @ + $#. #", "      ######/.: #%=# M#:MM./#.-#  @#: H#", "+,.=   @###: /@ %#,@  ##@X #,-#@.##% .@#", "#####+;/##/ @##  @#,+       /#M    . X, ", "   ;###M#@ M###H .#M-     ,##M  ;@@; ###", "   .M#M##H ;####X ,@#######M/ -M###$  -H", "    .M###%  X####H  .@@MM@;  ;@#M@      ", "      H#M    /@####/      ,++.  / ==-,  ", "               ,=/:, .+X@MMH@#H  #####$="],
    "15": ["      .-+$H###MM@MMMMM##@$+-,. ....", "-@$+%$+%HX+--..  .  . .,:X$/+/++$#:", "-#MXH$=                      $HXH#:", " .--,:#+   ,+$HMX =@@X%, . .X#:,,, ", "     =#@$H :####H =####;,M%$#X     ", "     X###$ $####X =####H %###X     ", "    ;###X /###@$: ,+HM##H.+###;    ", "   :###;,X##%=;%H@H$;-;M#@-;###/   ", "  ,M##;.@##;-H#######M=.M##-:###-  ", "  ;##M ;##X @###H-=@###.;##X H##;  ", "  ;##M./##X.@###H:/M###-=##X X##;  ", "  -###;,M##:,@########+-H##; @##-  ", "   %##M==@##%==%HMH%::/M##+.X##+   ", "    %###/./###X+: -+$M##M=,X##+    ", "     X###X X####H +#####% @##H     ", "     :###H %####H +#####; X##;     ", "     /#$.  -HM##H /###@+.  +#$. .  ", "/HX%$X:      .,-, .-,.      =XX$H@-", "/#H+/+%+/+;=.          .=/%;;/;;+#+", " ..  .,-:XM#MM@@@@@@H@@M#@+=,.   ,,"],
    "14": ["      X MM X       ", "      X MM X       ", "      X MM X       ", "      X MM X       ", "      + HX +       ", "    ,=$$XX%/-      ", "  =X#########@%-   ", " ;##############=  ", "-###############M, ", ";##@@@######M@###= ", ".+:;+:=H##$=:/:;H. ", "- +###- ## :###,,; ", "+@:/%;-H##H==/::H; ", " /#@/-=+$$%::+H#$  ", " $#%-,      ,.:##- ", "-@/            =X%.", "%H=             -$;", " =HH,         .%M; ", "  /MM/       :@M/. ", "   .:XX,   -$H:.   "],
    "1": ["              .,-:;//;:=,               ", "          . :H@@@MM@M#H/.,+%;,          ", "       ,/X+ +M@@M@MM%=,-%HMMM@X/,       ", "     -+@MM; $M@@MH+-,;XMMMM@MMMM@+-     ", "    ;@M@@M- XM@X;. -+XXXXXHHH@M@M#@/.   ", "  ,%MM@@MH ,@%=            .---=-=:=,.  ", "  =@#@@@MX .,              -%HX$$%%+;  ", " =-./@M@M$                  .;@MMMM@MM: ", " X@/ -$MM/                    .+MM@@@M$ ", ",@M@H: :@:                    . =X#@@@@-", ",@@@MMX, .                    /H- ;@M@M=", ".H@@@@M@+,                    %MM+..%#$.", " /MMMM@MMH/.                  XM@MH; =; ", "  /%+%$XHH@$=              , .H@@@@MX,  ", "   .=--------.           -%H.,@@@@@MX,  ", "   .%MM@@@HHHXX$$$%+- .:$MMX =M@@MM%.   ", "     =XMMM@MM@MM#H;,-+HMM@M+ /MMMX=     ", "       =%@M@M#@$-.=$@MM@@@M; %M%=       ", "         ,:+$+-,/H#MMMMMMM@= =,         ", "               =++%%+/:-.             "],
    "3": ["            .+                          ", "             /M;                        ", "              H#@:              ;,      ", "              -###H-          -@/       ", "               %####$.  -;  .%#X        ", "                M#####+;#H :M#M.        ", "..          .+/;%#########X###-         ", " -/%H%+;-,    +##############/          ", "    .:$M###MH$%+############X  ,--=;-   ", "        -/H#####################H+=.    ", "           .+#################X.        ", "         =%M####################H;.     ", "            /@###############+;;/%;,   ", "         -%###################$.        ", "       ;H######################M=       ", "    ,%#####MH$%;+#####M###-/@####%      ", "  :$H%+;=-      -####X.,H#   -+M##@-    ", " .              ,###;    ;      =$##+   ", "                .#H,               :XH, ", "                 +                   .;-"],
    "2": ["            ,:/+/-                      ", "            /M/              .,-=;//;-  ", "       .:/= ;MH/,    ,=/+%$XH@MM#@:     ", "      -$##@+$###@H@MMM#######H:.    -/H#", " .,H@H@ X######@ -H#####@+-     -+H###@X", "  .,@##H;      +XM##M/,     =%@###@X;-  ", "X%-  :M##########$.    .:%M###@%:       ", "M##H,   +H@@@$/-.  ,;$M###@%,          -", "M####M=,,---,.-%H####M$:          ,+@##", "@##################@/.         :%H##@$- ", "M###############H,         ;HM##M$=     ", "#################.    .=$M##M$=         ", "################H..;XM##M$=          .:+", "M###################@%=           =+@MH%", "@################M/.          =+H#X%=   ", "=+M##############M,       -/X#X+;.      ", "  .;XM##########H=    ,/X#H+:,          ", "     .=+HM######M+/+HM@+=.              ", "         ,:/%XM####H/.                  ", "              ,.:=-.                    "],
    "5": ["                 =/;;/-                 ", "                +:    //                ", "               /;      /;               ", "              -X        H.              ", ".//;;;:;;-,   X=        :+   .-;:=;:;%;.", "M-       ,=;;;#:,      ,:#;;:=,       ,@", ":%           :%.=/++++/=.$=           %=", " ,%;         %/:+/;,,/++:+/         ;+. ", "   ,+/.    ,;@+,        ,%H;,    ,/+,   ", "      ;+;;/= @.  .H##X   -X :///+;      ", "      ;+=;;;.@,  .XM@$.  =X.//;=%/.     ", "   ,;:      :@%=        =$H:     .+%-   ", " ,%=         %;-///==///-//         =%, ", ";+           :%-;;;:;;;;-X-           +:", "@-      .-;;;;M-        =M/;;;-.      -X", " :;;::;;-.    %-        :+    ,-;;-;:== ", "              ,X        H.              ", "               ;/      %=               ", "                //    +;                ", "                 ,////,                 "],
    "4": ["                   ;=         ", "                   /=         ", "                   ;=         ", "                   /=         ", "                   ;=         ", "                   /=         ", "                   ;=         ", "                   /=         ", "            ,--==-:$;         ", "        ,/$@#######@X+-       ", "     ./@###############X=     ", "    /M#####X+/;;;;+H#####$.   ", "   %####M/;+H@XX@@%;;@####@,  ", "  +####H=+##$,--,=M#X-%####@. ", " -####X,X@HHXH##MXHXXH-+####$ ", " X###@.X/$M$:####$=@X/X,X####-", ".####:+$:##@:####$:##H/X=####%", "-%$%,+==%$+-$+:$;-$$%-+,/$%+", "-/+%X$XX$$$$$$$%$$$%$X$X$%+/-", "                              "],
    "7": ["           .-;+$XHHHHHHX$+;-.           ", "        ,;X@@X%/;=----=:/%X@@X/,        ", "      =$@@%=.              .=+H@X:      ", "    -XMX:                      =XMX=    ", "   /@@:                          =H@+   ", "  %@X,                            .$@$  ", " +@X.                               $@% ", "-@@,                                .@@=", "%@%                                  +@$", "H@:                                  :@H", "H@:         :HHHHHHHHHHHHHHHHHHX,    =@H", "%@%         ;@M@@@@@@@@@@@@@@@@@H-   +@$", "=@@,        :@@@@@@@@@@@@@@@@@@@@@= .@@:", " +@X        :@@@@@@@@@@@@@@@M@@@@@@:%@% ", "  $@$,      ;@@@@@@@@@@@@@@@@@M@@@@@@$. ", "   +@@HHHHHHH@@@@@@@@@@@@@@@@@@@@@@@+   ", "    =X@@@@@@@@@@@@@@@@@@@@@@@@@@@@X=    ", "      :$@@@@@@@@@@@@@@@@@@@M@@@@$:      ", "        ,;$@@@@@@@@@@@@@@@@@@X/-        ", "           .-;+$XXHHHHHX$+;-.           "],
    "6": ["             =+$HM####@H%;,             ", "          /H###############M$,          ", "          ,@################+           ", "           .H##############+            ", "             X############/             ", "              $##########/              ", "               %########/               ", "                /X/;;+X/                ", "                                        ", "                 -XHHX-                 ", "                ,######,                ", "#############X  .M####M.  X#############", "##############-   -//-   -##############", "X##############%,      ,+##############X", "-##############X        X##############-", " %############%          %############% ", "  %##########;            ;##########%  ", "   ;#######M=              =M#######;   ", "    .+M###@,                ,@###M+.    ", "       :XH.                  .HX:       "],
    "9": ["                                     :X-", "                                  :X### ", "                                ;@####@ ", "                              ;M######X ", "                            -@########$ ", "                          .$##########@ ", "                         =M############-", "                        +##############$", "                      .H############$=. ", "         ,/:         ,M##########M;.    ", "      -+@###;       =##########M;       ", "   =%M#######;     :#########M/         ", "-$M###########;   :#########/           ", " ,;X###########; =########$.            ", "     ;H#########+#######M=              ", "       ,+##############+                ", "          /M#########@-                 ", "            ;M######%                   ", "              +####:                    ", "               ,$M-                     "],
    "8": ["                          .,---.        ", "                        ,/XM#MMMX;,     ", "                      -%##########M%,   ", "                     -@######%  $###@=  ", "      .,--,         -H#######$   $###M: ", "   ,;$M###MMX;     .;##########$;HM###X=", " ,/@##########H=      ;################+", "-+#############M/,      %##############+", "%M###############=      /##############:", "H################      .M#############;.", "@###############M      ,@###########M:. ", "X################,      -$=X#######@:   ", "/@##################%-     +######$-    ", ".;##################X     .X#####+,     ", " .;H################/     -X####+.      ", "   ,;X##############,       .MM/        ", "      ,:+$H@M#######M#$-    .$$=        ", "           .,-=;+$@###X:    ;/=.        ", "                  .,/X$;   .::,         ", "                      .,    ..          "]
};
var credits = [">LIST PERSONNEL", " ", " ", "Gautam Babbar", "Ted Backman", "Kelly Bailey", "Jeff Ballinger", "Aaron Barber", "Jeep Barnett", "Jeremy Bennett", "Dan Berger", "Yahn Bernier", "Ken Birdwell", "Derrick Birum", "Mike Blaszczak", "Iestyn Bleasdale-Shepherd", "Chris Bokitch", "Steve Bond", "Matt Boone", "Antoine Bourdon", "Jamaal Bradley", "Jason Brashill", "Charlie Brown", "Charlie Burgin", "Andrew Burke", "Augusta Butlin", "Julie Caldwell", "Dario Casali", "Chris Chin", "Jess Cliffe", "Phil Co", "John Cook", "Christen Coomer", "Greg Coomer", "Scott Dalton", "Kerry Davis", "Jason Deakins", "Joe Demers", "Ariel Diaz", "Quintin Doroquez", "Jim Dose", "Chris Douglass", "Laura Dubuk", "Mike Dunkle", "Mike Durand", "Mike Dussault", "Dhabih Eng", "Katie Engel", "Chet Faliszek", "Adrian Finol", "Bill Fletcher", "Moby Francke", "Stephane Gaudette", "Kathy Gehrig", "Vitaliy Genkin", "Paul Graham", "Chris Green", "Chris Grinstead", "John Guthrie", "Aaron Halifax", "Reagan Halifax", "Leslie Hall", "Jeff Hameluck", "Joe Han", "Don Holden", "Jason Holtman", "Gray Horsfield", "Keith Huggins", "Jim Hughes", "Jon Huisingh", "Brian Jacobson", "Lars Jensvold", "Erik Johnson", "Jakob Jungels", "Rich Kaethler", "Steve Kalning", "Aaron Kearly", "Iikka Keranen", "David Kircher", "Eric Kirchmer", "Scott Klintworth", "Alden Kroll", "Marc Laidlaw", "Jeff Lane", "Tim Larkin", "Dan LeFree", "Isabelle LeMay", "Tom Leonard", "Jeff Lind", "Doug Lombardi", "Bianca Loomis", "Richard Lord", "Realm Lovejoy", "Randy Lundeen", "Scott Lynch", "Ido Magal", "Nick Maggiore", "John McCaskey", "Patrick McClard", "Steve McClure", "Hamish McKenzie", "Gary McTaggart", "Jason Mitchell", "Mike Morasky", "John Morello II", "Bryn Moslow", "Arsenio Navarro", "Gabe Newell", "Milton Ngan", "Jake Nicholson", "Martin Otten", "Nick Papineau", "Karen Prell", "Bay Raitt", "Tristan Reidford", "Alfred Reynolds", "Matt Rhoten", "Garret Rickey", "Dave Riller", "Elan Ruskin", "Matthew Russell", "Jason Ruymen", "David Sawyer", "Marc Scaparro", "Wade Schin", "Matthew Scott", "Aaron Seeler", "Jennifer Seeley", "Taylor Sherman", "Eric Smith", "Jeff Sorensen", "David Speyrer", "Jay Stelly", "Jeremy Stone", "Eric Strand", "Kim Swift", "Kelly Thornton", "Eric Twelker", "Carl Uhlman", "Doug Valente", "Bill Van Buren", "Gabe Van Engel", "Alex Vlachos", "Robin Walker", "Joshua Weier", "Andrea Wicklund", "Greg Winkler", "Erik Wolpaw", "Doug Wood", "Matt T. Wood", "Danika Wright", "Matt Wright", "Shawn Zabecki", "Torsten Zabka ", " ", " ", " ", " ", "'Still Alive' by:", "Jonathan Coulton", " ", " ", " ", "Voices:", "Ellen McLain - GlaDOS, Turrets", "Mike Patton - THE ANGER SPHERE", " ", " ", " ", "Voice Casting:", "Shana Landsburg\Teri Fiddleman", " ", " ", " ", " ", "Voice Recording:", "Pure Audio, Seattle, WA", " ", " ", " ", " ", "Voice recording", "scheduling and logistics:", "Pat Cockburn, Pure Audio", " ", " ", " ", " ", "Translations:", "SDL", " ", " ", " ", " ", "Crack Legal Team:", "Liam Lavery", "Karl Quackenbush", "Kristen Boraas", "Kevin Rosenfield", "Alan Bruggeman", "Dennis Tessier", " ", " ", " ", "Thanks for the use of their face:", "Alesia Glidewell - Chell", " ", " ", " ", "Special thanks to everyone at:", "Alienware", "ATI", "Dell", "Falcon Northwest", "Havok", "SOFTIMAGE", "and Don Kemmis, SLK Technologies", " ", " ", " ", " ", " ", " ", " ", " ", " ", "THANK YOU FOR PARTICIPATING", "IN THIS", "ENRICHMENT CENTER ACTIVITY!!", " ", " ", " ", " ", " ", ""];
var lyrics = [{
    delay: "2.00",
    text: "Forms FORM-29827281-12:",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.00",
    text: "Test Assessment Report",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.01",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.01",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.85",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.05",
    text: "This was a triumph.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.9",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.1",
    text: "I'm making a note here:",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.1",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.8",
    text: "HUGE SUCCESS.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.00",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.36",
    text: "It's hard to overstate",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.04",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.71",
    text: "my satisfaction.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.13",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.76",
    text: "Aperture Science",
    nonewline: 0,
    clear: 0,
    changepicture: 1
}, {
    delay: "2.10",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.57",
    text: "We do what we must",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.20",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.75",
    text: "because",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.1",
    text: " ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.71",
    text: "we can.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.67",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.55",
    text: "For the good",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.53",
    text: " of all of us.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.279",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.741",
    text: "Except the ones who are dead.",
    nonewline: 0,
    clear: 0,
    changepicture: 6
}, {
    delay: "0.400",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.858",
    text: "But there's no sense crying",
    nonewline: 0,
    clear: 0,
    changepicture: 1
}, {
    delay: "0.01",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.782",
    text: "over every mistake.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.200",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.985",
    text: "You just keep on trying",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.01",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.366",
    text: "till you run out of",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.400",
    text: " cake.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.186",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.97",
    text: "And the Science gets done.",
    nonewline: 0,
    clear: 0,
    changepicture: 5
}, {
    delay: "1.97",
    text: "And you make a neat gun.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.02",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.52",
    text: "For the people who are",
    nonewline: 0,
    clear: 0,
    changepicture: 1
}, {
    delay: "0.02",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.50",
    text: "still alive.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.5",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.1",
    text: "",
    nonewline: 0,
    clear: 1,
    changepicture: -1
}, {
    delay: "0.55",
    text: "Forms FORM-55551-5:",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.10",
    text: "Personnel File Addendum:",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.66",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.35",
    text: "Dear <<Subject Name Here>>,",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.06",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.917",
    text: "I'm not even angry.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.368",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.697",
    text: "I'm being ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.65",
    text: "so",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.906",
    text: " sincere ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.115",
    text: "right now.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.625",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.65",
    text: "Even ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.347",
    text: "though you ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.488",
    text: "broke ",
    nonewline: 1,
    clear: 0,
    changepicture: 8
}, {
    delay: "0.998",
    text: "my heart.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.325",
    text: "And ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.488",
    text: "killed ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.557",
    text: "me.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.00",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.649",
    text: "And tore me to pieces.",
    nonewline: 0,
    clear: 0,
    changepicture: 3
}, {
    delay: "2.322",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.440",
    text: "And threw every piece",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.302",
    text: " ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.580",
    text: "into",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.395",
    text: " ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.882",
    text: "a fire.",
    nonewline: 0,
    clear: 0,
    changepicture: 11
}, {
    delay: "1.649",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.400",
    text: "As they burned ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.509",
    text: "it hurt because",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.325",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.625",
    text: "I was so happy for you!",
    nonewline: 0,
    clear: 0,
    changepicture: 9
}, {
    delay: "0.441",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.067",
    text: "Now these points of data",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.950",
    text: "make a beautiful line.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.020",
    text: "And we're out of beta.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.950",
    text: "We're releasing on time.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.113",
    text: "So I'm GLaD. I got burned.",
    nonewline: 0,
    clear: 0,
    changepicture: 3
}, {
    delay: "2.020",
    text: "Think of all the things we learned",
    nonewline: 0,
    clear: 0,
    changepicture: 5
}, {
    delay: "1.556",
    text: "for the people who are",
    nonewline: 0,
    clear: 0,
    changepicture: 1
}, {
    delay: "0.395",
    text: "still",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.440",
    text: " alive.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.5",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.1",
    text: "",
    nonewline: 0,
    clear: 1,
    changepicture: -1
}, {
    delay: "0.45",
    text: "Forms FORM-55551-6:",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.31",
    text: "Personnel File Addendum Addendum:",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.66",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.20",
    text: "One last thing:",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.05",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.324",
    text: "Go ahead and leave ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.627",
    text: "me.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.788",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.534",
    text: "I think ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.184",
    text: "I prefer ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.022",
    text: "to stay ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.232",
    text: "in",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.882",
    text: "side.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.43",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.511",
    text: "May",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.972",
    text: "be you'll find someone else",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.254",
    text: "to help you.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.252",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.511",
    text: "Maybe ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.325",
    text: "Black ",
    nonewline: 1,
    clear: 0,
    changepicture: 7
}, {
    delay: "0.998",
    text: "Mesa",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.183",
    text: "... ",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.440",
    text: "THAT WAS A JOKE.",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.021",
    text: " ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.279",
    text: "FAT ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.859",
    text: "CHANCE.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.393",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.486",
    text: "Anyway",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.765",
    text: ", this cake is great.",
    nonewline: 0,
    clear: 0,
    changepicture: 2
}, {
    delay: "1.904",
    text: "It's so delicious and moist.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.418",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.927",
    text: "Look at me still talking",
    nonewline: 0,
    clear: 0,
    changepicture: 12
}, {
    delay: "2.090",
    text: "when there's Science to do.",
    nonewline: 0,
    clear: 0,
    changepicture: 6
}, {
    delay: "1.695",
    text: "When I look out there,",
    nonewline: 0,
    clear: 0,
    changepicture: 1
}, {
    delay: "2.183",
    text: "it makes me GLaD I'm not you.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.043",
    text: "I've experiments to run.",
    nonewline: 0,
    clear: 0,
    changepicture: 5
}, {
    delay: "2.020",
    text: "There is research to be done.",
    nonewline: 0,
    clear: 0,
    changepicture: 3
}, {
    delay: "1.625",
    text: "On the people who are",
    nonewline: 0,
    clear: 0,
    changepicture: 1
}, {
    delay: "0.348",
    text: "still ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.440",
    text: "alive.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.2",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.01",
    text: "",
    nonewline: 0,
    clear: 1,
    changepicture: -1
}, {
    delay: "0.10",
    text: "",
    nonewline: 0,
    clear: 1,
    changepicture: -1
}, {
    delay: "0.01",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.01",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.01",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.3",
    text: "PS: ",
    nonewline: 1,
    clear: 0,
    changepicture: 0
}, {
    delay: "1.625",
    text: "And believe me I am",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.138",
    text: "still alive.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.8",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.198",
    text: "PPS: ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.904",
    text: "I'm doing Science and I'm",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.091",
    text: "still alive.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.8",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.175",
    text: "PPPS: ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.904",
    text: "I feel FANTASTIC and I'm",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.091",
    text: "still alive.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.1",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.154",
    text: "FINAL THOUGHT: ",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.579",
    text: "While you're dying I'll be",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.254",
    text: "still alive.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.1",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.829",
    text: "FINAL THOUGHT PS: ",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.834",
    text: "And when you're dead I will be",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.161",
    text: "still alive.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.459",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.400",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.184",
    text: "STILL ALIVE",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.2",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.1",
    text: "",
    nonewline: 0,
    clear: 1,
    changepicture: -1
}, {
    delay: "45.279",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.279",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}];
