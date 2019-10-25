import { getUser } from '../common/utils.js';
let user = getUser();
export const featureArray = [{
    id: 'nose',
    description: `Nose?`,
    yesMessage: `They know your scent now ${user.name}. Your alien has a nose!`,
    noMessage: `No nose on this alien, ${user.name}!`
}, {
    id: 'horns',
    description: `Horns?`,
    yesMessage: `This alien does have horns! Nice guess, ${user.name}!`,
    noMessage: `${user.name}, there are no horns on this alien.`
}, {
    id: 'hat',
    description: `Hat?`,
    yesMessage: `Maybe it's cold where they come from, because this alien has a hat on, ${user.name}!`,
    noMessage: `This alien is not wearing a hat today, ${user.name}.`
}, {
    id: 'hair',
    description: `Hair?`,
    yesMessage: `This alien has amazing hair, ${user.name}!`,
    noMessage: `You're looking for an alien with no hair, ${user.name}.`
}, {
    id: 'fin',
    description: ` Fin? `,
    yesMessage: `Yes, ${user.name}, this alien can probably swim with its fin!`,
    noMessage: `This alien hates water, cuz they can't swim with no fin!`
}, {
    id: 'oneEye',
    description: `One Eye?`,
    yesMessage: `They might only have one eye, but they can see into your soul, ${user.name}...`,
    noMessage: `Nope, ${user.name}, this is not one of those freaky one-eyed aliens!`
}, {
    id: 'twoEyes',
    description: `Two Eyes?`,
    yesMessage: `${user.name}, this alien could pass for human since they have two eyes!`,
    noMessage: `${user.name}, this alien does not have two eyes! It must be scary-looking.`

}, {
    id: 'threeEyes',
    description: `Three Eyes?`,
    yesMessage: `${user.name}, have you ever seen a three-eyed alien? You're about to, because the alien you are looking for has three eyes!`,
    noMessage: `This alien does not have three eyes.`
}, {
    id: 'fourEyes',
    description: `Four Eyes?`,
    yesMessage: `${user.name}, this cute alien does have four eyes!`,
    noMessage: `${user.name}, this alien has fewer than four eyes.`
}, {
    id: 'spots',
    description: `Spots?`,
    yesMessage: `Maybe it's contagious, maybe it's not, but this alien has spots!`,
    noMessage: `This alien does not have any spots, ${user.name}.`
}, {
    id: 'ears',
    description: `Ears?`,
    yesMessage: `Shhhh.... they can hear you, ${user.name}! This alien has ears!`,
    noMessage: `${user.name}, they can't hear you... No ears on this alien!`
}];

