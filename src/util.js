"use strict";

const execa = require("execa");

function formatTextWithElmFormat(text) {
  return execa.sync("elm-format", ["--stdin"], {
    input: text,
    preferLocal: false,
    localDir: __dirname,
    stripEof: false
  }).stdout;
}

module.exports = {
  formatTextWithElmFormat
};
