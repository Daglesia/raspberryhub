<template>
    <div class="menu">
        <div v-for="path in paths" :key="path.route">
            <menu-button :menuButtonHidden="menuHidden" :route="path.route" @menu-item-clicked="handleMenuItemClick">
                <font-awesome-icon :icon="path.icon"/>
            </menu-button>
        </div>
    </div>
    <date-corner :hidden="menuHidden"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MenuButton from '../components/MenuButton.vue';
import DateCorner from '../components/DateCorner.vue';

import router from '../router';

const menuHidden = ref(false);

const handleMenuItemClick = (path:string):void => {
    menuHidden.value = true;
    setTimeout(()=>{
        router.push(path)
    }, 700)
}

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
@use '../styles/transitions.scss';
.menu {
    display: grid;
    grid-template-columns: auto auto;

    place-content: center stretch;

    height: 100%;
    width: 60%;
    margin: auto;

    gap: 2rem;
}

svg {
    color: var(--color-secondary);
    height: 52%;
}

.date-corner {
    position: absolute;
    bottom:0;
    right:0;
}

</style>