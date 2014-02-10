'use strict';
var util = require('util');
var Pipes = require('../util/pipe-combiner.js');
var LexerDebugger = require('../base/lexer-debug.js');
var clone = require('../util/clone.js');

module.exports = function (dialect) {
    var debugdialect = clone(dialect);
    debugdialect.TokenMatcherL0 = LexerDebugger(dialect.TokenMatcherL0);
    debugdialect.TokenMatcherL1 = LexerDebugger(dialect.TokenMatcherL1);
    return require('./lexer.js')( debugdialect );
}