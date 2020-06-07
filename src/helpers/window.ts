import { BrowserWindow } from "electron";
import * as path from "path";

import app from "./app";

let mainWindow: Electron.BrowserWindow;

export function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    width: 800,
  });

  mainWindow.on('show', () => {
    app.dock.show()
  })

  mainWindow.on('close', () => {
    app.dock.hide()
  })

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "../public/index.html"));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}