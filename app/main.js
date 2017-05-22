const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    maxWidth: 800,
    maxHeight: 600,
    minWidth: 400,
    minHeight: 300,
    // titleBarStyle: 'hidden-inset',
    transparent: true,
    vibrancy: 'ultra-dark'
  });
  
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
});