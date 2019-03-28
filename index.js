//本文件作用创建一个窗口，并将index.html文件显示在这个窗口上
const{app, BrowserWindow} = require('electron');
// electron是Electron的模块，必须引用。该模块导出了一个app对象和一个BrowserWindow类
// app中包含一些方法，如on方法用于将事件绑定到事件函数中
function createWindow () {
    var n = 20;
    console.log(n);
    // 创建浏览器窗口
    win = new BrowserWindow({
        width:800,
        height: 600,
    });
    // 打开调试工具
    win.webContents.openDevTools();
    // 加载index.html
    win.loadFile('index.html');
    win.on('closed',() => {
           console.log('closed');
           win = null;
    })
    app.on('ready',createWindow)
    app.on('window-all-closed',() => {
        console.log('window-all-closed');
        if(Process.platform !== 'darwin'){
            app.quit();
        }
    })
    app.on('activate',() => {
        console.log('activate');
        if(win == null){
            createWindow();
        }
    });
}
// 将createWindow（）函数绑定在ready事件上，在Electron应用运行时执行，createWindow（）函数
//中创建了BrowserWindow对象，一个BrowserWindow代表一个窗口，通过BrowserWindow类构造方法指定
// 窗口尺寸，然后通过loadFile方法装载index.html
app.on('ready', createWindow)
