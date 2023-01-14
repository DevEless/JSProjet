import {
chosenBoss , calculateHealth , attack , personnages
} from "./fonction.js"

chooseRandomBoss()
const chosenBoss = chooseRandomBoss();
alert(`Vous allez affronter le grand ${chosenBoss.name}.`);

alert(`Le sort est cruel, quels sera le nom de vos trois Héros légendaire ?`);

console.log(personnages);


while (chosenBoss.health > 0 && (personnages[0].health > 0 || personnages[1].health > 0 || personnages[2].health > 0) ){
    if (personnages[0].health > 0 ) {
        personnages[0].attaque(chosenBoss)
    }
    chosenBoss.proposeEnigme(personnages)
    calculateHealth(personnages, boss)
    if (personnages[1].health > 0 ) {
        personnages[1].attaque(chosenBoss)
    }
    chosenBoss.proposeEnigme(personnages)
    calculateHealth(personnages, boss)
    if (personnages[2].health > 0 ) {
        personnages[2].attaque(chosenBoss)
    } 
    chosenBoss.proposeEnigme(personnages)
    calculateHealth(personnages, boss)
    if(chosenBoss.health > 0)
    {
        attack(personnages, chosenBoss)
    }
    }
