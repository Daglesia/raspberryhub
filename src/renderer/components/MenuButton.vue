<template>
    <button @click="onClick()" class="menu-button" :class="{animate: animated}">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const animated = ref(false);

const onClick = () => {
    animated.value = true;
      setTimeout(() => {
        animated.value = false;
      }, 10000);
    window.electronAPI.sendMessage('Hello from App.vuddde!');
}
</script>

<style lang="scss" scoped>
@use '../styles/buttons.scss';

</style>