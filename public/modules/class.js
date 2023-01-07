class Boss {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        
    }

    proposeEnigme() {
        if (this.health < this.maxHealth * 0.2) {
            console.log(`${this.name} propose une enigme pour gagner du temps !`);
        }
    }
}

const Sauron = new Boss('Sauron', 1000, 50);
const Chronos = new Boss('Chronos', 500, 75);
const Lilith = new Boss('Lilith', 250, 100);

Sauron.proposeEnigme(); // Affiche "Sauron propose une enigme pour gagner du temps !" si Sauron a moins de 200 points de vie
Chronos.proposeEnigme(); // Affiche "Chronos propose une enigme pour gagner du temps !" si Chronos a moins de 100 points de vie
Lilith.proposeEnigme(); // Affiche "Lilith propose une enigme pour gagner du temps !" si Lilith a moins de 50 points de vie