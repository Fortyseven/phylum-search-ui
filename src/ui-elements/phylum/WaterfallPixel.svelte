<script lang="ts">
    export let on: number = 0;

    function toggle() {
        on = on == 0 ? 1 : 0;
    }
</script>

<style lang="scss">
    div {
        display: inline-block;
        background-color: red;
        border-radius: 4px;
        padding: 0;
        margin: 0;
        width: 13px;
        height: 13px;

        &.on {
            background-color: var(--color-waterfall-on);
            box-shadow: 0 0 8px var(--color-waterfall-on);
        }
    }
</style>

<div class:on on:click={toggle} />
