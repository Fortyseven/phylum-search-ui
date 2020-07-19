<script>
    import AnalyzerWaterfall from "./AnalyzerWaterfall.svelte";
</script>

<style lang="scss">
    .analyzer {
        display: block;
        width: 96%;
        height: 115px;
        border: var(--dim-ui-thickness) solid var(--color-primary);
        border-right: none;
        border-bottom: none;
        position: relative;
        padding: 0.25rem;
        .inner {
            width: 98%;
            height: 115px;
            overflow: hidden;
        }
        &:after {
            background-color: var(--color-primary);
            display: block;
            width: var(--dim-ui-thickness);
            height: 148px;
            position: absolute;
            top: 0;
            right: 0;
            transform-origin: top;
            transform: rotateZ(var(--dim-ui-slant-angle));
            content: "";
        }
    }
    .analyzer-closer {
        background-color: var(--color-primary);
        width: 623px;
        height: var(--dim-ui-thickness);
        position: relative;
        left: -9px;
    }
</style>

<div class="analyzer">
    <div class="inner">
        <AnalyzerWaterfall />
    </div>
    <div class="analyzer-closer" />
</div>
