const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow;

// メイン画面の表示
function createWindow(){
  mainWindow = new BrowserWindow({width: 300, height: 150});
  mainWindow.loadURL('file://' + __dirname + '/../renderer/main.html');
  // ウィンドウが閉じられたら参照をなくす
  mainWindow.on("closed", () => {mainWindow = null;});
}

// Electronの初期化完了後に実行
app.on('ready', () => {
  createWindow();
});

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// アプリケーションドックでアイコンをクリック時(mac)
app.on("activate", () => {
  if(mainWindow === null){
    createWindow();
  }
});
