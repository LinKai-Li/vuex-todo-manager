import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import todos from "@/store/modules/todos";

const store = createStore({
  modules: {
    todos,
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
