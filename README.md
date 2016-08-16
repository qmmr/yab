# YAB - Yet Another Boilerplate

Boilerplate for kick starting a project with the following technologies:
* [React](https://github.com/facebook/react)
* [ES2015 with Babel](http://babeljs.io)
* [Webpack](http://webpack.github.io)
* [Webpack Dev Server](http://webpack.github.io/docs/webpack-dev-server.html)
* [React Hot Loader](http://gaearon.github.io/react-hot-loader/)
* [Karma](http://karma-runner.github.io/0.13/index.html)
* [Mocha]()

### Usage

```
npm install
npm start
# Open http://localhost:5000
```

### Linting

ESLint with React linting options have been enabled.

```
npm run lint
```

### Testing

Start Karma test runner.

This will run the tests only one, ideal for CI (travis and such).
```
npm test
```

This will auto watch all files for changes and rerun the tests. Ideal for development.
```
npm run test:watch
```
