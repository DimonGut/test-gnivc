import {cases, endings} from "./endings";
import {getNumOfCase} from "./getNumOfCase";

export function toCase(word, toCase) {

    const numCase = getNumOfCase(toCase, cases);
    let cutString = '';
    let endOfString = '';
    let result = '';


    for(const obj of endings) {
        const item = obj.ending;
        const arrOfEnding = item.split('/');
        const numElemOfEnding = arrOfEnding.length;

        if(numElemOfEnding > 1) {
            for(const item of arrOfEnding) {
                if(word.slice(-item.length) === item) {
                    cutString = word;
                    endOfString = obj.arrayCaseEndings[numCase];
                    break;
                }
            }
        } else {
            if(word.slice(-item.length) === item && obj.prefixEndings.length === 0) {
                cutString = word.slice(0, -item.length);
                endOfString = obj.arrayCaseEndings[numCase];
                break;
            } else if(word.slice(-item.length) === item && obj.prefixEndings.length !== 0) {
                const prefix = word.slice(word.length - (item.length + 1), -item.length);

                for(const item of obj.prefixEndings) {
                    if(item === prefix) {
                        cutString = word.slice(0, -item.length);
                        endOfString = obj.exc[numCase];
                        break;
                    }
                }

                if(cutString.length === 0) {
                    cutString = word.slice(0, -item.length);
                    endOfString = obj.arrayCaseEndings[numCase];
                    break;
                }
            }
        }
    }
    if(/\%/.test(endOfString)) {
        result = `${cutString}${endOfString.slice(1, endOfString.length)}`;
    } else {
        result = `${cutString}${endOfString}`;
    }
    return result;
}