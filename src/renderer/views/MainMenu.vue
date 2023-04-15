<template>
    <div class="menu">
        <div v-for="path in paths" :key="path.route">
            <menu-button>
                <font-awesome-icon :icon="path.icon" />
            </menu-button>
        </div>
    </div>
    <footer>
        <span>{{ date }}</span>
    </footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MenuButton from '../components/MenuButton.vue';

import { getCurrentDate } from "../utils/utils"

const date = ref(getCurrentDate());

onMounted(()=>{
    setInterval(()=>{
        date.value = getCurrentDate();
        console.log('beeep', date.value)
    }, 1000)
})

const paths = [
    {
        icon: 'fa-solid fa-cart-shopping',
        route: '/scanner'
    },
    {
        icon: 'fa-solid fa-pizza-slice',
        route: '/recipes'
    },
    {
        icon: 'fa-solid fa-map-location-dot',
        route: '/locate'
    },
    {
        icon: 'fa-solid fa-clock',
        route: '/kitchen'
    }
]


</script>

<style lang="scss" scoped>
.menu {
    display: grid;
    grid-template-columns: auto auto;

    place-content: center stretch;

    height: 100%;
    width: 60%;
    margin: auto;

    gap: 3vmax;
}

svg {
    color: var(--color-secondary);
    height: 52%;
}

footer {
    position: absolute;
    color: var(--color-secondary);
    background: var(--color-primary);

    bottom:0;
    right:0;
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