const {app, BrowserWindow} = require('electron');
const path = require('path');
// const server = require('../../src/preload.js')
const {execFileSync} = require('child_process');


async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    title: "Nasir Sir And Classes",
    icon: path.join(__dirname, 'software_icon.png'),
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      // preload: '' 
    },
  });

  execFileSync(`../src/server.js`)

//   hiddenServerWindow = new BrowserWindow({show: false})
//   win.loadURL(server)

  // and load the index.html of the app.
  win.loadURL('http://localhost:4000');
  // Open the DevTools.
//   win.webContents.openDevTools({ mode: 'detach' });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bars to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });
