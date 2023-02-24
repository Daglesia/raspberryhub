<template>
    <div class="menu">
        <div class="menu-row" v-for="labelRow in labelsSplit">
            <menu-button v-for="label in labelRow" :key="label" :label="label" />
        </div>
        <hello/>
</div>
<div class="footer">
    <logo-icon />
</div>
</template>

<script setup lang="ts">
import Hello from "./Hello.vue"
import LogoIcon from '../icons/LogoIcon.vue';
import MenuButton from './MenuButton.vue';

import { splitArrayToChunks } from "../utils/utils"

const labels = [
    "Scanner",
    "Kitchen helper",
    "GameHub",
    "Music player",
    "Dunno"
]

const labelsSplit = splitArrayToChunks(labels, 2);

</script>

<style lang="scss" scoped>
.menu-button {
}

.footer {
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  width: 100%;
}

.logo-icon {
    padding: 0.9em;
    width: 2em;
    height: 2em;
    margin: auto;
}

.menu {
    display: flex;
    flex-direction: column;
    height: inherit;
}

.menu-row {
    margin-top: 1em;
    margin-left: 1em;
    margin-right: 1em;
    row-gap: 1em;
    column-gap: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 15%;
}
</style>