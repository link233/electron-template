import { app, BrowserWindow } from 'electron'
import path from 'path'

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, './preload.js')
    }
  })

  // 判断是开发环境还是打包环境
  if (process.env.npm_lifecycle_event === 'dev:electron') {
    // 开发环境
    win.loadURL('http://localhost:3000/')
    win.webContents.openDevTools() // 打开开发工具
  } else {
    win.loadFile('dist/index.html')
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
