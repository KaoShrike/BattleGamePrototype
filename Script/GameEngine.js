var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

function setBackgroundImg()
{
image = new Image();
image.src = 'BlueSky.png';
image.onload = function(e) {
    ctx.drawImage(image,0,0);
    };
};
