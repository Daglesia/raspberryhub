<template>
    <button @click="onClick()" class="menu-button" :class="{animate: animated}">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps({
  label: {
    type: String,
    required: true,
  },
});

const animated = ref(false);

const onClick = () => {
    animated.value = true;
      setTimeout(() => {
        animated.value = false;
      }, 500);
    window.electronAPI.sendMessage('Hello from App.vuddde!');
}
</script>

<style lang="scss" scoped>
@use '../styles/buttons.scss';
</style>