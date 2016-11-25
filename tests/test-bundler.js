// ---------------------------------------
// Test Environment Setup
// ---------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
// import 'css-modules-require-hook/preset'; // Fix css-modules not rendering in tests

global.React = React;
global.ReactDOM = ReactDOM;
global.expect = expect;
global.shallow = shallow;
global.mount = mount;

// ---------------------------------------
// Require Tests
// ---------------------------------------
// for use with karma-webpack-with-fast-source-maps
const __karmaWebpackManifest__ = new Array(); // eslint-disable-line
const inManifest = (path) => ~__karmaWebpackManifest__.indexOf(path);

// require all `tests/**/*.test.js`
const testsContext = require.context('./', true, /\.test\.js$/);

// only run tests that have changed after the first pass.
const testsToRun = testsContext.keys().filter(inManifest);

(testsToRun.length ? testsToRun : testsContext.keys()).forEach(testsContext);
