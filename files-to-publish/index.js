var Alexa = require('alexa-sdk');
var factFinder = require('./lib/factFinder');
var translator = require('./lib/translator');
var alexa;


var handlers = {
    'AMAZON.HelpIntent': function () {
        this.emit(':tell', 'Ask morse code to say a fact');
    },
    'sayAFact': function () {
        var factToSay = factFinder.getFact();
        // console.log('factToSay: ' + factToSay);

        var morseCode = translator.toMorseCode(factToSay);
        // console.log('translated: ' + translated);

        this.emit(':tellWithCard', morseCode, 'Morse Code Fact', factToSay);
    }
};

exports.handler = (event, context, callback) => {
    alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
