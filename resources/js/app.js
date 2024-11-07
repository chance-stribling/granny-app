import "./bootstrap";
import router from "./router";
import vuetify from "./vuetify";
import { createApp } from "vue";

import App from "./App.vue";

const app = createApp(App);

app.use(router).use(vuetify).mount("#app");
