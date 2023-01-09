export class Boss {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.maxHealth = health
    }

    proposeEnigme() {
        if (this.health < this.maxHealth * 0.2) {
            const phrases = ["Qu'est ce qui a quatre pates le matin deux le soir et trois a midi ?", "je suis le bien et le mal mais je n'ai pourtant aucun corps qui suis je ?", "Je commence la nuit et termine le matin qui suis je ?"];
            const index = Math.floor(Math.random() * phrases.length);
            const phrase = phrases[index];

            console.log(phrase);

        }
    }
}

const Sauron = new Boss('Sauron', 1000, 50);
const Chronos = new Boss('Chronos', 500, 75);
const Lilith = new Boss('Lilith', 250, 100);

Sauron.proposeEnigme();
Chronos.proposeEnigme();
Lilith.proposeEnigme();


//Héros//
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

    attaque() {
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

    attaque(boss) {
        if (this.pointsDeMana >= 2) {
            this.pointsDeMana -= 2;
            boss.health -= this.attack
            return this.attack;

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

    attaque() {
        if (this.nombreDeFleches >= 2) {
            this.nombreDeFleches -= 2;
            this.attack *= 1.4;
            this.health *= 0.75;
            return this.attack;
        } else {
            this.nombreDeFleches += 6;
            return 0;
        }
    }
}