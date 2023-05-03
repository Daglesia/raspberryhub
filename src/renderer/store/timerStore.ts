import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { Timeframe } from "../typings/timer";

const timeFormat = new Intl.DateTimeFormat("UTC", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h24",
  hour12: false,
});

export const useTimerStore = defineStore("timer", () => {
  const zeroTime = new Date("December 17, 1995 00:00:00");
  const timeInSeconds = ref(zeroTime);
  const timerActive = ref(false);
  let timerId: number;

  const timeDisplay = computed(() => timeFormat.format(timeInSeconds.value));

  const addToTime = (addedTime: number, timeframe: Timeframe): void => {
    if (timeframe === Timeframe.MINUTE) {
      timeInSeconds.value = new Date(
        timeInSeconds.value.getTime() + addedTime * 60000
      );
    } else {
      timeInSeconds.value = new Date(
        timeInSeconds.value.getTime() + addedTime * 1000
      );
    }
  };

  const beginTimer = () => {
    timerId = setInterval(() => {
      if (timeInSeconds.value.getTime() === zeroTime.getTime()) {
        console.log("owowowowow");
        clearTimer();
        timeInSeconds.value = zeroTime;
      } else {
        addToTime(-1, Timeframe.SECOND);
      }
    }, 1000);
    timerActive.value = true;
  };

  const clearTimer = () => {
    clearInterval(timerId);
    timerActive.value = false;
  };

  const refreshTime = (): void => {
    timeInSeconds.value = zeroTime;
  };

  return {
    addToTime,
    refreshTime,
    beginTimer,
    clearTimer,
    timeDisplay,
    timerActive,
  };
});
