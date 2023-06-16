import app from "./app";

// project theme
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import "virtual:windi.css";

// TODO: insert theme here...
import "primevue/resources/themes/lara-light-blue/theme.css";

// internal plug-in / services
import routes from "./routes";
import locales from "./locales";
import toast from "primevue/toastservice";

app.use(PrimeVue);
app.use(routes);
app.use(locales);
app.use(toast);

app.mount("#app");
