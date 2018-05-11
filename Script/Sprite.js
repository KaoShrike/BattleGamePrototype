//Create the KSGames namespace or reference the existing one
var KSGames = KSGames || {};

//The KSGames Sprite Namespace
KSGames.SpriteLib = (function(){
    //Private sprite library constants

    //Public API
    return {
        //Game sprite frame in an atlas
        gameSpriteFrame: function (texX,texY,width,height,atlasImage){
            this.texX = texX;
            this.texY = texY;
            this.width = width;
            this.height = height;
            this.atlasImageRef = atlasImage;
        },

        //Game sprite atlas
        gameSpriteAtlas: function() {
            this.spriteFrames = [];
        },

        //Function for storing game sprites
        gameSprite: function() {
            this.posX = 0.0;
            this.posY = 0.0;
            this.width = 1;
            this.height = 1;
            this.spriteFrameRef = null;
        }
    };
})();
