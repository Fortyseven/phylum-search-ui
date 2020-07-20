<script>
    import { setContext } from "svelte";
    import { writable } from "svelte/store";

    import Title from "./phylum/Title.svelte";
    import SpeciesProfile from "./phylum/SpeciesProfile.svelte";
    import VoiceProfile from "./phylum/VoiceProfile.svelte";
</script>

<div class="container">
    <Title />
    <SpeciesProfile />
    <VoiceProfile />
</div>
