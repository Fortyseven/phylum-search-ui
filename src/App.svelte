<script>
    import PhylumSearch from "./ui-elements/PhylumSearch.svelte";

    import ANIMALS from "./data/animals";
    import FRAMES from "./data/frames";

    import { SPEED, debug, currentAnimal, drawingState, DRAWING_STATE, currentSpeed } from "./appstate";
    import { onMount } from "svelte";

    let frame_index;
    currentAnimal.set(null);

    onMount(() => {
        frame_index = 0;
        currentAnimal.set(ANIMALS[FRAMES[frame_index].key]);
        drawingState.set(DRAWING_STATE.START);
        currentSpeed.set(SPEED[FRAMES[frame_index].speed]);
    });

    $: {
        if ($drawingState === DRAWING_STATE.DONE) {
            window.requestAnimationFrame(() => {
                frame_index++;
                if (frame_index < FRAMES.length) {
                    if (!ANIMALS[FRAMES[frame_index].key]) {
                        console.error("bad frame", FRAMES[frame_index].key);
                    }
                    currentAnimal.set(ANIMALS[FRAMES[frame_index].key]);
                    currentSpeed.set(FRAMES[frame_index].speed);
                    drawingState.set(DRAWING_STATE.START);
                }
            });
        }
    }

    function onSwitch(key) {
        currentAnimal.set(ANIMALS[key]);
    }
</script>

<style>
    main {
        background-color: black;
        margin: auto;
        width: 1024px;
        height: 670px;
        overflow: hidden;
        padding: 2rem;
        font-family: klingon-font;
        font-size: 12pt;
    }
    .container {
        display: grid;
        place-items: center;
        width: 100vw;
        height: 100vh;
    }
    .panel {
        position: absolute;
        bottom: 0;
        padding-bottom: 1rem;
    }
</style>

<div class="container">
    <main>
        <PhylumSearch />
        {#if $debug}
            <div class="panel">
                {#each Object.keys(ANIMALS) as key}
                    <button on:click={() => onSwitch(key)}>{key}</button>
                {/each}
            </div>
        {/if}

    </main>
</div>
