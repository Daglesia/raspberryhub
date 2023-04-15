<template>
  <transition name="pan" appear>
    <button v-show="!menuButtonHidden" @click="onClick" class="menu-button">
        <slot></slot>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  route: string,
  menuButtonHidden: boolean,
}>()

const emit = defineEmits<{
  (event: 'menuItemClicked', path: string): void
}>()

const onClick = () => {
    emit('menuItemClicked', props.route);
}
</script>

<style lang="scss" scoped>
@use '../styles/buttons.scss';
@use '../styles/transitions.scss';
</style>