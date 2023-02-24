<template>
    <button @click="onClick()" class="menu-button">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
});

const onClick = () => {
    window.electronAPI.sendMessage('Hello from App.vuddde!');
}
</script>

<style lang="scss" scoped>

%button-shadow {
    --color-shadow: var(--color-primary);

    -webkit-box-shadow: inset 0px 0px 100px -34px var(--color-shadow);
    -moz-box-shadow: inset 0px 0px 100px -34px var(--color-shadow);
    box-shadow: inset 0px 0px 100px -34px var(--color-shadow);
}

p {
    font-family: var(--font-button);
    text-shadow: 2px 2px 4px var(--color-secondary);
    font-size: 1.5em;
}

button {
    @extend %button-shadow;
    width: 100%;
    height: 100%;
    border-radius: 1em;
    background-color: var(--color-secondary);
    color: var(--color-accent);

    font-family: var(--font-button);
    text-shadow: 2px 2px 4px var(--color-secondary);
    font-size: 1.5em;
    }
</style>