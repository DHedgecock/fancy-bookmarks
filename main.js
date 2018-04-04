/**
 * ℹ️ Electron Notes
 *
 * Electron looks up application index the same way as Node, checking for a `main`
 * field in packge.json then defaulting to index.js.
 *
 * Electron runs the application index in the *main process*, and only one main
 * process exists. Chromium instances are run in *render processes*, of which there
 * can be multiple.
 *
 * See: https://electronjs.org/docs/tutorial/application-architecture
 */

const path = require('path')
const url = require('url')
const { app, BrowserWindow } = require('electron')

const dev = process.env.NODE_ENV === 'development'

// Application control functions
// ---------------------------------------------------------------------------

// Keep a global reference of the window object, if you don't, the window will be
// closed automatically when the JavaScript object is garbage collected.
let winddow

function createWindow () {
  // Create the browser window.
  winddow = new BrowserWindow({ width: 1200, height: 800 })

  // and load the index.html of the app.
  winddow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'public', 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  )

  // Open the DevTools.
  if (dev) winddow.webContents.openDevTools({ detached: true })

  // Emitted when the window is closed.
  winddow.on('closed', function () {
    // Dereference the window object
    winddow = null
  })
}

// Electron app hooks
// ---------------------------------------------------------------------------

/**
 * App object emitted events: https://electronjs.org/docs/api/app#events
 */

// This method will be called when Electron has finished initialization and is ready
// to create browser windows. Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar to stay active until
  // the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (winddow === null) createWindow()
})
