import { Menu, Tray } from 'electron'
import { resolve } from 'path'

import app from './app'
import { createWindow } from './window'

let tray = null

export function createTray () {
  tray = new Tray(resolve(__dirname, '../assets/images/iconTemplate.png'))

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Preferences', type: 'normal', click: () => createWindow() },
    { type: 'separator', click: () => createWindow() },
    { label: 'Quit', type: 'normal', click: () => app.quit() },
  ])

  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
}
