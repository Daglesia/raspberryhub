<template>
  <transition name="pan" appear>
    <button
      v-show="!menuButtonHidden"
      @click="onClick"
      class="menu-button"
      :class="{ clicked: isClicked }"
    >
      <slot></slot>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isClicked = ref<boolean>(false);

const props = defineProps<{
  route: string;
  menuButtonHidden: boolean;
}>();

const emit = defineEmits<{
  (event: "menuItemClicked", path: string): void;
}>();

const onClick = () => {
  emit("menuItemClicked", props.route);
  isClicked.value = true;
};
</script>

<style lang="scss" scoped>
@use "../styles/buttons.scss";
@use "../styles/transitions.scss";
</style>
