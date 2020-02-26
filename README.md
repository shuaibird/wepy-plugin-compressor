# Wepy-plugin-compressor
An easily-to-be-used compressor plugin for wepy 2.

## Install
```
npm install wepy-plugin-compressor --save-dev
```

## How to use
```javascript
/* wepy.config.js */

// import the plugin
const WepyPluginCompressor = require('wepy-plugin-compressor');

// config to overwrite the default plugin settings
const options = { enabled: true };

// add the plugin
module.exports = {
  plugins: [
    WepyPluginCompressor(options),
  ],
};
```

## Default settings
```javascript
const options = {
  // by default the compression is disabled
  enabled: false,
  wxml: true,
  json: true,
  // by default the wxss compression is disabled
  wxss: false,
  // the engine under the hook is terser
  // which would automatically transpile the ES6 into ES5
  js: true,
};
```
