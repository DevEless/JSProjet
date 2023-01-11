import {
    chosenBoss , boss
} from "./instances.js"

export class Boss {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.maxHealth = 350

    }

    proposeEnigme(personnages) {
        if (this.health < this.maxHealth * 0.2 && this.health > 0) {
            const phrases = ["Qu'est ce qui a quatre pates le matin deux le soir et trois a midi ?", "je suis le bien et le mal mais je n'ai pourtant aucun corps qui suis je ?", "Je commence la nuit et termine le matin qui suis je ?"];
            const index = Math.floor(Math.random() * phrases.length);
            const phrase = phrases[index];
            const reponses = ["l'humain", "la justice", "n"]
            const bon = reponses[index]

            alert(phrase);   
            let chance = 3 
            let reponse = ""
            do {
                reponse = prompt(phrase)
                if (reponse === bon){
                    alert("l'enigme est réussie ! le boss est mort ")
                    this.health = 0
                    return true
                }
                else{
                    alert("echec critique, mauvaise reponse")
                    chance  --
                }
            } while (chance > 0);
            alert("vous n'avez plus de chance !")
            personnages[0].health = 0
            personnages[1].health = 0
            personnages[2].health = 0

        }
    }
}

// création des boss
const Sauron = new Boss("Sauron", 350, 50);
const Chronos = new Boss("Chronos", 350, 50);
const Lilith = new Boss("Lilith", 350, 50);




Sauron.proposeEnigme();
Chronos.proposeEnigme();
Lilith.proposeEnigme();


//Héros//

//a voir avec des extends 
export class Guerrier {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.rage = 0;
    }

    gagneRage() {
        this.rage++;
        if (this.rage >= 4) {
            this.attack *= 1.25;
            this.rage = 0;
            setTimeout(() => {
                this.attack /= 1.25;
            }, 1000);
        }
    }

    defense() {
        this.health += 10;
    }

    attaque(chosenBoss) {
        chosenBoss.health -= this.attack;
    } 
}
export class Mage {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.pointsDeMana = Math.floor(Math.random() * 3) + 7;

    }

    defense() {
        this.health += 50;
    }

    attaque(chooseRandomBoss) {
        if (this.pointsDeMana >= 2) {
            this.pointsDeMana -= 2;
            chosenBoss.health -= this.attack;
            
            

        } else {
            this.pointsDeMana += 7;
            return 0;
        }
    }
}

export class Archer {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.nombreDeFleches = Math.floor(Math.random() * 5) + 7;
    }

    defense() {
        this.health *= 2.5;
        this.attack *= 0.5;
    }

    attaque(chosenBoss) {
        if (this.nombreDeFleches >= 2) {
            this.nombreDeFleches -= 2;
            this.attack *= 1.4;
            this.health *= 0.75;
            chosenBoss.health-= this.attack;
            console.log("charge heroique !")
            
        } else {
            this.nombreDeFleches += 6;
            return 0;
        }
    }
}