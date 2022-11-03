const testRegex = (re, include) => re.test(include);
const isValid = (value) => testRegex(/^((?!(http|www)).)*$/, value);
const logSpam = (value) =>
    console.log((isValid(value) ? "VALID: " : "SPAM: ") + value);

const comments = {
    john: `Hi there, my name is John and I'm very proud of my business.`,
    chris: `Hola, you know my new website: https://chris.com, please visit...`,
    hans: `Ich bin Hans, aber ich bin nicht ein Spammer. Das heißt, Ich schicke Ihnen keine website links.`,
    wouter: `Solliciteer nu op www.eforah.nl`,
};

Object.values(comments).forEach((comment) => logSpam(comment));
