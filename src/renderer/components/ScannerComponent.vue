<template>
        <div class="scanner-component">
        <button class="floating-action-button" @click="omitZeroDecrementIncrement(-1)">
            <font-awesome-icon icon="fa-solid fa-minus"/>
        </button>
        <h1>{{ modelValue }}</h1>
        <button class="floating-action-button" @click="omitZeroDecrementIncrement(1)">
            <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    modelValue: number,
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: number): void
}>()

const omitZeroDecrementIncrement = (sign: number): void => {
    if (props.modelValue + sign) {
        emit('update:modelValue', props.modelValue + sign);
    } else {
        emit('update:modelValue', props.modelValue + 2*sign);
    }
}
</script>

<style lang="scss">
@use '../styles/buttons.scss';

.scanner-component {
    display: flex;

    background-color: var(--color-primary);

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 0 0 1.5vmax 1.5vmax;
}

h1 {
    width: 16vmax;
    text-align: center;
    color: var(--color-secondary);
    font-size: 4em;
}


.floating-action-button {
    height: 12vmax;
}

.floating-action-button > svg {
    height: 6.5vmax;
    aspect-ratio: 1 / 1;
    color: var(--color-primary);
}
</style>