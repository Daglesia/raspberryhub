<template>
    <button class="floating-action-button back-button" @click="$router.back()">
        <logo-icon/>
    </button>
    <div class="scanner-view">
        <button class="floating-action-button" @click="omitZeroDecrementIncrement(1)">
            <font-awesome-icon icon="fa-solid fa-plus"/>
        </button>
        <h1>{{ currentCount }}</h1>
        <button class="floating-action-button" @click="omitZeroDecrementIncrement(-1)">
            <font-awesome-icon icon="fa-solid fa-minus" />
        </button>
    </div>
    <div class="itemRows">
        <transition-group name="flip-list" tag="ul">
        <div v-for="item in scannedItems" :key="item.id">
            <li class="itemRow">
            <p>
                {{ item.product }}
            </p>
            <p class="itemCount">
                x{{ item.count }}
            </p>
                <img :src="getImgUrl(item.src)"/>
        </li>
        </div>
    </transition-group>
    </div>

</template>

<script setup lang="ts">

import { onDeactivated, onMounted, ref } from 'vue';
import LogoIcon from '../icons/LogoIcon.vue';

import { splitArrayToChunks } from "../utils/utils";

const getImgUrl = (filename: string): string => {
    return `http://127.0.0.1:8000/static/${filename}.jpg`
}

const omitZeroDecrementIncrement = (sign: number): void => {
    currentCount.value = currentCount.value + sign;
    if(!currentCount.value) {
        currentCount.value = currentCount.value + sign;
    }
}

interface ScannedItem {
    product: string;
    id: number;
    src: string;
    count: number;
}

const scannedItems = ref<ScannedItem[]>([]);

const currentCount = ref(1);

let connection: WebSocket;

let scannedItemCache = '';

const scanItem = (event: KeyboardEvent) => {
    const key = event.key;
    if (key !== 'Enter') {
        scannedItemCache += key;
    } else {
        console.log(scannedItemCache, "wysyłka")
        connection.send(JSON.stringify({
            product: scannedItemCache,
            count: currentCount.value,
        }))
        scannedItemCache = '';
    }
}

onMounted(() => {
    connection = new WebSocket("ws://127.0.0.1:8000/ws");
    connection.onmessage = async function(event) {
        const data = await JSON.parse(await JSON.parse(event.data));
        console.log(data, 'beep')
        console.log(typeof(data), 'notbeep')
        scannedItems.value.push({...data, id: Math.random()});
        if(scannedItems.value.length > 2) {
            scannedItems.value.shift();
        }
    }

    window.addEventListener('keypress', scanItem);
});

onDeactivated(() => {
    connection.close()
    window.removeEventListener('keypress', scanItem);
})

const labels = [
    "Scanner"
]

const labelsSplit = splitArrayToChunks(labels, 2);

</script>

<style lang="scss" scoped>
@use '../styles/buttons.scss';

.floating-action-button {
    width:3em;
    height:3em;
}

h1 {
    color: var(--color-accent);
    height: 3em;
    width: 3em;
    text-align: center;
    margin-top: 1.3em;
}

.itemRows {
    height: 60%;
    display: flex;
    flex-direction: column;

    justify-content: flex-end;
}
svg {
    display: block;
    margin: auto;
}
.itemRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1%;
    box-shadow: inset 0px 0px 100px -34px var(--color-shadow);
    background-color: var(--color-secondary);
    color: var(--color-accent);
    border-radius: 10em;

    transition: all 1s;
}
ul {
    padding:0;
    width: 100%;
}

img {
    width: 5em;
    height: 5em;
    border-radius: 10em;
    margin: 0.2em;
    box-shadow: 0 1px 2.5px var(--color-accent), inset 0px 0px 100px -34px var(--color-shadow);
}

p {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 1em;
}

.itemCount {
    margin-left: auto;
    margin-right: 0.1em;
}
.back-button {
    position: absolute;
}

.back-button > svg {
    width: 2em;
    height: 2em;
    margin-top: 0.2em;
}

.scanner-view {
    height: 40%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.flip-list-move {
  transition: transform 0.6s;
}
.flip-list-enter, .flip-list-leave-to {
  opacity: 0;
}

</style>