import { app, BrowserWindow } from 'electron'
import path from 'path'

// 创建窗口
function createWindow () {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 1000, // 宽度
    height: 800, // 高度
    // 网页功能的设置
    webPreferences: {
      // 预加载
      preload: path.join(__dirname, './preload.js')
    }
  })

  // 判断是开发环境还是打包环境
  if (process.env.npm_lifecycle_event === 'dev:electron') {
    /* 开发环境 */
    // 加载 URL 地址
    win.loadURL('http://localhost:8080/')
    // 打开开发者工具
    win.webContents.openDevTools()
  } else {
    /* 生产环境 */
    // 加载文件地址
    win.loadFile('dist/index.html')
  }
}

// electron 初始化时
app.whenReady().then(() => {
  createWindow()

  // 在 MacOS 下，当全部窗口关闭，点击 dock 图标，窗口再次打开
  // 应用激活事件
  app.on('activate', () => {
    // 是否所有窗口都关闭
    if (BrowserWindow.getAllWindows().length === 0) {
      // 重新创建窗口
      createWindow()
    }
  })
})

// 监听窗口关闭事件
app.on('window-all-closed', () => {
  // 对于 MacOS 系统，关闭窗口时，不会直接退出应用
  // process.platform：平台；darwin：MacOS。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 应用退出事件
app.on('quit', () => {
  console.log('quit')
})
