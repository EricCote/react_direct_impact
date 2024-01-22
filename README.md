# README
# About This Project
This project was created as a React + Vite project.

# Project Dependencies
This project requires node and npm.
It's probably easiest to install nvm (node version manager). It can install multiple versions of node+npm and allow you to easily switch between versions.

## Check if a recent version of nvm is installed

```
nvm -v
```
- Should be v0.39.7 or greater on MacOS
- Should be 1.1.12 or greater on Windows PCs

## If you need to update or install nvm on your machine

First, uninstall nvm and Node.js
On Windows PCs, go to Settings, Apps, Apps & features.
Uninstall both `Node.js` and `NVM for Windows`
On MacOS, type the following in Terminal:
```
rm -rf $NVM_DIR ~/.npm ~/.bower
```

## Install nvm on Windows PC

Goto https://github.com/coreybutler/nvm-windows/releases/latest
At the bottom of the page, download nvm-setup.exe
Install nvm by running the installer

## Install nvm on MacOS

Run the following on Terminal:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
Freshly installed nvm may not be immediately detected on the command line.

In that case, just close the console and restart a new command line.

# Project Setup
This project has npm dependencies that need to be installed.
Please run the following command in order to install them

```
npm install
```

# Building the Project
## Dev Deployment
```
    npm run dev
```

## Prod Deployment
```
    npm run build
```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
