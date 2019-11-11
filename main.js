const { app, BrowserWindow } = require('electron')

let win;
let isToolsDev;
const args = process.argv.slice(1);
isToolsDev = args.some(val => val === '--devTools');


function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
        },
        frame: false,
        titleBarStyle: 'hidden',
        icon: './src/assets/icon/icon_transparent.png',
        show: false
    });

  win.loadURL('http://localhost:4200/');

  win.once('ready-to-show', () => {
    win.show();
  });

  if (isToolsDev) {
    win.webContents.openDevTools();
  }
}

app.on('ready', createWindow)
