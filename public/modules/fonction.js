import { boss} from "./instances.js"
import { Guerrier, Mage, Archer} from "./class.js"
import { chosenBoss } from "../main.js";


// Fonction du choix aléatoir du boss
export function chooseRandomBoss() {
    const randomIndex = Math.floor(Math.random() * 3);

    return boss[randomIndex];
}



//Fonction pour obtenir le nom des héros
function obtenirNomUtilisateur(classe) {
    const name = prompt(`Veuillez entrer le nom du ${classe} :`);
    return name;
}
const nomGuerrier = obtenirNomUtilisateur("guerrier");
const nomMage = obtenirNomUtilisateur("mage");
const nomArcher = obtenirNomUtilisateur("archer");

//Fonction pour creer un perso niveau vie et attaque
export function createPersonnage() {
    const healthPoints = prompt(
        "Entrez le nombre de points de vie à attribuer aux personnages entre 400 et 1000"
    );
    const attackPoints = prompt("Entrez le nombre de points d'attaque à attribuer aux personnages entre 1 et 50 :");

    const guerrier = new Guerrier(nomGuerrier, healthPoints, attackPoints);
    const mage = new Mage(nomMage, healthPoints, attackPoints);
    const archer = new Archer(nomArcher, healthPoints, attackPoints);
    return [guerrier, mage,archer]
}




//fonction pour choisir l'etat
export function chooseCharacterState(guerrier) {

    alert("1. Mettre le guerrier en mode attaque");
    alert("2. Mettre le guerrier en mode défense");
    alert("3. S'abandonner au boss ultime");


    const choice = prompt("Choisissez votre état : ");


    if (choice === "1") {
        guerrier.attaque(chooseRandomBoss);
        } else if (choice === "2") {
        guerrier.defense();
        } else {
            console.log("Veuillez entrer un choix valide");
            this.chooseState2();
    
        }
    }

export function chooseCharacterState1(mage) {

    alert("1. Mettre le mage en mode attaque");
    alert("2. Mettre le mage en mode défense");
    alert("3. S'abandonner au boss ultime");


    const choice = prompt("Choisissez votre état : ");


    if (choice === "1") {
        mage.attaque(chooseRandomBoss);
        } else if (choice === "2") {
        mage.defense();
        } else {
            console.log("Veuillez entrer un choix valide");
            
    
        }
    }
    


export function chooseCharacterState2(archer) {

    alert("1. Mettre l'archer en mode attaque");
    alert("2. Mettre l'archer en mode défense");
    alert("3. S'abandonner au boss ultime");


    const choice = prompt("Choisissez votre état : ");


    if (choice === "1") {
    archer.attaque(chooseRandomBoss);
    } else if (choice === "2") {
    archer.defense();
    } else {
        console.log("Veuillez entrer un choix valide");

    }
}


export function attack(personnages, boss) {
    const target = personnages[Math.floor(Math.random() * personnages.length)];
    console.log(`Le boss attaque ${target.name}.`);
    target.health -= boss.attack ;
    if (target.health <= 0) {
        console.log(`${target.name} est tombé au combat.`);

        personnages.splice(personnages.indexOf(target), 1);
    }
}


export function calculateHealth(personnages, boss) {
    console.log(`La vie du boss est de ${chosenBoss.health}.`);
    // if a appliquer 
    personnages.forEach(personnages => {
        console.log(`La vie de ${personnages.name} est de ${personnages.health}.`);
    });
}


    const choice = prompt("Choisissez votre état : ");


    if (choice === "1") {
        mage.attaque(chooseRandomBoss);
        } else if (choice === "2") {
        mage.defense();
        } else {
            console.log("Veuillez entrer un choix valide");
            
    
        }
    


