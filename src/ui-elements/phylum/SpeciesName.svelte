<script>
    import { currentAnimal } from "../../appstate";
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
        font-size: 2.75rem;
        text-align: left;
        border-top: var(--dim-ui-thickness) solid var(--color-primary);
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

<div class:oneline={!$currentAnimal.isFinal}>{$currentAnimal.name}</div>
