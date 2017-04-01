var express = require('express');
var app = express();

app.use(express.static('public'));


var MPlayer = require('mplayer');
var player = new MPlayer();

var bluetooth = require('./bluetoothctl');

player.on('start', console.log.bind(this, 'playback started'));
player.on('status', console.log);


app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil');
});


app.get('/play',function(req,res) {
    res.setHeader('Content-Type', 'text/plain');
    player.openFile( req.query.url );
    res.end('play')
});

app.get('/stop',function(req,res) {
	res.setHeader('Content-Type', 'text/plain');
	player.stop();
	res.end('stop');
});

app.get('/connect',function(req,res) {
	res.setHeader('Content-Type', 'text/plain');	
	bluetooth.pulseaudio();
	bluetooth.connect('00:1D:DF:76:BC:8D');
});

app.get('/disconnect',function(req,res) {
	res.setHeader('Content-Type', 'text/plain');	
	bluetooth.disconnect('00:1D:DF:76:BC:8D');
});

app.get('/volume', function(req,res) {
	res.setHeader('Content-Type', 'text/plain');
	player.volume( req.query.volume );
});

app.listen(8080);


 



