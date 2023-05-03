import "./styles/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faPlus,
  faMinus,
  faHouse,
  faCartShopping,
  faMapLocationDot,
  faPizzaSlice,
  faClock,
  faStopwatch,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

library.add(faPlus);
library.add(faMinus);
library.add(faHouse);
library.add(faCartShopping);
library.add(faMapLocationDot);
library.add(faPizzaSlice);
library.add(faClock);
library.add(faPlayCircle);
library.add(faStopwatch);
library.add(faRotateRight);

const app = createApp(App);

const pinia = createPinia();

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(pinia);

app.mount("#app");
