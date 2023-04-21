<script setup lang="ts">
import MainMenu from "./views/MainMenu.vue";

window.electronAPI.sendMessage("Hello from App.vue!");
</script>

<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>
