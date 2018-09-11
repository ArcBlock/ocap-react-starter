# ocap-react-starter

![](https://img.shields.io/badge/powered%20by-arcblock-brightgreen.svg)

> 集成了 [OCAP JS SDK](https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js) 的 React 种子项目，使用 [create-react-app](https://github.com/facebook/create-react-app) 初始化。

> For English documentation, please checkout [README.md](./README.md)

## 作为 create-react-app 的 react-scripts

需要安装 npm v6+，自带了 npx 命令，直接使用如下命令初始化项目：

```shell
npx create-react-app my-ocap-app --scripts-version @arcblock/react-scripts
cd my-ocap-app
yarn start
```

## 作为种子项目：直接克隆使用

```shell
git clone https://github.com/ArcBlock/ocap-react-starter.git
cd ocap-react-starter
yarn
yarn serve
```

## OCAP SDK 代码示例

- [src/libs/ocap.js](./src/libs/ocap.js)
- [src/pages/Query/index.js](./src/pages/Query/index.js)
- [src/pages/Subscription/index.js](./src/pages/Subscription/index.js)

## OCAP SDK 文档

- [SDK 源码和文档首页](https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js)
- [Bitcoin API 列表和响应格式](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/btc.md)
- [Ethereum API 列表和响应格式](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/eth.md)

## OCAP 提供的工具

- [OCAP Playground：快速执行查询、预览结果](https://ocap.arcblock.io)
- [OCAP Playbook：记录、分享基于区块链的数据研究](https://ocap.arcblock.io)

## Other Libraries Included

- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [semantic-ui-react](https://github.com/oblador/react-native-vector-https://react.semantic-ui.com/icons)
- [semantic-ui-css](https://github.com/Semantic-Org/Semantic-UI-CSS)

## 项目部署

如果看到这里，恭喜你，马上就可以把项目部署到公网，给大家试用了，我们建议使用 [now.sh](http://zeit.now/) 部署应用，步骤如下：

1. 到 [https://zeit.co](https://zeit.co) 创建账号
1. 安装 zeit cli: `npm install -g now`
1. 登录 zeit-cli, `now login`
1. 在 [deploy.sh](./deploy.sh) 中设置项目的域名 alias
1. 执行 `npm run deploy`

部署成功！很期待你的应用出现在我们的 [APP Gallery](https://hack.arcblock.io/app-gallery/) 里面。
