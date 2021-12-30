const { ipcRenderer } = require('electron');

window.openDialog = async () => {
  return ipcRenderer.invoke('open-dialog');
};
contextBridge.exposeInMainWorld('myAPI', {
  openDialog: async () => ipcRenderer.invoke('open-dialog'),
});
