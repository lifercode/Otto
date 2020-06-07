import { app, BrowserWindow } from 'electron'
import { createTray } from './tray'

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createTray()
  }
})

export default app
