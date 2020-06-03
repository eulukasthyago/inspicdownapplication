import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "./components/CustonDrawer";

import Home from "./page/home";
import Download from "./page/download";
import AboutUs from "./page/aboutUs";
import Privacy from "./page/privacy";
import Donate from "./page/donate";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackScreen = ({ route, navigation }) => {
    if (route.state && route.state.index == 0) {
        navigation.setOptions({ tabBarVisible: false });
    } else {
        navigation.setOptions({ tabBarVisible: true });
    }
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="homeScreen"
                component={Home}
                options={{
                    title: "Inspicdown",
                    headerTintColor: "#fff",
                    headerStyle: {
                        backgroundColor: "#ca2e55",
                    },
                }}
            />
            <Stack.Screen
                name="downloadScreen"
                component={Download}
                options={{
                    title: "Inspicdown",
                    headerTintColor: "#fff",
                    headerStyle: {
                        backgroundColor: "#ca2e55",
                    },
                }}
            />
        </Stack.Navigator>
    );
};

const Routes = () => (
    <NavigationContainer>
        <Drawer.Navigator
            initialRouteName={Home}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                name="drawerStackScreen"
                component={StackScreen}
                options={{ title: "Inicio" }}
            />
            <Drawer.Screen
                name="drawerAboutUs"
                component={AboutUs}
                options={{ title: "Sobre" }}
            />
            <Drawer.Screen
                name="drawerDonate"
                component={Donate}
                options={{ title: "Doar" }}
            />
            <Drawer.Screen
                name="drawerPrivacy"
                component={Privacy}
                options={{ title: "Política de privacidade" }}
            />
        </Drawer.Navigator>
    </NavigationContainer>
);

export default Routes;
