import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "./gesture-handler";
import { About, Home, Main, Search, Settings } from "./src/pages";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors, Size } from "./src/constants";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerTitleAlign: "center",
            }}
        >
            {/* 主页面 */}
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    title: "首页",
                    headerLeft: () => (
                        <Ionicons
                            style={{ marginHorizontal: 15 }}
                            name="menu"
                            size={Size.FontSize.lll}
                            color={Colors.light.defalutText}
                            onPress={() => {
                                navigation.openDrawer();
                            }}
                        ></Ionicons>
                    ),
                    headerRight: () => (
                        <Ionicons
                            style={{ marginHorizontal: 15 }}
                            name="search-sharp"
                            size={Size.FontSize.lll}
                            color={Colors.light.defalutText}
                            onPress={() => {
                                navigation.navigate("Search");
                            }}
                        ></Ionicons>
                    ),
                }}
            ></Stack.Screen>
            {/* 搜索页面 */}
            <Stack.Screen
                name="Search"
                component={Search}
                options={{ headerShown: false }}
            ></Stack.Screen>
            {/* 设置页面 */}
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
            ></Stack.Screen>
        </Stack.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                // 抽屉页面
                drawerContent={props => <Home {...props} />}
                initialRouteName="MainStack"
            >
                <Drawer.Screen
                    name="MainStack"
                    component={MainStack}
                    options={{ headerShown: false }}
                />
                <Drawer.Screen
                    name="About"
                    component={About}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

