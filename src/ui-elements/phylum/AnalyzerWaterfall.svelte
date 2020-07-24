<script lang="ts">
    import WaterfallPixel from "./WaterfallPixel.svelte";
    import VOICES from "../../data/voices";

    import { debug, currentAnimal, currentSpeed, CLEAR_LINE } from "../../appstate";

    const ANALYZER_COLS: number = 30;
    const ANALYZER_ROWS: number = 7;

    const SUCCESS_GRADIENT: string[] = [
        "#009EB8",
        "#00A2BD",
        "#00A6C2",
        "#00ABC7",
        "#00AFCC",
        "#00B3D1",
        "#00B8D6",
        "#00BCDB",
        "#00C0E0",
        "#00C5E5",
        "#00C9EA",
        "#00CDEF",
        "#00D2F4",
        "#00D6F9",
        "#00DBFF",
        "#11DDFF",
        "#22DFFF",
        "#33E2FF",
        "#44E4FF",
        "#55E7FF",
        "#66E9FF",
        "#77EBFF",
        "#88EEFF",
        "#99F0FF",
        "#AAF3FF",
        "#BBF5FF",
        "#CCF7FF",
        "#DDFAFF",
        "#EEFCFF",
        "#FFFFFF",
    ];

    const DRAW_SPEEDS: number[] = [0, 5, 25, 50, 50, 60];

    let canvas_buffer: number[] = new Array(ANALYZER_COLS * ANALYZER_ROWS).fill(0);
    let canvas_array: number[] = new Array(ANALYZER_COLS * ANALYZER_ROWS).fill(0);
    let canvas_color_cols: string[] = new Array(ANALYZER_COLS).fill(0);

    let pixel_container;
    let update_x: number = 0;
    let timer: any = undefined;
    let timer_cycle: any = undefined;
    let cycle_index: number = 0;
    let show_success: boolean = false;

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
            // finished
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(drawColumn, DRAW_SPEEDS[$currentSpeed]);
        } else {
            startCycleTimer();
        }
    }

    function startCycleTimer() {
        // if we're on the final animal, start the color cycling
        if ($currentAnimal.isFinal && !timer_cycle) {
            console.log("how can this be?!");
            show_success = true;
            timer_cycle = setInterval(() => {
                cycle_index++;
                for (let x = 0; x < ANALYZER_COLS; x++) {
                    let index = (x + cycle_index) % ANALYZER_COLS;
                    canvas_color_cols[ANALYZER_COLS - x] = SUCCESS_GRADIENT[index];
                }
            }, 40);
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
    {#each canvas_array as x, index}
        <WaterfallPixel bind:on={x} success={show_success} success_color={canvas_color_cols[index % ANALYZER_COLS]} />
    {/each}
    <div class="blinder-hack" />
    <div class="blinder-hack-2" />
    <div class="blinder-hack-3" />
</div>
{#if $debug}
    <div class="panel">
        <button on:click={dump}>Dump</button>
        <button on:click={clear}>Clear</button>
        Current speed: {$currentSpeed}
    </div>
{/if}
