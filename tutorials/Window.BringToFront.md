Brings the window to the front of the window stack
# Example
```js
async function BringWindowToFront() {
    const app = await fin.Application.create({
        name: 'myApp',
        uuid: 'app-1',
        url: 'https://www.openfin.co',
        autoShow: true
    });
    await app.run();
    const win = await app.getWindow();
    return await win.bringToFront();
}

BringWindowToFront().then(() => console.log('Window is in the front')).catch(err => console.log(err));
```
