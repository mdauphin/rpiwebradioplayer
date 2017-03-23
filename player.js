var express = require('express');
var app = express();

app.use(express.static('public'));


var MPlayer = require('mplayer');
var player = new MPlayer();

player.on('start', console.log.bind(this, 'playback started'));
player.on('status', console.log);


app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil');
});


app.get('/play',function(req,res) {
    res.setHeader('Content-Type', 'text/plain');
    //player.openFile('http://direct.franceinter.fr/live/franceinter-midfi.mp3')
    player.openFile( req.query.url );
    res.end('play')
});

app.get('/stop',function(req,res) {
	res.setHeader('Content-Type', 'text/plain');
	player.stop();
	res.end('stop');
});


app.listen(8080);


 



