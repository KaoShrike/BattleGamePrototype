//Create the KSGames namespace or reference the existing one
var KSGames = KSGames || {};

//The KSGames Sprite Namespace
KSGames.TileMapLib = (function(){
    //Private library constants
    var BASE_TILE_RENDER_SIZE = 64;

    //Public API
    return {
        //Constructor for a single tile
        gameTile: function (tileIndex){
            //Private Members
            this.tileIndex = tileIndex;
        },
        
        gameTileAtlas: function(tileMapTexture){
            this.tileMapTexture = tileMapTexture;
            this.tileTexCoords =[];
        },

        //Constructor for a tile map
        gameTileMap: function (tiles_width, tiles_height){
            //Private Members
            this.tiles_width = tiles_width; //Number of tiles wide
            this.tiles_height = tiles_height; //Number of tiles hight

            this.tiles = []; //Array of tiles
        }

    };
})();
