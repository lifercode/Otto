import config from "./helpers/config"
import app from "./helpers/app"
import { createTray } from './helpers/tray'

config()

app.whenReady().then(createTray)
