const {app, BrowserWindow} = require('electron');

let mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  // mainWindowを作成
  mainWindow = new BrowserWindow({
      // ウィンドウ作成時のオプション
      "width": 250,
      "height": 300
  });
  // htmlを絶対パスで指定（相対パスだと動かない）
  mainWindow.loadURL('file://' + __dirname + '/src/calculator.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
