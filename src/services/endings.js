export const cases = {
    rCase: 0,
    dCase: 1,
    vCase: 2,
    tCase: 3,
    pCase: 4,
};

export const endings = [
    {
        ending: 'а',
        arrayCaseEndings: ['ы', 'е', 'у', 'ой', 'е'],
        prefixEndings: ['ш', 'ж', 'к', 'ч'],
        exc: ['%и', '%е', '%у', '%ой', '%е'],
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
        arrayCaseEndings: ['ого', 'ому', '%', 'ым', 'ом'],
        prefixEndings: [],
    },
    {
        ending: 'й',
        arrayCaseEndings: ['я', 'ю', 'я', 'ем', 'е'],
        prefixEndings: [],
    },
    {
        ending: 'о',
        arrayCaseEndings: ['а', 'у', '%', 'ом', 'е'],
        prefixEndings: [],
    },
    {
        ending: 'с/ш',
        arrayCaseEndings: ['%а', '%у', '%', '%ом', '%е'],
        prefixEndings: [],
    },
    {
        ending: 'ы',
        arrayCaseEndings: ['ов', 'ам', '%', 'ами', 'ах'],
        prefixEndings: [],
    },
    {
        ending: 'ь',
        arrayCaseEndings: ['я', 'ю', 'я', 'ем', 'е'],
        prefixEndings: ['ч', 'ш', 'д', 'т'],
        exc: ['%и', '%и', '%ь', '%ью', '%и'],
    },
    {
        ending: 'уль',
        arrayCaseEndings: ['ули', 'уле', 'улю', 'улей', 'уле'],
        prefixEndings: [],
    },
    {
        ending: 'я',
        arrayCaseEndings: ['и', 'е', 'ю', 'ей', 'е'],
        prefixEndings: [],
    }
];