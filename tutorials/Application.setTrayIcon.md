Adds a customizable icon in the system tray and notifies the application when clicked.
# Example
```js
async function setTrayIcon() {
    const app = await fin.Application.getCurrent();
    app.on('tray-icon-clicked', console.log);
    const iconUrl = "http://cdn.openfin.co/assets/testing/icons/circled-digit-one.png";
    return await app.setTrayIcon(iconUrl);
}

setTrayIcon().then(() => console.log('success')).catch(console.error);
```
