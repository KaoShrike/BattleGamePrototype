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
    .add("/Ember.png")
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
    //Save reference to the texture
    let emberTexture = Resources["/Ember.png"].texture;

    //Set a frame within the texture
    let emberFrame = new PIXI.Rectangle(0,0,40,64);
    emberTexture.frame = emberFrame;

    let sprite = new PIXI.Sprite(emberTexture);
    sprite.x=128;
    sprite.y=128;
    //sprite.width = 128;
    //sprite.height = 128;
    sprite.rotation = 0.5;

    app.stage.addChild(sprite);
}