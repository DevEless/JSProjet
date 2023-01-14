// IMPORT //
import {
calculateHealth , attack, createPersonnage, chooseRandomBoss, chooseCharacterState, chooseCharacterState1 ,obtenirNomUtilisateur, chooseCharacterState2 
} from "./modules/fonction.js"
import { boss} from "./modules/instanceboss.js"

//APPEL POUR CHOISIR UN BOSS ALEATOIR//

export const chosenBoss = chooseRandomBoss()

alert(`Vous allez affronter le grand ${chosenBoss.name}.`);
alert(`Le sort est cruel, quels sera le nom de vos trois Héros légendaire ?`);

//APPEL DE LA FONCTION CREATION DE PERSONNAGE//
export const nomGuerrier = obtenirNomUtilisateur("guerrier");
export const nomMage = obtenirNomUtilisateur("mage");
export const nomArcher = obtenirNomUtilisateur("archer");
const personnages = createPersonnage()
const [guerrier, mage, archer] = personnages
console.log(personnages)
alert("le combat va commencer, tenez vous pret !")

//DEBUT DU TOUR//
chooseCharacterState(guerrier)
chooseCharacterState1(mage)
chooseCharacterState2(archer)

//BOUCLE QUI EMPECHE D'ATATQUER QUAND LA VIE EST A 0//
while (chosenBoss.health > 0 && (personnages[0].health > 0 || personnages[1].health > 0 || personnages[2].health > 0) ){
    if (personnages[0].health > 0 ) {
        personnages[0].attaque(chosenBoss)
    }
    chosenBoss.proposeEnigme(personnages)
    calculateHealth(personnages, boss)
    chooseCharacterState(guerrier)
    if (personnages[1].health > 0 ) {
        personnages[1].attaque(chosenBoss)
    }
    chosenBoss.proposeEnigme(personnages)
    calculateHealth(personnages, boss)
    chooseCharacterState1(mage)
    if (personnages[2].health > 0 ) {
        personnages[2].attaque(chosenBoss)
    } 
    chosenBoss.proposeEnigme(personnages)
    calculateHealth(personnages, boss)
    chooseCharacterState2(archer)
    if(chosenBoss.health > 0)
    {
        attack(personnages, chosenBoss)
    }
    }
