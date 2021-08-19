# webpack-scss-js-starter

To run use following commands:

`yarn build-brazino-1` (dev builds only project #1)

`yarn build-brazino-2` (dev builds only project #2)

`yarn build-all` (dev builds all projects, configurable in `webpack.config.js`)

OR

`npm run build-brazino-1` (dev builds only project #1)

`npm run build-brazino-2` (dev builds only project #2)

`npm run build-all` (dev builds all projects, configurable in `webpack.config.js`)

### *Implemented:*

- Webpack `v5.51.1`
- Single entry project build (specify `--env project` in `package.json` file)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env)  for transpiling modern ES to ES5
- `css-loader` and `scss-loader` for transpiling CSS

### *TO-DO*:
- Add [`postcss-loader`](https://www.npmjs.com/package/postcss-loader) (mainly for prefixing and other useful postcss features)
- ~~Add [`webpack-dev-server`](https://www.npmjs.com/package/webpack-dev-server) and HMR~~
- Implement producion webpack config file and make all loaders work with it (currently only dev is implemented)
- Add code minifying for prod
- Optionally add `.babelrc` file if we are doing some more advanced babel configs