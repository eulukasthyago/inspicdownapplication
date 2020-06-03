import "react-native-gesture-handler";
import React from "react";
import ApplicationIndex from "./src";
import { Provider as PaperProvider } from "react-native-paper";
import "./src/config/StatusBarConfig";
import { theme } from "./src/config/ThemeConfig";

const App = () => (
    <PaperProvider theme={theme}>
        <ApplicationIndex />
    </PaperProvider>
);

export default App;
