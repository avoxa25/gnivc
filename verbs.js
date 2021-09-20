// const infinitiveSuffixes = [`ть`, `ти`, `чь`];

const firstConjugationSuffixes = [`ать`, `оть`, `уть`, `ть`];
const firstConjugationEndings = [`у/ю`, `ешь`, `ет`, `ем`, `ете`, `ут/ют`];
const firstConjugationExceptions = [`стелить`, `брить`, `зиждиться`, `носить`];

const secondConjugationEndings = [`у/ю`, `ишь`, `ит`, `им`, `ите`, `ат/ят`];
const secondConjugationExceptions = [`вертеть`, `видеть`, `зависеть`, `ненавидеть`, `обидеть`, `терпеть`, `гнать`, `дышать`, `держать`, `слышать`];
// TO DO: Add more exceptions

function conjugateVerb(verb, pronoun) {
    let conjugationType = 2;

    if ((firstConjugationExceptions.includes(verb) || secondConjugationExceptions.includes(verb)) && pronoun === `я`) return exceptionVerb(verb);
    
    if ((verb.includes(`еть`) || verb.includes(`ать`) || verb.includes(`оть`) || verb.includes(`уть`)) && !secondConjugationExceptions.includes(verb)) conjugationType = 1;

    return addEnding(verb, conjugationType, pronoun);
}

function addEnding(verb, type, pronoun) {
    let conjugationEndings = type === 1? firstConjugationEndings: secondConjugationEndings;
    verb = verb.slice(0, verb.length - 2);
    //TO DO: Logic to right ending slicing (2 or 3 letters of ending, suffixes ...)

    switch(pronoun) {
        case `я`:
            return verb + conjugationEndings[0];
        case `ты`:
            return verb + conjugationEndings[1];
        case `он`:
            return verb + conjugationEndings[2];
        case `она`:
            return verb + conjugationEndings[2];
        case `мы`:
            return verb + conjugationEndings[3];
        case `вы`:
            return verb + conjugationEndings[4];
        case `они`:
            return verb + conjugationEndings[5];
    }

    //TO DO Something else
}

function exceptionVerb(verb) {
    switch(verb) {
        case `стелить`:
            return `стелю`
        case `брить`:
            return `брею`
        case `зиждиться`:
            return `зиждюсь`
        case `носить`:
            return `ношу`
        case `вертеть`:
            return `верчу`
        case `видеть`:
            return `вижу`
        case `зависеть`:
            return `завишу`
        case `ненавидеть`:
            return `ненавижу`
        case `обидеть`:
            return `обижаю`
        case `терпеть`:
            return `терплю`
        case `гнать`:
            return `гоню`
        case `дышать`:
            return `дышу`
        case `держать`:
            return `держу`
        case `слышать`:
            return `слышу`
    }
    //TO DO: refactor and add another pronouns (?)
}

console.log(conjugateVerb(`читать`, `я`));
console.log(conjugateVerb(`читать`, `ты`));
console.log(conjugateVerb(`читать`, `он`));
console.log(conjugateVerb(`читать`, `она`));
console.log(conjugateVerb(`читать`, `мы`));
console.log(conjugateVerb(`читать`, `вы`));
console.log(conjugateVerb(`читать`, `они`));
console.log(conjugateVerb(`прыгать`, `я`));
console.log(conjugateVerb(`прыгать`, `ты`));
console.log(conjugateVerb(`прыгать`, `он`));
console.log(conjugateVerb(`прыгать`, `она`));
console.log(conjugateVerb(`прыгать`, `мы`));
console.log(conjugateVerb(`прыгать`, `вы`));
console.log(conjugateVerb(`прыгать`, `они`));
console.log(conjugateVerb(`видеть`, `я`));
console.log(conjugateVerb(`видеть`, `ты`));
console.log(conjugateVerb(`видеть`, `он`));
console.log(conjugateVerb(`видеть`, `она`));
console.log(conjugateVerb(`видеть`, `мы`));
console.log(conjugateVerb(`видеть`, `вы`));
console.log(conjugateVerb(`видеть`, `они`));
console.log(conjugateVerb(`преобразовывать`, `я`));
console.log(conjugateVerb(`преобразовывать`, `ты`));
console.log(conjugateVerb(`преобразовывать`, `он`));
console.log(conjugateVerb(`преобразовывать`, `она`));
console.log(conjugateVerb(`преобразовывать`, `мы`));
console.log(conjugateVerb(`преобразовывать`, `вы`));
console.log(conjugateVerb(`преобразовывать`, `они`));
console.log(conjugateVerb(`любить`, `я`));
console.log(conjugateVerb(`любить`, `ты`));
console.log(conjugateVerb(`любить`, `он`));
console.log(conjugateVerb(`любить`, `она`));
console.log(conjugateVerb(`любить`, `мы`));
console.log(conjugateVerb(`любить`, `вы`));
console.log(conjugateVerb(`любить`, `они`));