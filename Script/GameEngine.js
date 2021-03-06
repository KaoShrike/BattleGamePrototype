//Create the KSGames namespace or reference the existing one
var KSGames = KSGames || {};

//Create an self-invoking engine class to start
KSGames.Engine = (function(){
    //Private Properties
    var ctx = document.getElementById("gameCanvas").getContext("2d");

    //Public API
    return {
        setBackgroundImg: function() {
            image = new Image();
            image.src = 'BlueSky.png';
            image.onload = function(e) {
                ctx.drawImage(image,0,0);
                };
        },

        drawSpriteTest: function(spriteFrame)
        {
            ctx.drawImage(spriteFrame.spriteFrameRef.atlasImageRef,spriteFrame.spriteFrameRef.texX,spriteFrame.spriteFrameRef.texY, 
                spriteFrame.spriteFrameRef.width, spriteFrame.spriteFrameRef.height,
                spriteFrame.posX,spriteFrame.posY, spriteFrame.width, spriteFrame.height);
        }
    };
})();

