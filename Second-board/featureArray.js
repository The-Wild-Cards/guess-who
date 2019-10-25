import { getUser } from '../common/utils.js';
let user = getUser();
export const featureArray2 = [{
    id: 'scarf',
    description: `Scarf?`,
    yesMessage: `That's right, ${user.name}, the mystery person is wearing a scarf!`,
    noMessage: `Nope, ${user.name}, the mystery person is not wearing a scarf.`
}, {
    id: 'hat',
    description: `Hat?`,
    yesMessage: `That's right, ${user.name}, the mystery person is wearing a hat!`,
    noMessage: `Nope, ${user.name}, the mystery person is not wearing a hat.`
}, {
    id: 'redhair',
    description: `Red/Pink Hair?`,
    yesMessage: `That's right, ${user.name}, the mystery person has red or pink hair!`,
    noMessage: `Nope, ${user.name}, the mystery person does not have red or pink hair.`
}, {
    id: 'brownhair',
    description: `Brown Hair?`,
    yesMessage: `That's right, ${user.name}, the mystery person has brown hair!`,
    noMessage: `Nope, ${user.name}, the mystery person does not have brown hair.`
}, {
    id: 'blackhair',
    description: `Black Hair?`,
    yesMessage: `That's right, ${user.name}, the mystery person has black hair!`,
    noMessage: `Nope, ${user.name}, the mystery person does not have black hair.`
}, {
    id: 'bald',
    description: `Bald/Balding?`,
    yesMessage: `That's right, ${user.name}, the mystery person is bald/balding!`,
    noMessage: `Nope, ${user.name}, the mystery person is not bald/balding.`
}, {
    id: 'tie',
    description: `Tie?`,
    yesMessage: `That's right, ${user.name}, the mystery person is wearing a tie!`,
    noMessage: `Nope, ${user.name}, the mystery person is not wearing a tie.` 
}, {
    id: 'glasses',
    description: `Glasses?`,
    yesMessage: `That's right, ${user.name}, the mystery person is wearing glasses!`,
    noMessage: `Nope, ${user.name}, the mystery person is not wearing glasses.`
}, {
    id: 'freckles',
    description: `Freckles?`,
    yesMessage: `That's right, ${user.name}, the mystery person has freckles!`,
    noMessage: `Nope, ${user.name}, the mystery person does not have freckles.`
}, {
    id: 'earrings',
    description: `Earrings?`,
    yesMessage: `Yes ${user.name}, they do have earrings on.`,
    noMessage: `${user.name}, they are not wearing earrings.`
}];

