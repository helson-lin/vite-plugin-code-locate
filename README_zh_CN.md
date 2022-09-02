<h1 align="center">vite-plugin-code-locate</h1>
<p align="center">chrome定位代码位置</p>

简体中文 | [English](./README.md)  

## 🚀 特性

- ⚡ 结合Chrome插件可以快速定位到Dom的代码位置，精确到行

## 📦 安装

```bash
npm install vite-plugin-code-locate -D
```

## 🦄 用法

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
- 安装chrome插件 [codeLocate](https://github.com/helson-lin/vite-codeLocate)
- 右键单击菜单并选择“打开/关闭代码定位”
- 点击项目运行页面的DOM元素，它将自动打开vscode中的dom相关代码（前提安装vscode的时候配置code环境变量）

**参考文献** [聊聊在VSCode中怎么点击DOM 自动定位到相应代码行？](https://blog.csdn.net/qq_43067585/article/details/125613465)

## 许可证

[MIT](./LICENSE)