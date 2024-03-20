import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/routes";
import Clipboard from "v-clipboard";
import ElementPlus from "element-plus";
import { createI18n } from "vue-i18n";
import "element-plus/dist/index.css";
import "../src/style.css";
import "./rem";
import en_US from "./locale/en-US";
import zh_CN from "./locale/zh-CN";

const app = createApp(App);

const i18n = createI18n({
  // locale: "zh-cn",
  locale: "en-us",

  messages: {
    "en-us": en_US,
    "zh-cn": zh_CN,
  },
});

// app.use(ElementPlus, {
//   i18n: (key, value) => i18n.t(key, value),
// });
app.use(i18n);
app.use(ElementPlus, {
  i18n: function (path, options) {
    console.log(path, options);
  },
});
app.use(router);
app.use(Clipboard);
app.mount("#app");
