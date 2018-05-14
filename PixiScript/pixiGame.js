let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
    }

PIXI.utils.sayHello(type);

let app = new PIXI.Application({
    width: 1024, 
    height: 1024,
    antialias: true,
    transparent: false,
    resolution: 1
});

app.renderer.backgroundColor = 0x551111;

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//Aliases
let Resources = PIXI.loader.resources;

//Content Loading
PIXI.loader
    .add(["/ember.json", "/Ember.png"])
    .on("progress",loadProgressHandler)
    .load(contentLoaded);

//Event handler for pixi loading progress notifications
function loadProgressHandler(loader, resource) {
    //Display the file `url` currently being loaded
  console.log("Currently loading: " + resource.url); 

  //Display the percentage of files currently loaded
  console.log("Progress: " + loader.progress + "%"); 
}

//Event handler for when pixi completed resource loading
function contentLoaded() {
    //Example with a single texture and frame etc
    //Save reference to the texture
    let emberTexture = Resources["/Ember.png"].texture;
    let emberFrame = new PIXI.Rectangle(0,0,40,64);
    emberTexture.frame = emberFrame;
    let sprite = new PIXI.Sprite(emberTexture);
    sprite.x=128;
    sprite.y=128;
    sprite.width = 128;
    sprite.height = 128;
    sprite.rotation = 0.5;

    app.stage.addChild(sprite);

    //Example using a json atlas
    let emberAtlas = Resources["/ember.json"].textures;

    let emberAtlasSprite = new PIXI.Sprite(emberAtlas["Ember.png"]);

    app.stage.addChild(emberAtlasSprite);

    tst = new PIXI.Sprite(Resources["/ember.json"].textures["Ember.png"]);
    app.stage.addChild(tst);

    //Set a ticker for the game.  Add a game loop function to pixi's ticker and
    //provide it with a delta argument
    app.ticker.add(delta => gameLoop(delta));
}

var currentState = playState;

//Game Loop
function gameLoop(delta)
{
    currentState(delta);
}

function playState(delta)
{
    tst.x += 1;
}