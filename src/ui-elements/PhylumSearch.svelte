<script lang="ts">
    import Title from "./phylum/Title.svelte";
    import SpeciesProfile from "./phylum/SpeciesProfile.svelte";
    import VoiceProfile from "./phylum/VoiceProfile.svelte";
    import { DrawingState, currentAnimal, drawingState, currentSpeed, SPEED } from "../appstate";

    $: {
        // each frame is allocated a certain amount of time to play, otherwise we move on
        if ($drawingState === DrawingState.START) {
            setTimeout(() => {
                drawingState.set(DrawingState.DONE);
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
