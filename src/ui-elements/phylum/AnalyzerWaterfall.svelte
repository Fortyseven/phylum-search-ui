<script lang="ts">
    import WaterfallPixel from "./WaterfallPixel.svelte";
    import VOICES from "../../data/voices";

    import { debug, currentAnimal, currentSpeed, CLEAR_LINE } from "../../appstate";

    const ANALYZER_COLS: number = 30;
    const ANALYZER_ROWS: number = 7;

    const DRAW_SPEEDS: number[] = [0, 5, 25, 50, 50, 60];

    let canvas_buffer: number[] = new Array(ANALYZER_COLS * ANALYZER_ROWS).fill(0);
    let canvas_array: number[] = new Array(ANALYZER_COLS * ANALYZER_ROWS).fill(0);

    let pixel_container;
    let update_x: number = 0;
    let timer: any = undefined;

    $: {
        if ($currentAnimal?.voice === undefined) {
            let voice = Math.floor(Math.random() * VOICES.length);
            loadWaterfallPattern(VOICES[voice]);
        } else loadWaterfallPattern($currentAnimal.voice);
    }

    function drawColumn() {
        for (let y = 0; y < ANALYZER_ROWS; y++) {
            const offs = y * ANALYZER_COLS + update_x;
            canvas_array[offs] = canvas_buffer[offs];
        }
        update_x++;
        if (update_x < ANALYZER_COLS) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(drawColumn, DRAW_SPEEDS[$currentSpeed]);
        }
    }

    function loadWaterfallPattern(data: number[]) {
        if (timer) {
            clearTimeout(timer);
        }
        if ($currentSpeed > 0) {
            update_x = 0;
            canvas_buffer = data;
            canvas_array = new Array(ANALYZER_COLS * ANALYZER_ROWS).fill(0);
            drawColumn();
        } else {
            // instant draw
            canvas_buffer = new Array(ANALYZER_COLS * ANALYZER_ROWS).fill(0);
            canvas_array = data;
        }
    }

    /* These are debug functions. */

    function dump() {
        console.log("array", JSON.stringify(canvas_array));
    }
    function clear() {
        loadWaterfallPattern(CLEAR_LINE);
    }
</script>

<style lang="scss">
    .waterfall {
        display: grid;
        grid-template-columns: repeat(30, 22.6px);
        grid-row-gap: 3.5px;
    }

    // these are cheap hacks to cover up pels that were also hidden in the
    // original on-screen display in the movie
    .blinder-hack,
    .blinder-hack-2,
    .blinder-hack-3 {
        display: block;
        position: absolute;
        background-color: black;
        right: 10px;
        bottom: 10px;
        width: 44px;
        height: 81px;
    }
    .blinder-hack-2 {
        right: 30px;
        bottom: -24px;
    }
    .blinder-hack-3 {
        right: 47px;
        bottom: -57px;
    }

    .panel {
        position: fixed;
        top: 0;
        left: 0;
    }
</style>

<div class="waterfall" bind:this={pixel_container}>
    {#each canvas_array as x}
        <WaterfallPixel bind:on={x} />
    {/each}
    <div class="blinder-hack" />
    <div class="blinder-hack-2" />
    <div class="blinder-hack-3" />
</div>
{#if $debug}
    <div class="panel">
        <button on:click={dump}>Dump</button>
        <button on:click={clear}>Clear</button>
    </div>
{/if}
