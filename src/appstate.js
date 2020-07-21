import { writable } from "svelte/store";
import { setContext } from "svelte";

import ANIMALS from "./data/animals";

/*
flow:
    - load currentAnimal with next animal in frame list
    - set drawingState to DRAWING_STATE.START
    - root component loops, watching for changes
    - animation plays elsewhere, resetting drawingState to 'DONE' (guess INPROGRESS is no longer used?)
    - drawingState is DONE
    - rinse, repeat
*/

export const SPEED = [
    50,
    250,
    1100,
    1800,
    0
];

const DRAWING_STATE = { START: 1, INPROGRESS: 2, DONE: 0 }

let debug = writable(false);

let currentAnimal = writable(ANIMALS["myotis volans"]);

let currentSpeed = writable(0);

let drawingState = writable(DRAWING_STATE.RENDERING);


export { DRAWING_STATE, currentAnimal, currentSpeed, drawingState, debug };

/* In lieu of a utils kitchen sink file, we can tuck this here for now. */
export const CLEAR_LINE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]