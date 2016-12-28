import morseCodeCharacters from '../data/morse-code-characters';

function buildWordToSayInMorseCode(sentence) {
    var charArray = sentence.split('');
    console.log('charArray: ' + charArray);


    var morseCodeArray = charArray.map((x) => {
        return morseCodeCharacters[x.toUpperCase()];
    });
    console.log('morseCodeArray: ' + morseCodeArray);

    var wordToSay = morseCodeArray.join('-pause-');
    console.log('wordToSay: ' + wordToSay);

    return wordToSay;
}

module.exports = {
    toMorseCode(sentence){
        var words = sentence.split(' ');
        var morseCodeSentenceToSpeak = words.map(word => buildWordToSayInMorseCode(word)).join('-space-');
        console.log('morseCodeSentenceToSpeak: ' + morseCodeSentenceToSpeak);
        return morseCodeSentenceToSpeak;
    }
};
