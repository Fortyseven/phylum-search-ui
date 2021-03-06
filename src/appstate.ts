import { writable, Writable } from "svelte/store";
import { setContext } from "svelte";
import AssetCache from "./asset-cache";
import ANIMALS, { AnimalType } from "./data/animals";

/*
flow:
    - load currentAnimal with next animal in frame list
    - set drawingState to DRAWING_STATE.START
    - root component loops, watching for changes
    - animation plays elsewhere, resetting drawingState to 'DONE' (guess INPROGRESS is no longer used?)
    - drawingState is DONE
    - rinse, repeat
*/

export const SPEED: number[] = [
    25,
    500,
    1000,
    2300,
    3000,
];

enum DrawingState { START, INPROGRESS, DONE };

let debug: Writable<boolean> = writable(false);

let currentAnimal: Writable<AnimalType> = writable(ANIMALS["myotis volans"]);

let currentSpeed: Writable<number> = writable(0);

let drawingState: Writable<DrawingState> = writable(DrawingState.DONE);

let cache: Writable<AssetCache> = writable(new AssetCache());


export { DrawingState, currentAnimal, currentSpeed, drawingState, debug, cache };

/* In lieu of a utils kitchen sink file, we can tuck this here for now. */
export const CLEAR_LINE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]