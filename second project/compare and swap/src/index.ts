import { Sorter } from "./Sorter";
import { NumbersCollection } from "./numbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([21, -300, 11, 2]);

numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("ZoRTlkanp");

charactersCollection.sort()
console.log(charactersCollection.data);
