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

function createGuerrier() {
    let index = 1000;
    let guerrier = new Guerrier();
    guerrier.attack = parseInt(prompt(`Entrez une valeur entre 1 et ${index} pour l'attaque du guerrier`));
    return guerrier;
}

function createMage() {
    let index2 = 1000 - guerrier.attack;
    let mage = new Mage();
    mage.attack = parseInt(prompt(`Entrez une valeur entre 1 et ${index2} pour l'attaque du mage`));
    return mage;
}

function createArcher() {
    let index3 = 1000 - guerrier.attack - mage.attack;
    let archer = new Archer();
    archer.health = parseInt(prompt(`Entrez une valeur entre 1 et ${index3} pour la santé de l'archer`));
    return archer;
}


function health() {
    let index = 1000;
    let guerrier = new Guerrier();
    guerrier.health = parseInt(prompt(`Entrez une valeur entre 1 et ${index} pour la santé du guerrier`));
    let index2 = index - guerrier.health;
    let mage = new Mage();
    mage.health = parseInt(prompt(`Entrez une valeur entre 1 et ${index2} pour la santé du mage`));
    let calcul = index2 - mage.health;
    let index3 = index - calcul;
    let archer = new Archer();
    archer.health = parseInt(prompt(`Entrez une valeur entre 1 et ${index3} pour la santé de l'archer`));
}

createGuerrier() 
createMage()
createArcher()
attack()
const Hero1 = new Guerrier(`${nomGuerrier}`, attack())
console.log(Hero1)