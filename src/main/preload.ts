import { contextBridge } from 'electron'

// 向渲染进程暴露接口
contextBridge.exposeInMainWorld('versions', {
  chrome: process.versions.chrome,
  node: process.versions.node,
  electron: process.versions.electron
})
