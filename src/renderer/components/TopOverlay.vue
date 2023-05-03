<template>
  <transition name="slide-vertical" appear>
    <div v-show="!hidden" class="top-overlay">
      <div id="left-button">
        <slot name="left-button"></slot>
      </div>
      <slot name="default"></slot>
      <div id="right-button">
        <slot name="right-button"></slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onDeactivated, onMounted, ref } from "vue";
import router from "../router";
import { ScannedItem } from "../typings/scanner";

defineProps<{
  hidden: boolean;
}>();
</script>

<style lang="scss" scoped>
@use "../styles/transitions.scss";
@use "../styles/buttons.scss";

%nav-button {
  position: absolute;
  background-color: none;
}

%nav-button > button {
  height: 5vmax;
  color: var(--color-secondary);
}

#left-button {
  @extend %button-basic;
  @extend %nav-button;

  top: 1vmax;
  left: 1vmax;
}

#right-button {
  @extend %button-basic;
  @extend %nav-button;

  top: 1vmax;
  right: 1vmax;
}

.top-overlay {
  position: relative;
  width: 100%;
  background-color: var(--color-primary);
  border-radius: 0 0 1rem 1rem;
}
</style>
