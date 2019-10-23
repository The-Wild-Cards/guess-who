import { getUser } from '../common/utils.js';
let user = getUser();
export const featureArray = [{
    id: 'nose',
    description: ` Nose?    `,
    yesMessage: `They know your scent now ${user.name}, your alien has a nose!`,
    noMessage: `No nose on this alien, ${user.name}!`
}, {
    id: 'horns',
    description: `Horns?`,
    yesMessage: `This alien does have horns! Nice guess ${user.name}!`,
    noMessage: `${user.name}, there are no horns.`
}, {
    id: 'hat',
    description: `Hat?`,
    yesMessage: `Maybe it's cold where they come from, since they have a hat on ${user.name}.`,
    noMessage: `This alien is not wearing a hat today ${user.name}.`
}, {
    id: 'hair',
    description: `Hair?`,
    yesMessage: `This alien has amazing hair ${user.name}!`,
    noMessage: `It is an alien with no hair ${user.name}.`
}, {
    id: 'fin',
    description: ` Fin? `,
    yesMessage: `Yes ${user.name}, this alien can probably swim with its fin.`,
    noMessage: `This alien hates water, cuz they can't swim with no fin.`
}, {
    id: 'oneEye',
    description: `One Eye?`,
    yesMessage: `They might only have one-eye, but they can see into your soul ${user.name}.`,
    noMessage: `${user.name}, this is not one of those freaky 1 eye aliens!`
}, {
    id: 'twoEyes',
    description: `2-Eyes?`,
    yesMessage: `${user.name}, this alien could pass for human since they have 2 eyes!`,
    noMessage: `${user.name}, this alien has more or less than 2 eyes! It must be scary looking.`
}, {
    id: 'threeEyes',
    description: `Three Eyes?`,
    yesMessage: `${user.name}, have you ever seen a three eye alien? You will...`,
    noMessage: `This one has less or more than 3 eyes.`
}, {
    id: 'fourEyes',
    description: `Four Eyes?`,
    yesMessage: `${user.name}, this cute alien does have 4 eyes!`,
    noMessage: `${user.name}, this alien has less than four eyes.`
}, {
    id: 'spots',
    description: `Spots?`,
    yesMessage: `Maybe it's contagious, maybe it's not, but this alien has spots!`,
    noMessage: `They do not have any spots ${user.name}.`
}, {
    id: 'ears',
    description: `Ears?`,
    yesMessage: `Shhhh.... they can hear you ${user.name}! This alien has ears!`,
    noMessage: `${user.name} they can't hear you...`
}];

