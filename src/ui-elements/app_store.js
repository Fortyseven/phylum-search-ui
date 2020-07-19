import ANIMALS from "./data/animals";
import { writable } from "svelte/store";
import { setContext } from "svelte";

let currentAnimal = writable(ANIMALS["Myotis volans"]);

export { currentAnimal };
