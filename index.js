var Alexa = require('alexa-sdk');
var factFinder = require('./lib/factFinder');
var translator = require('./lib/translator');
var alexa;

var handlers = {
    'LaunchRequest': function () {
        this.emit('sayAFact');
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':tell', 'Ask morse code to say a fact');
    },
    'Unhandled': function () {
        this.emit(':ask', 'Sorry, I didn\'t get that.', 'Try asking morse code to say a fact.');
    },


    'sayAFact': function () {
        var factToSay = factFinder.getFact();
        var morseCode = translator.toMorseCode(factToSay);

        this.emit(':tellWithCard', morseCode, 'Morse Code Fact', factToSay);
    }
};

exports.handler = (event, context, callback) => {
    if(event && context) {
        alexa = Alexa.handler(event, context);
        alexa.registerHandlers(handlers);
        alexa.execute();
    } else {
        console.log('there was an issue with the way the app was called.');
    }
};
