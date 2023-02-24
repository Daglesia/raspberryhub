<script setup lang="ts">
import MainMenu from './components/MainMenu.vue'

window.electronAPI.sendMessage('Hello from App.vue!');
</script>

<template>
  <div id="app">
    <main-menu/>
  </div>
</template>
