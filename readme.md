

Electron App version of the Gardner Charts.
Ref: https://jojozhuang.github.io/tutorial/converting-web-app-to-desktop-app-with-electron/

## Downloading
The electron app pulls the original build as a submodule. Therefore the following is require.

`git clone git@github.com:ChaseWPDEV/NavyPSRApp.git`
`cd NavyPSRApp`
`git submodule init`
`git submodule update`

Next electron needs to be installed (can be skipped if installed globally)
`npm install`

Next webpack needs to be run. There probably a better way to do this, but right now the manual process is:
`cd navy_psr`
`npm install`
`webpack --mode=production`
Use the `--watch` flag if your going to be developing inside the submodule (you probably shouldn't be, but it happens sometimes)

## Running
`npm start`