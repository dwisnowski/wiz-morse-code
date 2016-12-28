var factFinder = require('./lib/factFinder');
var translator = require('./lib/translator');

var factToSay = factFinder.getFact();
console.log('factToSay: ' + factToSay);

var translated = translator.toMorseCode(factToSay);
console.log('translated: ' + translated);


exports.handler = function(event, context, callback) {
    callback(null, translator.toMorseCode(factFinder.getFact()));
};