var connect = function(mac) {
  const spawn = require('child_process').spawn;
  const ls = spawn('bluetoothctl');

  ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });


  ls.stdin.write("power on\n")
  ls.stdin.write("agent on\n")
  ls.stdin.write("scan on\n")
  ls.stdin.write("connect "+mac+"\n")
}

var disconnect = function() {
  
}

exports.connect = connect;
exports.disconnect = disconnect;