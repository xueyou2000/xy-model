# xy-model

---

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/xy-model.svg?style=flat-square
[npm-url]: http://npmjs.org/package/xy-model
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/xy-model.svg?style=flat-square
[download-url]: https://npmjs.org/package/xy-model

> 基于`React Hooks` + `typescript`的基础组件

## 安装

[![xy-model](https://nodei.co/npm/xy-model.png)](https://npmjs.org/package/xy-model)

| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

```sh
# npm
npm install --save xy-model

# yarn
yarn add xy-model
```

## 使用

`ModelFooter`将没有 onClick 事件的元素默认带上关闭对话框事件

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Model, ModelBody, ModelFooter } from "xy-model";
ReactDOM.render(
    <Model title="对话框标题" maskClose={false} visible={visible} onChange={setVisible}>
        <ModelBody>
            <p>这是对话框内容</p>
            <p>这是对话框内容</p>
            <p>这是对话框内容</p>
            <p>这是对话框内容</p>
        </ModelBody>
        <ModelFooter>
            <Button type="text">取消</Button>
            <Button type="primary">确定</Button>
        </ModelFooter>
    </Model>,
    container
);
```

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-model is released under the MIT license.
