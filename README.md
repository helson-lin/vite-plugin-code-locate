<h1 align="center">vite-plugin-code-locate</h1>
<p align="center">Chrome locate code location</p>

[简体中文](./README_zh_CN.md) | English

## 🚀 features

- ⚡ Combined with the chrome extension, you can quickly locate the code location of DOM, accurate to the line

## 📦 install

```bash
npm install vite-plugin-code-locate -D
```

## 🦄 usage
- installed chrome extension [codeLocate](https://github.com/helson-lin/vite-codeLocate)
- vite.config.ts

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import codeLocate from 'vite-plugin-code-locate';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    codeLocate()
  ]
});
```
-  right click menu select "open/close code locate"
-  click the project running page's dom, it's will auto open the dom related code in vscode(PS: you should installed vscode env variable)

**reference** [聊聊在VSCode中怎么点击DOM 自动定位到相应代码行？](https://blog.csdn.net/qq_43067585/article/details/125613465)

## licence

[MIT](./LICENSE)