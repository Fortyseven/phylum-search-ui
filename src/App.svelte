<script>
    import PhylumSearch from "./ui-elements/PhylumSearch.svelte";

    import ANIMALS from "./ui-elements/data/animals";

    import { currentAnimal } from "./appstate";

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
        <div class="panel">
            <button>START</button>
            <button>STOP</button>
            {#each Object.keys(ANIMALS) as key}
                <button on:click={() => onSwitch(key)}>{key}</button>
            {/each}
        </div>

    </main>
</div>
