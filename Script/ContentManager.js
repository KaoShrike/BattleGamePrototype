//Create the KSGames namespace or reference the existing one
var KSGames = KSGames || {};

//https://www.html5rocks.com/en/tutorials/games/assetmanager/

//The KSGames Content Manager and Loader
KSGames.ContentManager = (function(){
    //Private Members
    this.downloadQueue = [];

    //Public API
    return {
        downloadAll: function(downloadCallback) {
            console.log("Downloading");
        }
    };
})();