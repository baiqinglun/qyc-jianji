/* eslint-disable react/prop-types */
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Image,
    Pressable,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Button, Divider } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Size } from "../constants";

const Home = ({ navigation }) => {
    const staticslist = [
        { id: 1, count: 4, name: "简记" },
        { id: 2, count: 4, name: "简记" },
        { id: 3, count: 4, name: "简记" },
        { id: 4, count: 4, name: "简记" },
        { id: 5, count: 4, name: "简记" },
        { id: 6, count: 4, name: "简记" },
    ];

    const tags = [
        { id: 1, count: 4, name: "编程" },
        { id: 2, count: 4, name: "编程" },
        { id: 3, count: 4, name: "编程" },
        { id: 4, count: 4, name: "编程" },
        { id: 5, count: 4, name: "编程" },
    ];

    const [isFolding, setIsFolding] = React.useState(true);
    const [isTagPressed, setIsTagPressed] = React.useState(false);
    const [isShowTag, setIsShowTag] = React.useState(false);

    return (
        <DrawerContentScrollView style={styles.container}>
            <SafeAreaView>
                <StatusBar />
                {/* 顶部信息 */}
                <View style={styles.header}>
                    <View style={styles.avaterContainer}>
                        <Image
                            // eslint-disable-next-line no-undef
                            source={require("../../assets/avater.jpg")}
                            style={styles.avater}
                        />
                        <Text>摩天轮</Text>
                    </View>
                    <View style={styles.headerIcon}>
                        <Pressable>
                            <Ionicons
                                name="notifications-outline"
                                size={Size.FontSize.ll}
                            ></Ionicons>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("Settings")}>
                            <Ionicons
                                name="settings-outline"
                                size={Size.FontSize.ll}
                            ></Ionicons>
                        </Pressable>
                    </View>
                </View>
                {/* 统计 */}
                <View style={styles.statisticsContainer}>
                    {staticslist.map(item => (
                        <View
                            key={item.id}
                            style={styles.staticsItem}
                        >
                            <Text
                                style={{
                                    fontSize: Size.FontSize.m,
                                    color: Colors.light.defalutText,
                                }}
                            >
                                {item.count}
                            </Text>
                            <Text
                                style={{
                                    fontSize: Size.FontSize.m,
                                    color: Colors.light.defalutText,
                                }}
                            >
                                {item.name}
                            </Text>
                        </View>
                    ))}
                </View>
                <Divider
                    width={1}
                    color={Colors.light.defalutText}
                />
                <View style={styles.tagsContainer}>
                    <TouchableOpacity
                        style={{ opacity: isTagPressed ? 0.5 : 1 }}
                        onPressIn={() => setIsTagPressed(true)}
                        onPressOut={() => setIsTagPressed(false)}
                        onPress={() => {
                            setIsFolding(!isFolding);
                            setIsShowTag(!isShowTag);
                        }}
                    >
                        <View style={styles.tagsHeader}>
                            <Text
                                style={{
                                    fontSize: Size.FontSize.m,
                                    color: Colors.light.defalutText,
                                }}
                            >
                                全部标签
                            </Text>
                            <Ionicons
                                name={isFolding ? "chevron-up-outline" : "chevron-down-outline"}
                                size={20}
                                color={Colors.light.defalutText}
                            />
                        </View>
                    </TouchableOpacity>

                    {isShowTag ? (
                        <View style={styles.tags}>
                            {tags.map(item => (
                                <View
                                    key={item.id}
                                    style={styles.tagItem}
                                >
                                    <View style={styles.tagItemLeft}>
                                        <Ionicons
                                            name="pricetag-outline"
                                            size={Size.FontSize.m}
                                            color={Colors.light.defalutText}
                                        />
                                        <Text
                                            style={{
                                                fontSize: Size.FontSize.m,
                                                color: Colors.light.defalutText,
                                            }}
                                        >
                                            {item.name}
                                        </Text>
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: Size.FontSize.m,
                                            color: Colors.light.defalutText,
                                        }}
                                    >
                                        {item.count}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    ) : null}
                </View>
            </SafeAreaView>
        </DrawerContentScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        alignItems: "center",
        marginTop: 10,
    },
    avaterContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
    },
    avater: {
        width: 35,
        height: 35,
        borderRadius: 50,
    },
    headerIcon: {
        flexDirection: "row",
        gap: 20,
    },
    statisticsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 10,
        alignContent: "stretch",
    },
    staticsItem: {
        width: "30%",
        aspectRatio: 1,
        margin: "1%",
        justifyContent: "center",
        alignItems: "center",
    },
    tagsContainer: {
        flexDirection: "column",
        marginHorizontal: 10,
        marginTop: 10,
    },
    tagsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tags: { marginTop: 20, gap: 10 },
    tagItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    tagItemLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
});
