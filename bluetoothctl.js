var connect = function(mac) {
  const spawn = require('child_process').spawn;
  const cmd = spawn('bluetoothctl');
  var buff = "";

  cmd.stdout.on('data', (data) => {
   var str = data.toString(), lines = str.split(/(\r?\n)/g);
   lines.map(function(l){
     l = l.trim()
      //console.log( l.split('').map( function(c) { return c.charCodeAt( 0 ) }) )
      //console.log( l.trim().match("/Changing power on/") );
   })
  
  });

  cmd.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  cmd.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });


  cmd.stdin.write("power on\n")  
  cmd.stdin.write("agent on\n")
  cmd.stdin.write("scan on\n")
  cmd.stdin.write("connect "+mac+"\n")
  cmd.stdin.write("quit\n")
}

var disconnect = function(mac) {
  const spawn = require('child_process').spawn;
  const cmd = spawn('bluetoothctl');

  cmd.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  cmd.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  cmd.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });  

  cmd.stdin.write("disconnect "+mac+"\n")
  cmd.stdin.write("power off\n")
  cmd.stdin.write("quit\n")
}

var pulseaudio = function() {
  const exec = require('child_process').exec;

  exec('pgrep -x "pulseaudio"',(err,stdout,stderr) => {
     if ( err == null ) {
	console.log("pulseaudio already running");
     } else {
        exec('pulseaudio --start',(err,stdout,stderr) => {
	  console.log("start pulseaudio");
          console.log('out:' + stderr );
        });
     }
 });


}

exports.connect = connect;
exports.disconnect = disconnect;
exports.pulseaudio = pulseaudio;
