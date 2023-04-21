import "./styles/main.scss";

import { createApp } from "vue";
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
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);
library.add(faMinus);
library.add(faHouse);
library.add(faCartShopping);
library.add(faMapLocationDot);
library.add(faPizzaSlice);
library.add(faClock);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
