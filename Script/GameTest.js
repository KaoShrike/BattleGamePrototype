// without jQuery (doesn't work in older IEs)
//document.addEventListener('DOMContentLoaded', function(){ 
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");

    image = new Image();
    image.src = 'BlueSky.png';
    image.onload = function(e) {
        ctx.drawImage(image,0,0);
    };

//}, false);

//jQuery Implementation
// $(document).ready(function() {
//     var canvas = document.getElementById("gameCanvas");
//     var ctx = canvas.getContext("2d");

//     ctx.beginPath();
//     ctx.rect(20, 40, 50, 50);
//     ctx.fillStyle = "#FF0000";
//     ctx.fill();
//     ctx.closePath();
// });

