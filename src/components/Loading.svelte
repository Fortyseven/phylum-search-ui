<script lang="ts">
    export let asset_name: string;
    export let done_loading: boolean = false;
    export let on_play: any;
</script>

<style lang="scss">
    .container {
        display: grid;
        width: 100%;
        height: 100%;
        place-items: center;
        font-weight: normal;
        font-size: 1.5em;
        text-transform: uppercase;
        color: white;
    }
    div {
        text-align: center;
    }
    h2 {
        text-transform: uppercase;
        color: var(--color-secondary);
        font-size: 0.9em;
        font-family: "Courier New", Courier, monospace;
    }
    button {
        font-family: klingon-font;
        font-size: 4em;
        background: transparent;
        color: var(--color-primary);
        text-transform: uppercase;
        line-height: 1em;
        padding: 0em 1em;
        border: 4px solid var(--color-secondary);
        background-color: var(--color-secondary);
        text-shadow: 0 0 1em var(--color-secondary);
        cursor: pointer;
        &:hover {
            box-shadow: 0 0 0.5em var(--color-secondary);
        }
    }
</style>

<div class="container">
    <div>
        {#if !done_loading}
            <h1>Importing Sol Cultural Database</h1>
            <h2>{asset_name ?? ''}</h2>
        {:else}
            On-board computer has successfully interfaced
            <br />
            with the Federation memory bank.
            <br />
            <br />
            <button on:click={on_play}>Begin Analysis</button>
        {/if}
    </div>
</div>
