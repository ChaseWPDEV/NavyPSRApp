const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
 
const path = require('path')
const url = require('url')
 
let win;

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
      width: 1280, 
      height: 960,
      title: "Navy Record Review",
      backgroundColor: "#122f34",
    });
   
    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'navy_psr/index.html'),
      protocol: 'file:',
      slashes: true
    }))

    win.maximize();
  }
  app.on('ready', createWindow)