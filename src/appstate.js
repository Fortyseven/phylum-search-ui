import ANIMALS from "./ui-elements/data/animals";
import { writable } from "svelte/store";
import { setContext } from "svelte";

/*
flow:
    - currentAnimal changes

*/

const SPEED = [
    100,
    500,
    1500,
    0
]

const STATE = { STOPPED: 0, RENDERING: 1, RENDERING_DONE: 2 }

let debug = writable(true);

let currentAnimal = writable(ANIMALS["Myotis volans"]);
let currentSpeed = writable(SPEED[0]);

let state = writable(STATE.RENDERING);




export { currentAnimal, debug };
