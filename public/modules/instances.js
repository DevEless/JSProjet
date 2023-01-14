import {
    Boss
} from "./class.js";
import {
    obtenirNomUtilisateur
} from "./fonction.js"


const Sauron = new Boss("Sauron", 350, 50);
const Chronos = new Boss("Chronos", 350, 50);
const Lilith = new Boss("Lilith", 350, 50);
export const boss = [Sauron, Chronos, Lilith];

export const nomGuerrier = obtenirNomUtilisateur("guerrier");
export const nomMage = obtenirNomUtilisateur("mage");
export const nomArcher = obtenirNomUtilisateur("archer");




