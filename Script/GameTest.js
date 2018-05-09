//Requires GameEngine.js

//Sample test

spriteImg = new Image();
spriteImg.src = 'BlueSky.png';

spriteImg.onload = function(e) {

    var testSpriteFrame = new KSGames.SpriteLib.gameSpriteFrame(0,0,20,20,spriteImg);
    var testSprite = new KSGames.SpriteLib.gameSprite();
    testSprite.posX = 0;
    testSprite.posY = 0;
    testSprite.width = 64;
    testSprite.height = 64;
    testSprite.spriteFrameRef = testSpriteFrame;

    KSGames.Engine.drawSpriteTest(testSprite);
};

//json load
//https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript