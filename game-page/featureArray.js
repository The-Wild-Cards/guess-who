import { getUser } from '../common/utils.js';
let user = getUser();
export const featureArray = [{
    id: 'nose',
<<<<<<< HEAD
    description: `Nose?`,
    yesMessage: `They know your scent now ${user}, your alien has a nose!`,
    noMessage: `No nose on this alien, ${user}! Click the highlighted aliens.`
}, {
    id: 'horns',
    description: `Horns?`,
    yesMessage: `This alien does have horns! Nice, ${user}!`,
    noMessage: `${user}, there are no horns, click the highlighted aliens.`
}, {
    id: 'hat',
    description: `Hat?`,
    yesMessage: `Maybe it's cold where they come from, since they have a hat on ${user}.`,
    noMessage: `This alien is not wearing a hat today, ${user}, click the higlighted alien.`
}, {
    id: 'hair',
    description: `Hair?`,
    yesMessage: `This alien has amazing hair ${user}!`,
    noMessage: `It is an alien with no hair, ${user}, click the highlighted aliens.`
}, {
    id: 'fin',
    description: ` Fin? `,
    yesMessage: `Yes, ${user}, this alien can probably swim with its fin.`,
    noMessage: `This alien hates water, cuz he can't swim with no fin. Click the highlighted aliens.`
}, {
    id: 'oneEye',
    description: `One Eye?`,
    yesMessage: `They might only have one eye, but they can see into your soul, ${user}.`,
    noMessage: `Click the highlighted aliens, ${user}. This is not one of those freaky one-eyed aliens!`
}, {
    id: 'twoEye',
    description: `Two Eyes?`,
    yesMessage: `${user}, this alien could pass for human since they have two eyes!`,
    noMessage: `${user}, this alien does not have two eyes! It must be scary looking. Click the hightlighted aliens.`
=======
    description: ` Nose?    `,
    yesMessage: `They know your scent now ${user.name}, your alien has a nose!`,
    noMessage: `No nose on this alien, ${user.name}!`
}, {
    id: 'horns',
    description: `Horns?`,
    yesMessage: `This alien does have horns! Nice ${user.name}!`,
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
    yesMessage: `Yes ${user.name} this alien can probably swim with its fin.`,
    noMessage: `This alien hates water, cuz he can't swim with no fin.`
}, {
    id: 'oneEye',
    description: `One Eye?`,
    yesMessage: `They might only have one-eye, but they can see your into your soul ${user.name}.`,
    noMessage: `${user.name}, this is not one of those freaky 1 eye aliens!`
}, {
    id: 'twoEyes',
    description: `2-Eyes?`,
    yesMessage: `${user.name}, this alien could pass for human since they have 2 eyes!`,
    noMessage: `${user.name}, this alien has less or more eyes! It must be scary looking.`
>>>>>>> 858d64bb3b6e727c582c2521910b626cdf3b0f5b
}, {
    id: 'threeEyes',
    description: `Three Eyes?`,
<<<<<<< HEAD
    yesMessage: `${user}, have you ever seen a three-eyed alien? You will...`,
    noMessage: `Click the highlighted aliens. This one does not have three eyes.`
}, {
    id: 'fourEyes',
    description: `Four Eyes?`,
    yesMessage: `${user}, this creepy-cute alien does have four eyes!`,
    noMessage: `${user}, this alien has fewer than four eyes. Click the highlighted aliens.`
=======
    yesMessage: `${user.name}, have you ever seen a three eye alien? You will...`,
    noMessage: `This one has less or more than 3 eyes.`
}, {
    id: 'fourEyes',
    description: `Four Eyes?`,
    yesMessage: `${user.name}, this creepy-cute alien does have 4 eyes!`,
    noMessage: `${user.name}, this alien has less than four eyes.`
>>>>>>> 858d64bb3b6e727c582c2521910b626cdf3b0f5b
}, {
    id: 'spots',
    description: `Spots?`,
    yesMessage: `Maybe it's contagious, maybe it's not, but this alien has spots!`,
<<<<<<< HEAD
    noMessage: `They do not have any spots, ${user}, click the highlighted aliens.`
}, {
    id: 'ears',
    description: `Ears?`,
    yesMessage: `Shhhh.... they can hear you, ${user}! This alien has ears!`,
    noMessage: `${user}, they can't hear you.... click on the highlighted aliens.`
=======
    noMessage: `They do not have any spots ${user.name}.`
}, {
    id: 'ears',
    description: `Ears?`,
    yesMessage: `Shhhh.... they can hear you ${user.name}! This alien has ears!`,
    noMessage: `${user.name} they can't hear you...`
>>>>>>> 858d64bb3b6e727c582c2521910b626cdf3b0f5b
}];

