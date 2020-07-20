<script>
    import SpeciesName from "./SpeciesName.svelte";

    import { currentAnimal } from "../../appstate";
</script>

<style lang="scss">
    .upper {
        border: var(--dim-ui-thickness) solid var(--color-primary);
        border-bottom: none;
        height: 200px;
        position: relative;
        .copy {
            color: var(--color-primary);
            width: 100%;
            text-align: center;
            font-size: 3.25rem;
            text-transform: uppercase;
            position: absolute;
            top: 0;
            z-index: 999;
        }

        .animal-image {
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            background-position-y: 60px;

            position: relative;
            height: 309px;
        }
        &.oneline .animal-image {
            height: 350px;
            background-position-y: center;
        }
    }
    .lower {
        border-top: none;
        margin: auto;
        height: 200px;
        position: relative;
        &:after,
        &:before {
            background-color: var(--color-primary);
            display: block;
            width: var(--dim-ui-thickness);
            height: 247px;
            position: absolute;
            top: 0;
            left: 0;
            transform-origin: top;
            transform: rotateZ(var(--dim-ui-slant-angle-neg));
            content: "";
        }

        &:after {
            transform: rotateZ(var(--dim-ui-slant-angle));
            left: unset;
            right: 0;
        }
    }

    .closer {
        background-color: var(--color-primary);
        width: 739px;
        height: var(--dim-ui-thickness);
        margin: auto;
    }

    .speciesname {
        position: relative;
        left: 250px;
        bottom: -80px;
        &.oneline {
            bottom: -139px;
        }
    }
</style>

<div>
    <div class="upper" class:oneline={!$currentAnimal.isFinal}>
        {#if $currentAnimal.isFinal}
            <div class="copy">Match Profile on Humpback Whale</div>
        {/if}
        <div class="animal-image" style="background-image:url('{$currentAnimal.image}')" />
    </div>
    <div class="lower">
        <div class="speciesname" class:oneline={!$currentAnimal.isFinal}>
            <SpeciesName id="MySpeciesName" />
        </div>
    </div>
    <div class="closer" />
</div>
