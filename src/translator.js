import morseCodeCharacters from '../data/morse-code-characters';

function buildWordToSayInMorseCode(sentence) {
    var charArray = sentence.split(''),
        morseCodeArray = charArray.map((x) => {
            return morseCodeCharacters[x.toUpperCase()];
        }),
        wordToSay = morseCodeArray.join(',');
    return wordToSay;
}

module.exports = {
    toMorseCode(sentence){
        var words = sentence.split(' '),
            morseCodeSentenceToSpeak = words.map(word => buildWordToSayInMorseCode(word)).join(';');
        return morseCodeSentenceToSpeak;
    }
};
