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
    const nom = prompt(`Veuillez entrer le nom du ${classe} :`);
    return nom;
}

const nomGuerrier = obtenirNomUtilisateur("guerrier");
const nomMage = obtenirNomUtilisateur("mage");
const nomArcher = obtenirNomUtilisateur("archer");

function createPersonnage() {
    const healthPoints = prompt(
        "Entrez le nombre de points de vie à attribuer aux personnages entre 1 et 1000:"
    );
    const attackPoints = prompt("Entrez le nombre de points d'attaque à attribuer aux personnages :");

    const guerrier = new Guerrier(nomGuerrier, healthPoints, attackPoints);
    const mage = new Mage(nomMage, healthPoints, attackPoints);
    const archer = new Archer(nomArcher, healthPoints, attackPoints);

    return [guerrier, mage, archer];
}

const personnages = createPersonnage();
const [guerrier, mage, archer] = personnages;
console.log(guerrier, mage, archer);


function chooseCharacterState(guerrier) {

    alert("1. Mettre le guerrier en mode attaque");
    alert("2. Mettre le guerrier en mode défense");
    alert("3. S'abandonner au boss ultime");


    const choice = prompt("Choisissez votre état : ");


    if (choice === "1") {
        guerrier.state = guerrier.attaque();
    } else if (choice === "2") {
        guerrier.state = guerrier.defense();
        this.state = "Normal";
    } else {
        console.log("Veuillez entrer un choix valide");
        this.chooseState();
    
}
}
function chooseCharacterState(mage) {

    alert("1. Mettre le mage en mode attaque");
    alert("2. Mettre le mage en mode défense");
    alert("3. S'abandonner au boss ultime");


    const choice = prompt("Choisissez votre état : ");


    if (choice === "1") {
        mage.state = mage.attaque();
    } else if (choice === "2") {
        mage.state = mage.defense();
        this.state = "Normal";
    } else {
        console.log("Veuillez entrer un choix valide");
        this.chooseState();
    
}
}
function chooseCharacterState(archer) {

    alert("1. Mettre l'archer en mode attaque");
    alert("2. Mettre l'archer en mode défense");
    alert("3. S'abandonner au boss ultime");


    const choice = prompt("Choisissez votre état : ");


    if (choice === "1") {
        archer.state = archer.attaque();
    } else if (choice === "2") {
        archer.state = archer.defense();
        this.state = "Normal";
    } else {
        console.log("Veuillez entrer un choix valide");
        this.chooseState();
    
}
}

alert("le combat va commencer, tenez vous pret !")
chooseCharacterState(guerrier)
chooseCharacterState(mage)
chooseCharacterState(archer)