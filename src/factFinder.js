import wwiiFacts from '../data/word-war-two-facts';

module.exports = {
    getFact(){
        let factToPluck = Math.floor(Math.random()*(wwiiFacts.length));
        return wwiiFacts[factToPluck];
    }
};
