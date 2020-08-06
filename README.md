这是[Babel教程 - 姜瑞涛的官方网站](https://www.jiangruitao.com/babel/)配套的代码。

在教程里转码命令大部分使用npx babel main.js -o compiled.js进行的，下载本项目代码后，除了可以用该命令进行转码，也可以在相应的例子文件夹下执行npm install命令安装npm包后，使用npm run dev进行转码。在package.json文件里，npm run dev指向了npx babel main.js -o compiled.js命令。