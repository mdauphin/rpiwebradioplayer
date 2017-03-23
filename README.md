# Rpi WebRadio Player

A WebRadio player in nodejs to play web throw bluetooth.

## Depends
- nodejs
- mplayer
- expressjs
- native libbluetooth-dev

## Hardware
Tested with raspberrypi3 connected to bluetooth H&C bluetooth receiver.

## Install
    $ sudo apt-get install libbluetooth-dev
    $ git clone https://github.com/mdauphin/rpiwebradioplayer.git
    $ cd rpiwebradioplayer
    $ npm init
    $ node player.js

## Configuration
 - Edit radio list from public/data.js

## License

GPL-3.0
Copyright @mdauphin