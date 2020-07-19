<script>
    import PhylumSearch from "./ui-elements/PhylumSearch.svelte";
</script>

<style>
    :global(:root) {
        --color-primary: orange;
        --color-secondary: red;
        --color-tertiary: white;
        --color-waterfall-on: #ffff88;

        --dim-ui-thickness: 5px;
        --dim-ui-slant-angle: 35deg;
        --dim-ui-slant-angle-neg: -35deg;
    }

    @font-face {
        font-family: "klingon-font-old";
        src: url("../assets/fonts/font-webfont.woff2") format("woff2"), url("../assets/fonts/font-webfont.woff") format("woff");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: "klingon-font";
        src: url("../assets/fonts/sl_pixl_regular_v1-webfont.woff2") format("woff2"),
            url("../assets/fonts/sl_pixl_regular_v1-webfont.woff") format("woff");
        font-weight: normal;
        font-style: normal;
    }

    main {
        background-color: black;
        margin: auto;
        width: 1024px;
        height: 670px;
        overflow: hidden;
        padding: 2rem;
        font-family: klingon-font;
        font-size: 12pt;
    }
    .container {
        display: grid;
        place-items: center;
        width: 100vw;
        height: 100vh;
    }
</style>

<div class="container">
    <main>
        <PhylumSearch />
    </main>
</div>
