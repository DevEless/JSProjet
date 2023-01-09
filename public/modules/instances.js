import {
    Boss
} from "./class.js"

import {
    Guerrier
} from "./class.js"

import {
    Mage
} from "./class.js"

import {
    Archer
} from "./class.js"
const Sauron = new Boss('Sauron', 1000, 50);
const Chronos = new Boss('Chronos', 500, 75);
const Lilith = new Boss('Lilith', 250, 100);

const bosses = [Sauron, Chronos, Lilith];

function chooseRandomBoss() {

    const randomIndex = Math.floor(Math.random() * 3);


    return bosses[randomIndex];
}

const chosenBoss = chooseRandomBoss();
alert(`Vous allez affronter le grand  ${chosenBoss.name}.`);

alert(`Le sort est cruel, quels sera le nom de vos trois Héros légendaire ?`)



function chooseHero() {
    const heroClass = prompt('Choisissez votre classe de héros: Guerrier, Mage ou Archer');
    const nom = prompt('Choisissez le nom de votre héros');

    switch (heroClass) {
        case 'Guerrier':
            return new Guerrier(nom);
        case 'Mage':
            return new Mage(nom);
        case 'Archer':
            return new Archer(nom);
        default:
            throw new Error(`Classe de héros inconnue: ${heroClass}`);
    }
}

function chooseHeroes() {
    const heroes = [];

    for (let i = 1; i <= 3; i++) {
        const hero = chooseHero();
        heroes.push(hero);
    }

    return heroes;
}

const heroes = chooseHeroes();
console.log(`Vos héros sont ${heroes[0].nom} de la classe ${heroes[0].constructor.name}, ${heroes[1].nom} de la classe ${heroes[1].constructor.name} et ${heroes[2].nom} de la classe ${heroes[2].constructor.name}.`);