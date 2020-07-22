<script lang="ts">
    import PhylumSearch from "./ui-elements/PhylumSearch.svelte";

    import animals from "./data/animals";
    import frames from "./data/frames";

    import { DrawingState, SPEED, debug, currentAnimal, drawingState, currentSpeed, cache } from "./appstate";
    import { onMount } from "svelte";
    import Loading from "./components/Loading.svelte";
    import { AssetType } from "./asset-cache";

    let frame_index: number;
    let animation_started: boolean = false;
    let is_loading: boolean = true;
    let loading_complete = false;
    let loading_filename: string = "--";

    currentAnimal.set(null);

    onMount(() => {
        preloadAssets();
    });

    $: {
        if (loading_complete && animation_started && $drawingState === DrawingState.DONE) {
            window.requestAnimationFrame(() => {
                frame_index++;
                if (frame_index < frames.length) {
                    if (!animals[frames[frame_index].key]) {
                        console.error("bad frame", frames[frame_index].key);
                    }
                    currentAnimal.set(animals[frames[frame_index].key]);
                    currentSpeed.set(frames[frame_index].speed);
                    drawingState.set(DrawingState.START);
                } else {
                    animation_started = false;
                }
            });
        }
    }

    async function preloadAssets() {
        is_loading = true;
        for (let i in animals) {
            loading_filename = animals[i].image;
            await $cache.loadAsset(animals[i].image, AssetType.IMAGE);
        }

        loading_filename = "./assets/audio/analysis.mp3";
        await $cache.loadAsset("./assets/audio/analysis.mp3", AssetType.AUDIO);

        loading_complete = true;
    }

    function startAnimation() {
        is_loading = false;
        animation_started = true;
        frame_index = 0;

        let audio = $cache.getAsset("./assets/audio/analysis.mp3");
        audio.play();

        currentAnimal.set(animals[frames[frame_index].key]);
        drawingState.set(DrawingState.START);
        currentSpeed.set(SPEED[frames[frame_index].speed]);
    }

    function onSwitch(key: string) {
        currentAnimal.set(animals[key]);
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
        {#if is_loading}
            <Loading on_play={() => startAnimation()} asset_name={loading_filename} done_loading={loading_complete} />
        {:else}
            <PhylumSearch />
            {#if $debug}
                <div class="panel">
                    {#each Object.keys(animals) as key}
                        <button on:click={() => onSwitch(key)}>{key}</button>
                    {/each}
                </div>
            {/if}
        {/if}
    </main>
</div>
