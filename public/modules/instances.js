import {
    Boss
} from "./class.js";
import {
    obtenirNomUtilisateur
} from "./fonction.js"


export const Sauron = new Boss("Sauron", 350, 50);
export const Chronos = new Boss("Chronos", 350, 50);
export const Lilith = new Boss("Lilith", 350, 50);


export const nomGuerrier = obtenirNomUtilisateur("guerrier");
export const nomMage = obtenirNomUtilisateur("mage");
export const nomArcher = obtenirNomUtilisateur("archer");




