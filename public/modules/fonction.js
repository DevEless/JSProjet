import { boss} from "./instanceboss.js"
import { Guerrier, Mage, Archer} from "./class.js"
import { chosenBoss, nomGuerrier, nomMage, nomArcher } from "../main.js";


// Fonction du choix aléatoir du boss
export function chooseRandomBoss() {
    const randomIndex = Math.floor(Math.random() * 3);

    return boss[randomIndex];
}



//Fonction pour obtenir le nom des héros
export function obtenirNomUtilisateur(classe) {
    const name = prompt(`Veuillez entrer le nom du ${classe} :`);
    return name;
}


//Fonction pour creer un perso niveau vie et attaque
export function createPersonnage() {
    const healthPoints = parsInt(prompt(
        "Entrez le nombre de points de vie à attribuer aux personnages entre 400 et 1000"
    ));
    const attackPoints = parseInt(prompt("Entrez le nombre de points d'attaque à attribuer aux personnages entre 1 et 50 :"));

    if(attackPoints >= 1 && attackPoints <= 51 || healthPoints >= 400 && healthPoints <= 1000 ){
        const guerrier = new Guerrier(nomGuerrier, healthPoints, attackPoints);
        const mage = new Mage(nomMage, healthPoints, attackPoints);
        const archer = new Archer(nomArcher, healthPoints, attackPoints);
        return [guerrier, mage,archer]
    }
    else {
        alert("erreur")
        
    }


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

// fonction pour choisir l'etat
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
    alert(`La vie du boss est de ${chosenBoss.health}.`);
    // if a appliquer 
    personnages.forEach(personnages => {
        alert(`La vie de ${personnages.name} est de ${personnages.health}.`);
    });
}
