// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const customTheme = {
    dark: false,
    colors: {
        primary: "#94D33Cff",
        secondary: "#C0E047ff",
        tertiary: "#D5383Cff",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
    },
};

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "customTheme",
        themes: {
            customTheme,
        },
    },
});

export default vuetify;
