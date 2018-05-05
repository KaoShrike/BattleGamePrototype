var express = require('express'),
    path = require('path');

const port = process.env.PORT || 3000;

var app = express();

//Store all HTML files in view folder.
app.use(express.static(path.join(__dirname + '/View')));

//Store all JS and CSS in Scripts folder.
app.use(express.static(path.join(__dirname + '/build')));

app.use(express.static(path.join(__dirname + '/public')));

app.get('/canvas', (req, res) => {
    res.sendFile(path.join(__dirname + '/View/Canvas.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/View/About.html'));
});

/**************Start server on a port + can run a custom function when it's started************ */
var server = app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
