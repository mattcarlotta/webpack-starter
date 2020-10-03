## Webpack Starter Kit

![Z6Qqlng.png](https://i.imgur.com/Z6Qqlng.png)

## Table of contents

[Project Structure](#project-structure)

[Installation](#installation)

[Commands](#commands)

[Configuration](#configuration)

[Packages Incorporated](#packages-incorporated)

## Project Structure

<details>
<summary>Click to expand project structure</summary>
<pre><code>
├── dist
|   ├── css
|   |   ├── main.[contenthash:8].css
|   |   └── main.[contenthash:8].css.map
|   ├── js
|   |   ├── main.[hash].js
|   |   └── main.[hash].js.map
|   ├── media
|   |   └── [hash].[ext]
|   └── favicon.ico
|   └── index.html
|
├── config
|   ├── devServer.js
|   ├── envs.js
|   ├── optimization.js
|   ├── output.js
|   ├── paths.js
|   ├── plugins.js
|   └── rules.js
|
├── public
|   ├── favicon.ico
|   └── index.html
|
├── src
|   ├── components
|   ├── images
|   ├── pages
|   ├── root
|   ├── routes
|   ├── styles
|   ├── utils
|   └── index.js
|
├── server.js
└── webpack.config.js
</code></pre>
</details>
<br />

## Installation

1 - Clone the boilerplate repository.

```
 git clone git@github.com:mattcarlotta/react-starter-kit.git
```

2 - Run `yarn` or `npm install` to install dependencies.

3 - Run `yarn dev` or `npm run dev` to start a development server.

## Commands

| `yarn <command>` | Description                                                              |
| ---------------- | ------------------------------------------------------------------------ |
| `analyze`        | Compiles application to a `dist` folder and analyzes chunk distribution. |
| `build`          | Compiles application to a `dist` folder.                                 |
| `dev`            | Starts a development server at `localhost:3000`.                         |
| `format`         | Prettify all `.js` files.                                                |
| `lint:js`        | Lint all `.js` files.                                                    |
| `lint:styles`    | Lint all `.scss` files.                                                  |
| `start`          | Starts a production server at `localhost:8080` (must run `build` first). |
| `test`           | Runs all `.test.js` files once.                                          |
| `test:cov`       | Runs a coverage report for `.test.js` files in `src`.                    |
| `test:watch`     | Runs and watches all `.test.js` files.                                   |

## Configuration

<details>
<summary>Click to expand configuration</summary>

- config/devServer.js: webpack devServer options.
- config/envs.js: webpack environment variables.
- config/optimization.js: webpack optimization options.
- config/output.j:` webpack output options.
- config/paths.js` webpack config folder paths.
- config/plugins.js: webpack plugins options.
- config/rules.js: webpack rules functions.
- src/styles/assets: media assets imports.
- src/styles/extensions: partial shared extensions.
- src/styles/globals: global asset imports (see notes in [global.scss](src/styles/globals/globals.scss#L1-L32) for important information).
- src/styles/variables: partial shared variables.
- src/styles/styles.scss: indexed partial files for easier sharing (see notes in [styles.scss](src/styles/styles.scss#L1-L48) for important information).
- src/utils/setupTests/index.js: enzyme test setup for your React components (see [notes](src/utils/setupTests/index.js#L8-L16) in setup.js for important information).
- .browserslistrc: browsers list config.
- .eslintignore: eslint config for ignoring scss files.
- .eslintrc: eslint config for linting js files.
- .prettierc: prettier config.
- .stylelintrc.json: stylelint config for linting scss files.
- babel.config.js: babel config for react js files.
- jest.json: jest config.
- server.js: an express configuration to serve production assets.
- webpack.config.js: a single webpack environment based config.

</details>
<br />

By default, the current directories within `src` are aliased (`~`). This means that you can refer to root files or directories by using the `~` symbol followed by a child file or directory name. For example, `~reducers`, refers to the root `reducers/index.js` file, while `~reducers/Messages` refers to the child `reducers/Messages/index.js` file. This allows for rapid development when referring to root-level directories within src as it eliminates the hassle of specifiying relative paths (like `../../../../../../../reducers`) to the directory!

## Packages Incorporated

To see the latest package versions, please check out the [package.json](package.json). If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/react-starter-kit/issues">here</a>.

<details>
<summary>Click to expand brief overview of packages</summary>
<pre><code>
- <a href="https://github.com/babel/babel">Babel</a>
- <a href="https://github.com/webpack-contrib/css-loader">CSS Loader</a>
- <a href="https://github.com/eslint/eslint/">Eslint</a>
- <a href="http://airbnb.io/enzyme/">Enzyme</a>
- <a href="https://github.com/smooth-code/error-overlay-webpack-plugin">Error Overlay Webpack Plugin</a>
- <a href="https://github.com/expressjs/express">Express</a>
- <a href="https://github.com/geowarin/friendly-errors-webpack-plugin">Friendly Errors Webpack Plugin</a>
- <a href="https://github.com/facebook/jest">Jest</a>
- <a href="https://github.com/lodash/lodash">Lodash</a>
- <a href="https://github.com/webpack-contrib/mini-css-extract-plugin">Mini CSS Extract Plugin</a>
- <a href="https://github.com/expressjs/morgan">Morgan</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
- <a href="https://github.com/facebook/prop-types">PropTypes</a>
- <a href="https://github.com/facebook/react">React</a>
- <a href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom">React Router Dom</a>
- <a href="https://github.com/webpack-contrib/sass-loader">Sass Loader</a>
- <a href="https://stylelint.io/">Stylelint</a>
- <a href="https://github.com/kristerkari/stylelint-scss">Stylelint-SCSS</a>
- <a href="https://github.com/stylelint/stylelint-config-recommended">Stylelint-Config-Recommended</a>
- <a href="https://github.com/styled-components/styled-components">Stylized Components</a>
- <a href="https://github.com/webpack-contrib/style-loader">Style Loader</a>
- <a href="https://github.com/webpack/webpack">Webpack</a>
- <a href="https://www.npmjs.com/package/webpackbar">Webpackbar</a>
- <a href="https://github.com/webpack/webpack-dev-server">Webpack Dev Server (Hot Loaded)</a>
</code></pre>
</details>
<br />
