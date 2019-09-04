| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-model.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-model.svg?style=flat-square)

[![xy-model](https://nodei.co/npm/xy-model.png)](https://npmjs.org/package/xy-model)

# xy-model

模态对话框组件，有标题和页脚按钮。

## 安装

```bash
# yarn
yarn add xy-model
```

## 使用例子

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
    container,
);
```

## API

| 属性            | 说明                     | 类型                                                 | 默认值 |
| --------------- | ------------------------ | ---------------------------------------------------- | ------ |
| title           | 对话框标题               | React.ReactNode                                      | 无     |
| visible         | 是否显示                 | boolean                                              | false  |
| defaultVisible  | 否默认显示               | boolean                                              | false  |
| initialFocus    | 对话框打开焦点元素选择器 | boolean                                              | 无     |
| getContainer    | 返回一个容器来装载抽屉   | HTMLElement/() => HTMLElement                        | 无     |
| children        | 对话框内容               | React.ReactNode                                      | 无     |
| fixed           | 是否固定                 | boolean                                              | true   |
| showMask        | 是否显示蒙层             | boolean                                              | true   |
| maskClose       | 蒙层是否可关闭对话框     | boolean                                              | true   |
| closeOnPressEsc | 是否 ESC 关闭            | boolean                                              | true   |
| onChange        | 对话框可视改变事件       | (visible: boolean) => void                           | 无     |
| onKeyDown       | 键盘按下事件             | (event: React.KeyboardEvent<HTMLDivElement>) => void | 无     |
| onUnmount       | 对话框关闭动画结束       | Function                                             | 无     |
| onClose         | 关闭事件                 | Function                                             | 无     |
| getCloseFunc    | 获取关闭函数             | (close: Function) => void                            | 无     |

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
