# ocap-react-starter

> OCAP DApp starter template with [@arcblock/ocap-js](https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js) integrated, bootstrapped using [create-react-app](https://github.com/facebook/create-react-app).

## Use as custom react-scripts

Make sure you have npm v6+ installed.

```shell
npx create-react-app my-ocap-app --scripts-version @arcblock/react-scripts
cd my-ocap-app
yarn start
```

## Use as starter template

```shell
git clone https://github.com/ArcBlock/ocap-react-starter.git
cd ocap-react-starter
yarn
yarn serve
```

## OCAP SDK Usage Example

- [src/libs/ocap.js](./src/libs/ocap.js)
- [src/pages/Query/index.js](./src/pages/Query/index.js)
- [src/pages/Subscription/index.js](./src/pages/Subscription/index.js)

## OCAP SDK Documentation

- [SDK Homepage](https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js)
- [SDK API Specification](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/spec.md)
- [Bitcoin API and Response Formats](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/btc.md)
- [Ethereum API and Response Formats](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/eth.md)

## Other OCAP Tools

- [OCAP Playground](https://ocap.arcblock.io)
- [OCAP Playbook](https://ocap.arcblock.io)

## Other Libraries Included

- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [semantic-ui-react](https://github.com/oblador/react-native-vector-https://react.semantic-ui.com/icons)
- [semantic-ui-css](https://github.com/Semantic-Org/Semantic-UI-CSS)

## Deployment

We recommend deploying your project to [now.sh](http://zeit.now/):

1. change your domain alias in [deploy.sh](./deploy.sh)
2. run `npm run deploy`

Congratulations, your project is online.
