<template>
    <transition name="slide2" appear>
    <div v-show="!hidden">
    <button id="back-button" @click="handleBackButtonClicked">
        <font-awesome-icon icon="fa-solid fa-home"/>
    </button>
    <scanner-component v-model="currentCount" />
    <scanned-item-list :scannedItems="scannedItems" />
    </div>
</transition>
</template>

<script setup lang="ts">

import { onDeactivated, onMounted, ref } from 'vue';
import ScannedItemList from '../components/ScannedItemList.vue'
import ScannerComponent from '../components/ScannerComponent.vue';
import router from '../router';
import { ScannedItem } from '../typings/scanner';

const hidden = ref(false);

const currentCount = ref(1);

const handleBackButtonClicked = ():void => {
    hidden.value = true;
    scannedItems.value = [];
    setTimeout(()=>{
        router.back();
    }, 1000)
}

const scannedItems = ref<ScannedItem[]>([]);

let connection: WebSocket;

let scannedItemCache:string = '';

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

</script>

<style lang="scss" scoped>
@use '../styles/transitions.scss';
@use '../styles/buttons.scss';

#back-button {
    @extend %button-basic;
    position: absolute;
    top: 1vmax;
    left: 1vmax;

    background-color: none;
}

#back-button > svg {
    height: 5vmax;
    color: var(--color-secondary);
}

.scanner-component {
    height: 33vh;
    width: 100%;
}

.scanned-item-list {
height: 63vh;
margin-top: 4vh;
width: 100%;
}

</style>