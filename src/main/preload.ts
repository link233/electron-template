/// <reference types="electron" />

import { contextBridge } from 'electron'

// 向主进程暴露接口
contextBridge.exposeInMainWorld('versions', {
  chrome: process.versions.chrome,
  node: process.versions.node,
  electron: process.versions.electron
})
