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

    const endings = [
        {
            ending: 'а',
            arrayCaseEndings: ['ы', 'е', 'у', 'ой', 'е'],
            prefixEndings: ['ш', 'ж', 'к', 'ч'],
            exc: ['и'],
        },
        {
            ending: 'б/в/м/г/д/л/ж/з/к/н/п/т/ф/ч/ц/щ/р/х',
            arrayCaseEndings: ['%а', '%у', '%а', '%ом', '%е'],
            prefixEndings: [],
        },
        {
            ending: 'и',
            arrayCaseEndings: ['ей', 'ям', '%', 'ями', 'ях'],
            prefixEndings: [],
        },
        {
            ending: 'ый',
            arrayCaseEndings: ["ого", "ому", "%", "ым", "ом"],
            prefixEndings: [],
        },
        {
            ending: 'й',
            arrayCaseEndings: ["я", "ю", "я", "ем", "е"],
            prefixEndings: [],
        },
        {
            ending: 'о',
            arrayCaseEndings: ["а", "у", "%", "ом", "е"],
            prefixEndings: [],
        },
        {
            ending: 'с/ш',
            arrayCaseEndings: ["%а", "%у", "%", "%ом", "%е"],
            prefixEndings: [],
        },
        {
            ending: 'ы',
            arrayCaseEndings: ["ов", "ам", "%", "ами", "ах"],
            prefixEndings: [],
        },
        {
            ending: 'й',
            arrayCaseEndings: ["я", "ю", "я", "ем", "е"],
            prefixEndings: [],
        },
        {
            ending: 'уль',
            arrayCaseEndings: ["ули", "уле", "улю", "улей", "уле"],
            prefixEndings: [],
        },
        {
            ending: 'ь',
            arrayCaseEndings: ["%и", "%и", "%ь", "%ью", "%и"],
            prefixEndings: ['ч', 'ш', 'д', 'т'],
        },
        {
            ending: 'я',
            arrayCaseEndings: ["и", "е", "ю", "ей", "е"],
            prefixEndings: [],
        }
    ];
}