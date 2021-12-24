<img src="src/assets/img/icon-128.png" width="64"/>

# Chrome Extension Boilerplate for <PlaceHolder>

## Announcements

## Features

- [Chrome Extension Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/)
- [React 17](https://reactjs.org)
- [Webpack 5](https://webpack.js.org/)
- [Webpack Dev Server 4](https://webpack.js.org/configuration/dev-server/)
- [React Hot Loader](https://github.com/gaearon/react-hot-loader)
- [eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Installing and Running

### Procedures

1. Check if your [Node.js](https://nodejs.org/) version is >= **14**.
2. Clone this repository.
3. Run `yarn install` to install the dependencies.
4. Run `yarn start` or `yarn build`
5. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.
6. Happy hacking.

## Structure

All your extension's code must be placed in the `src` folder.

The project implements a popup, an options page, a background page, and a new tab page (which replaces the new tab page of your browser).

## TypeScript

This project supports TypeScript! The `Options` Page is implemented using TypeScript. Please refer to `src/pages/Options/` for example usages.

## Webpack auto-reload and HRM

To make your workflow much more efficient this project uses the [webpack server](https://webpack.github.io/docs/webpack-dev-server.html) to development (started with `yarn start`) with auto reload feature that reloads the browser automatically every time that you save some file in your editor.

## Intelligent Code Completion

This project uses [@types/chrome](https://www.npmjs.com/package/@types/chrome) for auto completetion.

## Running with A Different Port

```shell
PORT=4000 yarn run start
```

## Packing

After the development of the extension run the command

```
$ NODE_ENV=production yarn build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

## Secrets

If secrets are needed, create `./secrets.<env>.js`, and import the file `./secrets.<THE-NODE_ENV>.js` to modules through the module named as `secrets`. For example, the compilation process will emit secrets js, as it placed in '\_./src/secrets.development.js`

```js
export default { key: '123' };
```

_./src/popup.js_

```js
import secrets from 'secrets';
ApiCall({ key: secrets.key });
```

:point_right: The files with name `secrets.*.js` already are ignored on the repository.

## Resources

- [Webpack documentation](https://webpack.js.org/concepts/)
- [Chrome Extension documentation](https://developer.chrome.com/extensions/getstarted)

---

Gassa Yan

