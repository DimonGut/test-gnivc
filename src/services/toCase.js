import {endings} from "./endings";

export function ToCase(word, toCase) {
    let cutString = '';

    for(const obj of endings) {
        const item = obj.ending;
        const arrOfEnding = item.split('/');
        const numElemOfEnding = arrOfEnding.length;
        if(numElemOfEnding > 1)
    }
}