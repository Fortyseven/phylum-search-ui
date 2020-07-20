<script>
    import { onMount, getContext } from "svelte";
    import WaterfallPixel from "./WaterfallPixel.svelte";

    import WHALE from "../data/whale";

    import { currentAnimal } from "../../appstate";

    const ANALYZER_COLS = 30;
    const ANALYZER_ROWS = 7;
    let canvas_array = new Array(ANALYZER_COLS * ANALYZER_ROWS).fill(0);
    let pixel_container;

    $: loadWaterfallPattern($currentAnimal.voice);

    function loadWaterfallPattern(data) {
        canvas_array = data;
    }

    function dump() {
        console.log(JSON.stringify(canvas_array));
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

    button {
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
<button on:click={dump}>Dump bitmap</button>
