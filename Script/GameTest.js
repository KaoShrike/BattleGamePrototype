// without jQuery (doesn't work in older IEs)
document.addEventListener('DOMContentLoaded', function(){ 
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}, false);

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