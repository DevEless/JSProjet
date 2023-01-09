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


function obtenirNomUtilisateur(classe) {
    const nom = prompt(`Veuillez entrer le nom du ${classe} :`);
    return nom;
}

const nomGuerrier = obtenirNomUtilisateur('guerrier');
const nomMage = obtenirNomUtilisateur('mage');
const nomArcher = obtenirNomUtilisateur('archer');


function createPersonnage() {
    const healthPoints = prompt("Entrez le nombre de points de vie à attribuer aux personnages entre 1 et 1000:");
    const attackPoints = prompt("Entrez le nombre de points d'attaque à attribuer aux personnages :");

    const guerrier = new Guerrier(nomGuerrier, healthPoints, attackPoints);
    const mage = new Mage(nomMage, healthPoints, attackPoints);
    const archer = new Archer(nomArcher, healthPoints, attackPoints);

    return [guerrier, mage, archer];
}

const personnages = createPersonnage();
const [guerrier, mage, archer] = personnages;
console.log(guerrier, mage, archer)

