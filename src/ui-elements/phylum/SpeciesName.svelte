<script lang="ts">
    import { currentAnimal, currentSpeed } from "../../appstate";

    const SPEED = [0, 10, 40, 50, 60, 80];

    let name_index: number = 0;
    let speed: number = 0;
    let output_buffer: string = "";
    let timer: any = null;

    $: {
        if ($currentAnimal?.name) {
            if ($currentSpeed === 0) {
                output_buffer = $currentAnimal.name;
            } else {
                speed = SPEED[$currentSpeed];
                beginAnimation();
            }
        }
    }

    function beginAnimation() {
        name_index = 0;
        output_buffer = "";
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(stepName, speed);
    }

    function stepName() {
        let char = $currentAnimal.name[name_index];

        if (char === "\n") {
            output_buffer += "<br/>";
        } else {
            output_buffer += $currentAnimal.name[name_index];
        }
        name_index++;
        if (name_index < $currentAnimal.name.length) {
            timer = setTimeout(stepName, speed);
        }
    }
</script>

<style lang="scss">
    div {
        color: var(--color-tertiary);
        background: black;
        text-transform: uppercase;
        display: block;
        width: 562px;
        height: 115px;
        padding-right: 150px;
        font-size: 3.45rem;
        text-align: left;
        border-top: var(--dim-ui-thickness) solid var(--color-primary);
        line-height: 1em;
        &:before,
        &:after {
            background-color: var(--color-primary);
            display: block;
            width: var(--dim-ui-thickness);
            height: 148px;
            position: absolute;
            top: 1px;
            left: 0;
            transform-origin: top;
            transform: rotateZ(var(--dim-ui-slant-angle));
            content: "";
        }
        &.oneline {
            width: 522px;
            height: 55px;
            &:before,
            &:after {
                height: 74px;
            }
        }
    }
</style>

<div class:oneline={!$currentAnimal.isFinal}>
    {@html output_buffer}
</div>
