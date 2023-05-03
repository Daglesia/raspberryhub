<template>
  <main>
    <top-overlay :hidden="hidden">
      <template #left-button>
        <button id="back-button" @click="handleBackButtonClicked">
          <font-awesome-icon icon="fa-solid fa-home" />
        </button>
      </template>
      <template #default>
        <div class="timer-display">
          {{ timerStore.timeDisplay }}
        </div>
      </template>
      <template #right-button>
        <button id="back-button" @click="handleSwapButtonClicked">
          <font-awesome-icon icon="fa-solid fa-stopwatch" />
        </button>
      </template>
    </top-overlay>
    <div class="timers-container">
      <transition appear name="slide-left">
        <div class="button-group" v-show="!hidden">
          <button
            v-for="timespan in leftGroup"
            class="pill-button"
            @click="timerStore.addToTime(timespan, currentTimeframe)"
          >
            <span
              >{{ timespan }}
              <p>'</p>
              <transition appear name="pan-simple">
                <p class="seconds" v-if="currentTimeframe === Timeframe.SECOND">
                  '
                </p>
              </transition>
            </span>
          </button>
        </div>
      </transition>
      <transition appear name="slide-bottom">
        <div class="timer-buttons" v-show="!hidden">
          <button
            class="floating-action-button-secondary"
            @click="timerStore.beginTimer"
          >
            <font-awesome-icon icon="fa-regular fa-play-circle" />
          </button>
          <button
            class="floating-action-button-secondary size-20"
            @click="timerStore.refreshTime"
          >
            <font-awesome-icon icon="fa-solid fa-rotate-right" />
          </button>
        </div>
      </transition>
      <transition appear name="slide-right">
        <div class="button-group" v-show="!hidden">
          <button
            v-for="timespan in rightGroup"
            class="pill-button"
            @click="timerStore.addToTime(timespan, currentTimeframe)"
          >
            <span
              >{{ timespan }}
              <p>'</p>
              <transition appear name="pan-simple">
                <p class="seconds" v-if="currentTimeframe === Timeframe.SECOND">
                  '
                </p>
              </transition>
            </span>
          </button>
        </div>
      </transition>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "../router";
import { Timeframe } from "../typings/timer";
import menuButton from "../components/MenuButton.vue";
import { useTimerStore } from "../store/timerStore";
import TopOverlay from "../components/TopOverlay.vue";

const hidden = ref(false);
const currentTimeframe = ref<Timeframe>(Timeframe.MINUTE);

const timerStore = useTimerStore();

const leftGroup = [1, 2, 5];
const rightGroup = [15, 30, 45];

const handleBackButtonClicked = (): void => {
  hidden.value = true;
  setTimeout(() => {
    router.back();
  }, 1000);
};

const handleSwapButtonClicked = (): void => {
  if (currentTimeframe.value === Timeframe.MINUTE) {
    currentTimeframe.value = Timeframe.SECOND;
  } else {
    currentTimeframe.value = Timeframe.MINUTE;
  }
};
</script>

<style lang="scss" scoped>
@use "../styles/transitions.scss";
@use "../styles/buttons.scss";

#back-button {
  @extend %button-basic;
  background-color: none;
}

span {
  position: relative;
  padding-inline: 2rem;
  padding-top: 0.2rem;
}

.timers-container {
  width: 100%;
  height: 67vh;

  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
}

.seconds {
  position: absolute;
  right: 0rem;
}

p {
  all: unset;
  position: absolute;
  right: 1rem;
}

.timer-buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#back-button > svg {
  height: 5vmax;
  color: var(--color-secondary);
}

.top-overlay {
  height: 33vh;
  width: 100%;
}

.button-group {
  width: 33%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.timer-buttons > button:not(.size-20) {
  height: 40%;
}

.size-20 {
  height: 25%;
}

button > svg {
  color: var(--color-primary);
  height: 80%;
}

.pill-button {
  font-size: 3rem;
  color: var(--color-secondary);
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
}

.timer-display {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-secondary);
  font-size: 4rem;
}
</style>
