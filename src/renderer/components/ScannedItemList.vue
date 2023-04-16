<template>
    <ul>
        <li v-for="item in scannedItems">
            <span>{{ item.product }} {{ item.count }}</span>
            <img :src="getImgUrl(item.src)"/>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ScannedItem } from '../typings/scanner';

defineProps<{
  scannedItems: ScannedItem[],
}>()

const getImgUrl = (filename: string): string => {
    return `http://127.0.0.1:8000/static/${filename}.jpg`
}

</script>

<style lang="scss">

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    color: #668CD9;
    display: flex;
    margin-inline: 8px;
}

img {
    height:17vmax;
    width: 17vmax;
    border-radius: 50vmax;
}
</style>