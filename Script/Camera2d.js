//Create the KSGames namespace or reference the existing one
var KSGames = KSGames || {};

//Create an self-invoking engine class to start
KSGames.Camera = (function(){
    //Private Properties
    var x = 0.0;
    var y = 0.0;

    //Public API
    return {
        getX: function() {
            return x;
        },

        getY: function() {
            return y;
        },

        setCameraPos: function(posX, posY) {
            x=posX;
            y=posY;
        }
    };
})();
