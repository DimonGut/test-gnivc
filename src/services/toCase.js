// export function ToCase(word, toCase) {
//
//     const decl1 = /^[а-я]+[ая]?$/iu;
//     const decl2 = /^[а-я]+[^аяь]$/iu;
//     const decl3 = /^[а-я]+ь$/iu;
//     let str = '';
//     const ending = {
//
//     }
//
//
//     if(decl1.test(String(word))) {
//         str = word.slice(-1);
//
//     } else if(decl2.test(String(word))) {
//
//     } else if(decl3.test(String(word))) {
//
//     } else {
//
//     }
// }

export function ToCase(word, toCase) {
    const key1 = 'а';
    const key2 = 'б/в/м/г/д/л/ж/з/к/н/п/т/ф/ч/ц/щ/р/х';
    const key3 = 'и';
    const key4 = 'ый';
    const key5 = 'й';
    const key6 = 'о';
    const key7 = 'с/ш';
    const key8 = 'ы';
    const key9 = 'й';
    const key10 = 'уль';
    const key11 = 'ь';
    const key12 = 'я';

    const endings = {
        [key1]: {
            arrayEndings: ['ы','е','у','ой','е'],
            prefixEndings: ['ш','ж','к','ч'],
            exc: ['и'],
        },
        [key2]: {
            arrayEndings: ['%а','%у','%а','%ом','%е'],
            prefixEndings: [],
        },
        [key3]: {
            arrayEndings: ['ей','ям','%','ями','ях'],
            prefixEndings: [],
        },
        [key4]: {
            arrayEndings: ["ого", "ому", "%", "ым", "ом"],
            prefixEndings: [],
        },
        [key5]: {
            arrayEndings: ["я", "ю", "я", "ем", "е"],
            prefixEndings: [],
        },
        [key6]: {
            arrayEndings: ["а", "у", "%", "ом", "е"],
            prefixEndings: [],
        },
        [key7]: {
            arrayEndings: ["%а", "%у", "%", "%ом", "%е"],
            prefixEndings: [],
        },
        [key8]: {
            arrayEndings: ["ов", "ам", "%", "ами", "ах"],
            prefixEndings: [],
        },
        [key9]: {
            arrayEndings: ["я", "ю", "я", "ем", "е"],
            prefixEndings: [],
        },
        [key10]: {
            arrayEndings: ["ули", "уле", "улю", "улей", "уле"],
            prefixEndings: [],
        },
        [key11]: {
            arrayEndings: ["%и", "%и", "%ь", "%ью", "%и"],
            prefixEndings: ['ч','ш','д','т'],
        },
        [key12]: {
            arrayEndings: ["и", "е", "ю", "ей", "е"],
            prefixEndings: [],
        },
        [key1]: {
            arrayEndings: ["ы", "е", "у", "ой", "е"],
            prefixEndings: [],
        }
    }
}