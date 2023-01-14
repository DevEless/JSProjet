
import {
calculateHealth , attack, createPersonnage, chooseRandomBoss, chooseCharacterState, chooseCharacterState1 ,obtenirNomUtilisateur, chooseCharacterState2 
} from "./modules/fonction.js"
import { boss} from "./modules/instances.js"


export const chosenBoss = chooseRandomBoss()

alert(`Vous allez affronter le grand ${chosenBoss.name}.`);
alert(`Le sort est cruel, quels sera le nom de vos trois Héros légendaire ?`);
export const nomGuerrier = obtenirNomUtilisateur("guerrier");
export const nomMage = obtenirNomUtilisateur("mage");
export const nomArcher = obtenirNomUtilisateur("archer");
const personnages = createPersonnage()
const [guerrier, mage, archer] = personnages
console.log(personnages)
alert("le combat va commencer, tenez vous pret !")

chooseCharacterState(guerrier)
chooseCharacterState1(mage)
chooseCharacterState2(archer)


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
