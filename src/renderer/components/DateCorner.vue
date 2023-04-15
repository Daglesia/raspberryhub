<template>
    <transition name="slide" appear>
    <footer v-show="!hidden" class="date-corner">
        <span>{{ date }}</span>
    </footer>
    </transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getCurrentDate } from '../utils/utils';

const date = ref(getCurrentDate());

defineProps<{
  hidden: boolean,
}>()

onMounted(()=>{
    setInterval(()=>{
        date.value = getCurrentDate();
        console.log('beeep', date.value)
    }, 1000)
})


</script>

<style scoped lang="scss">
@use '../styles/transitions.scss';
footer {
    color: var(--color-secondary);
    background: var(--color-primary);

    height: 4rem;
    aspect-ratio: 50 / 25;

    border-radius: 50px 0 0 0;

    display: flex;
    align-items: end;
    justify-content: end;
}
span {
    margin-right: 0.3em;
    margin-bottom: 0.2em;
    font-size: 2rem;
}
</style>