<script lang="ts">
    export let on: number = 0;
    export let success: boolean = false;
    export let success_color: string = "#000000";

    let el = null;

    $: {
        if (el && success && success_color) {
            el.style.borderColor = success_color;
        }
    }

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
            &.success {
                border: 2px solid cyan;
                background-color: white;
                width: 8px;
                height: 8px;
                box-shadow: 0 0 16px white;
            }
        }
    }
</style>

<div class:on class:success on:click={toggle} bind:this={el} />
