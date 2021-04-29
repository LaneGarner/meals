import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import {
    useFonts as useOswald,
    Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
    useFonts as useLato,
    Lato_400Regular,
    Lato_700Bold,
} from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant-info.screen";

const App = () => {
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });

    const [latoLoaded] = useLato({
        Lato_400Regular,
        Lato_700Bold,
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <RestaurantsScreen />
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
};

export default App;
