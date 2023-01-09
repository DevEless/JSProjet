import{
    Boss
}from "./class.js"

import{
    Guerrier
}from "./class.js"
const Sauron = new Boss('Sauron', 1000, 50);
const Chronos = new Boss('Chronos', 500, 75);
const Lilith = new Boss('Lilith', 250, 100);

const bosses = [Sauron, Chronos, Lilith];

function chooseRandomBoss() {

  const randomIndex = Math.floor(Math.random() * 3);


return bosses[randomIndex];
}

const chosenBoss = chooseRandomBoss();
alert(`Vous allez affronter le grand  ${chosenBoss.name}.`);

alert(`Le sort est cruel, quels sera le nom de vos trois Héros légendaire ?`)




