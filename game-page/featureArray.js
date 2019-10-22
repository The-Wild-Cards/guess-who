import { getUser } from '../common/utils.js';
let user = getUser();
export const featureArray = [{
    id: 'nose',
    description: ` Nose?    `,
    yesMessage: `They know your scent now ${user}, your alien has a nose!`,
    noMessage: `No nose on this alien, ${user}! Click the highlighted aliens.`
}, {
    id: 'horns',
    description: `Horns?`,
    yesMessage: `This alien does have horns! Nice ${user}!`,
    noMessage: `${user}, there are no horns, click highlighted alien.`
}, {
    id: 'hat',
    description: `Hat?`,
    yesMessage: `Maybe it's cold where they come from, since they have a hat on ${user}.`,
    noMessage: `This alien is not wearing a hat today ${user}, click the higlighted alien.`
}, {
    id: 'hair',
    description: `Hair?`,
    yesMessage: `This alien has amazing hair ${user}!`,
    noMessage: `It is an alien with no hair ${user}, click the highlighted alien's.`
}, {
    id: 'fin',
    description: ` Fin? `,
    yesMessage: `Yes ${user} this alien can probably swim with its fin.`,
    noMessage: `This alien hates water, cuz he can't swim with no fin, click the highlighted alien's.`
}, {
    id: 'oneEye',
    description: `One Eye?`,
    yesMessage: `They might only have one-eye, but they can see your into your soul ${user}.`,
    noMessage: `Click the highlighted alien's ${user}, this is not one of those freaky 1 eye aliens!`
}, {
    id: 'twoEye',
    description: `2-Eyes?`,
    yesMessage: `${user}, this alien could pass for human since they have 2 eyes!`,
    noMessage: `${user}, this alien has less or less eyes! It must be scary looking, click the hightlighted alien's.`
}, {
    id: 'threeEye',
    description: `Three Eyes?`,
    yesMessage: `${user}, have you ever seen a three eye alien? You will...`,
    noMessage: `Click the highlighted alien's this one has less or more than 3 eyes.`
}, {
    id: 'fourEyes',
    description: `Four Eyes?`,
    yesMessage: `${user}, this creepy-cute alien does have 4 eyes!`,
    noMessage: `${user}, this alien has less than four eyes, click the highlighted alien's.`
}, {
    id: 'spots',
    description: `Spots?`,
    yesMessage: `Maybe it's contagious, maybe it's not, but this alien has spots!`,
    noMessage: `They do not have any spots ${user}, click the highlighted alien's.`
}, {
    id: 'ears',
    description: `Ears?`,
    yesMessage: `Shhhh.... they can hear you ${user}! This alien has ears!`,
    noMessage: `${user} they can't hear you.... click on the highlighted alien's.`
}];

