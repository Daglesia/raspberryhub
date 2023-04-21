<template>
  <TransitionGroup name="list" tag="ul" class="scanned-item-list" appear>
    <li
      v-for="(item, index) in scannedItems"
      :key="item.id"
      :data-index="index"
    >
      <div>
        <span>{{ item.product }}</span>
        <p>x{{ item.count }}</p>
      </div>
      <img :src="getImgUrl(item.src)" />
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { ScannedItem } from "../typings/scanner";

defineProps<{
  scannedItems: ScannedItem[];
}>();

const getImgUrl = (filename: string): string => {
  return `http://127.0.0.1:8000/static/${filename}.jpg`;
};
</script>

<style scoped lang="scss">
@use "../styles/transitions.scss";

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: end;
}

li {
  position: relative;

  height: fit-content;

  color: #668cd9;
  margin-inline: 2%;
  margin-block: 2%;
}

div {
  border: 0.4rem solid var(--color-primary);
  border-radius: 10rem;
  margin-right: 1rem;
  padding-left: 1rem;
  padding-right: 5rem;

  height: 4.7rem;

  display: flex;

  justify-content: space-between;
  align-items: center;
}

span {
  font-size: 1.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

p {
  font-size: 1.5rem;
  padding-left: 4%;
}

img {
  position: absolute;
  right: 0;
  top: 0;

  height: 6rem;
  aspect-ratio: 1 / 1;
  border-radius: 50vmax;
}
</style>
