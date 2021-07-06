"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numbersCollection_1 = require("./numbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new numbersCollection_1.NumbersCollection([21, -300, 11, 2]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection("ZoRTlkanp");
charactersCollection.sort();
console.log(charactersCollection.data);