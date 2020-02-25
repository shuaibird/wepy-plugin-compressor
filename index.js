const path = require('path');
const prettyData = require('pretty-data');
const Terser = require('terser');

function WepyPluginCompressor(options = {}) {
  const {
    enabled,
    wxml,
    json,
    wxss,
    js,
  } = {
    enabled: false,
    wxml: true,
    json: true,
    js: true,
    wxss: false,
    ...options,
  };

  return function() {
    if (!enabled) {
      return;
    }

    this.register('output-file', ({ filename, code: rawCode, encoding }) => {
      const ext = path.extname(filename);

      if (wxml && ext === '.wxml') {
        const code = prettyData.pd.xmlmin(rawCode)
        return Promise.resolve({ filename, code, encoding });
      }

      if (json && ext === '.json') {
        const code = prettyData.pd.jsonmin(rawCode)
        return Promise.resolve({ filename, code, encoding });
      }

      if (wxss && ext === '.wxss') {
        const code = prettyData.pd.cssmin(rawCode)
        return Promise.resolve({ filename, code, encoding });
      }

      if (js && ext === '.js') {
        const { code } = Terser.minify({ [filename]: rawCode }, { ecma: 5 });
        return Promise.resolve({ filename, code, encoding });
      }

      return { filename, code: rawCode, encoding };
    });
  };
}

module.exports = WepyPluginCompressor;
