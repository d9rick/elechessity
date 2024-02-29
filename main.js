const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 600
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    // needed to properly close a window on macOS
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

// close window properly on windows & linux
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
