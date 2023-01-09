import {
    Boss
} from "./class.js";
import {
    Guerrier
} from "./class.js";
import {
    Mage
} from "./class.js";
import {
    Archer
} from "./class.js";

const Sauron = new Boss("Sauron", 1000, 50);
const Chronos = new Boss("Chronos", 500, 75);
const Lilith = new Boss("Lilith", 250, 100);

const bosses = [Sauron, Chronos, Lilith];

function chooseRandomBoss() {
    const randomIndex = Math.floor(Math.random() * 3);

    return bosses[randomIndex];
}

const chosenBoss = chooseRandomBoss();
alert(`Vous allez affronter le grand ${chosenBoss.name}.`);

alert(`Le sort est cruel, quels sera le nom de vos trois Héros légendaire ?`);

function obtenirNomUtilisateur(classe) {
    const name = prompt(`Veuillez entrer le nom du ${classe} :`);
    return name;
}

const nomGuerrier = obtenirNomUtilisateur("guerrier");
const nomMage = obtenirNomUtilisateur("mage");
const nomArcher = obtenirNomUtilisateur("archer");

function createPersonnage() {
    const healthPoints = +prompt(
        "Entrez le nombre de points de vie à attribuer aux personnages entre 1 et 1000:"
    );
    const attackPoints = +prompt("Entrez le nombre de points d'attaque à attribuer aux personnages :");

    const guerrier = new Guerrier(nomGuerrier, healthPoints, attackPoints);
    const mage = new Mage(nomMage, healthPoints, attackPoints);
    const archer = new Archer(nomArcher, healthPoints, attackPoints);

    return [guerrier, mage, archer];
}

const personnages = createPersonnage();
const [guerrier, mage, archer] = personnages;
console.log(personnages);

function chooseCharacterState(guerrier) {

    alert("1. Mettre le guerrier en mode attaque");
    alert("2. Mettre le guerrier en mode défense");
    alert("3. S'abandonner au boss ultime");


    const choice = prompt("Choisissez votre état : ");


    if (choice === "1") {
        guerrier.attaque();
        } else if (choice === "2") {
        guerrier.defense();
        } else {
            console.log("Veuillez entrer un choix valide");
            this.chooseState2();
    
        }
    }

function chooseCharacterState1(mage) {

    alert("1. Mettre le mage en mode attaque");
    alert("2. Mettre le mage en mode défense");
    alert("3. S'abandonner au boss ultime");


    const choice = prompt("Choisissez votre état : ");


    if (choice === "1") {
        mage.attaque();
        } else if (choice === "2") {
        mage.defense();
        } else {
            console.log("Veuillez entrer un choix valide");
            
    
        }
    }
    


function chooseCharacterState2(archer) {

    alert("1. Mettre l'archer en mode attaque");
    alert("2. Mettre l'archer en mode défense");
    alert("3. S'abandonner au boss ultime");


    const choice = prompt("Choisissez votre état : ");


    if (choice === "1") {
    archer.attaque();
    } else if (choice === "2") {
    archer.defense();
    } else {
        console.log("Veuillez entrer un choix valide");

    }
}

alert("le combat va commencer, tenez vous pret !")
chooseCharacterState(guerrier)
chooseCharacterState1(mage)
chooseCharacterState2(archer)

function attack(personnages, boss) {
    const target = personnages[Math.floor(Math.random() * personnages.length)];
    console.log(`Le boss attaque ${target.name}.`);
    target.health -= boss.attack ;
    if (target.health <= 0) {
        console.log(`${target.name} est tombé au combat.`);

        characters.splice(characters.indexOf(target), 1);
    }
}


function calculateHealth(personnages, boss) {
    console.log(`La vie du boss est de ${boss.health}.`);
    personnages.forEach(personnages => {
        console.log(`La vie de ${personnages.name} est de ${personnages.health}.`);
    });
}


attack(personnages, chosenBoss);
calculateHealth(personnages, chosenBoss);

