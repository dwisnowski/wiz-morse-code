var Alexa = require('alexa-sdk');
var factFinder = require('./lib/factFinder');
var translator = require('./lib/translator');
var alexa;


function runIt() {
    var factToSay = factFinder.getFact();
    console.log('factToSay: ' + factToSay);

    var translated = translator.toMorseCode(factToSay);
    console.log('translated: ' + translated);
    return translated;
}

var handlers = {
    'AMAZON.HelpIntent': function () {
        this.emit(':tell', 'Ask morse code to say a fact');
    },
    'sayAFact': function () {
        this.emit(':tell', runIt());
    }
};

exports.handler = (event, context, callback) => {
    alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

runIt();