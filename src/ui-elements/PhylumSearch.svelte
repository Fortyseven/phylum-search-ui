<script>
    import { setContext } from "svelte";
    import { writable } from "svelte/store";

    import Title from "./phylum/Title.svelte";
    import SpeciesProfile from "./phylum/SpeciesProfile.svelte";
    import VoiceProfile from "./phylum/VoiceProfile.svelte";

    import ANIMALS from "./data/animals";

    import { currentAnimal } from "./app_store";

    let test_index = 0;
    let animal_total = Object.keys(ANIMALS).length;
    console.log("animal_total", animal_total);

    setInterval(() => {
        test_index++;
        currentAnimal.set(ANIMALS[Object.keys(ANIMALS)[test_index % animal_total]]);
    }, 100);

    function onSwitch(key) {
        console.log("changing");
        currentAnimal.set(ANIMALS[key]);
    }
</script>

<style>
    .panel {
        position: absolute;
        margin-top: 1em;
    }
</style>

<div class="container">
    <Title />
    <SpeciesProfile />
    <VoiceProfile />
    <div class="panel">
        {#each Object.keys(ANIMALS) as key}
            <button on:click={() => onSwitch(key)}>{key}</button>
        {/each}
    </div>
</div>
