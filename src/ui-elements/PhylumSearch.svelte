<script>
    import Title from "./phylum/Title.svelte";
    import SpeciesProfile from "./phylum/SpeciesProfile.svelte";
    import VoiceProfile from "./phylum/VoiceProfile.svelte";
    import { currentAnimal, drawingState, DRAWING_STATE, currentSpeed, SPEED } from "../appstate";

    $: {
        if ($drawingState === DRAWING_STATE.START) {
            setTimeout(() => {
                console.log("Done drawing");
                drawingState.set(DRAWING_STATE.DONE);
            }, SPEED[$currentSpeed]);
        }
    }
</script>

<div class="container">
    {#if $currentAnimal}
        <Title />
        <SpeciesProfile />
        <VoiceProfile />
    {/if}
</div>
