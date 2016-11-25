import { jsdom } from 'jsdom';
import React from 'react';
import ReactDOM from 'react-dom';
import chai from 'chai';
import { shallow, mount } from 'enzyme';
import 'css-modules-require-hook/preset'; // Fix css-modules not rendering in tests

const exposedProperties = [ 'window', 'navigator', 'document' ];

global.document = jsdom('<html><head></head><body></body></html>');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

global.React = React;
global.ReactDOM = ReactDOM;
global.chai = chai;
global.expect = chai.expect;
global.shallow = shallow;
global.mount = mount;
