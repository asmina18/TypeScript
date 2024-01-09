"use strict";
// Funktion til at udregne procenten af et tal
const getPercentage = (tal, procent) => (procent * tal) / 100;
const resultat = getPercentage(100, 40);
console.log(`40% af 100 er ${resultat}`);
// Funktion til at hente et specifikt element i et array
const getElement = (arr, substring) => arr.find(element => element.includes(substring));
// Funktion til at hente et element i et array baseret på indeks
const getElementAtIndex = (arr, index) => (index >= 0 && index < arr.length) ? arr[index] : (console.error('Index out of bounds!'), undefined);
const animalNames = ['elephant', 'tiger', 'lion', 'giraffe', 'zebra'];
const foundElement = getElement(animalNames, 'on');
console.log(`Dyret, der indeholder "on", er: ${foundElement}`);
const elementAtIndex = getElementAtIndex(animalNames, 2);
console.log(`Dyret på index 2 er: ${elementAtIndex}`);
