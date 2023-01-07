class Boss {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;

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


Sauron.proposeEnigme();
Chronos.proposeEnigme();
Lilith.proposeEnigme();

//Héros//
class Guerrier {
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
        this.pointsDeVie += 10;
    }

    attaque() {
        this.attack = boss.health--
    }
}
class Mage {
    constructor(nom) {
        this.nom = nom;
        this.pointsDeVie = 100;
        this.pointsDAttaque = 10;
        this.pointsDeMana = Math.floor(Math.random() * 3) + 7;
    }

    defense() {
        this.pointsDeVie += 5;
    }

    attaque() {
        if (this.pointsDeMana >= 2) {
            this.pointsDeMana -= 2;
            return this.pointsDAttaque;
        } else {
            this.pointsDeMana += 7;
            return 0;
        }
    }
}