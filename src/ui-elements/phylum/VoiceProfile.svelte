<script>
    import Analyzer from "./Analyzer.svelte";
</script>

<style lang="scss">
    .voice-profile {
        margin-top: 1rem;
        margin-left: 60px;
        display: grid;
        grid-template-columns: 240px 1fr;
        .copy {
            color: var(--color-primary);
            text-align: left;
            font-size: 4.25rem;
            text-transform: uppercase;
            line-height: 0.9;
        }
    }
</style>

<div class="voice-profile">
    <div class="copy">
        VOICE
        <br />
        PROFILE
    </div>
    <Analyzer />
</div>
