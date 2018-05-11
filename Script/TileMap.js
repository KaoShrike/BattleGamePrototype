//Create the KSGames namespace or reference the existing one
var KSGames = KSGames || {};

//The KSGames Sprite Namespace
KSGames.TileMapLib = (function(){
    //Private library constants
    var BASE_TILE_RENDER_SIZE = 64;

    //Public API
    return {
        //Constructor for a tile map
        tileMap: function (tiles_width, tiles_height){
            //Private Members
            this.tiles_width = tiles_width;
            this.tiles_height = tiles_height;

            this.tiles = [];
        }

    };
})();
