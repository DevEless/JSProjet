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

const guerrier = new Guerrier(nomGuerrier);
const mage = new Mage(nomMage);
const archer = new Archer(nomArcher);

const listePersonnages = [guerrier, mage, archer];

function attack() {
    let index = 100
    let heros1 = new Guerrier(attack)
    heros1.attack = prompt(`entrez une valeur entre 1 et ${index}`)
    let index2 = index - heros1.attack  
    let heros2 = new Mage(attack)
    heros2.attack = prompt(`entrez une valeur entre 1 et ${index2}`)
    let calcul = index2 - heros2.attack
    let index3 = index - calcul
    let heros3 = new Archer(attack) 
    heros3.attack = prompt(`entrez une valeur entre 1 et ${index3}`)

}
attack()