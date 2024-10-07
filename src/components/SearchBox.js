import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Dimensions, Size } from "../constants";
import { useNavigation } from "@react-navigation/native";

export default function SearchBox() {
    const navigation = useNavigation();

    const [value, onChangeText] = React.useState("");

    return (
        <View>
            <View style={styles.header}>
                <View style={styles.search}>
                    <Ionicons
                        name="search-sharp"
                        color={Colors.light.defalutText}
                        size={Size.FontSize.ml}
                        style={styles.searchIcon}
                    ></Ionicons>
                    <TextInput
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        placeholder="搜索"
                        // placeholderTextColor={Colors.dark.defalutText}
                    ></TextInput>
                </View>
                <Text
                    style={styles.cancel}
                    // 这里注意返回事件不是函数,不能加括号
                    onPress={navigation.goBack}
                >
                    取消
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f7f7f7",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        minWidth: Dimensions.windowWidth,
        maxWidth: Dimensions.windowWidth,
        backgroundColor: "#f7f7f7",
    },
    search: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f2f4f3",
        borderRadius: 50,
        padding: 5,
        height: 30,
        gap: 5,
        minWidth: Dimensions.windowWidth - 50,
        maxWidth: Dimensions.windowWidth - 50,
    },
    searchIcon: {
        marginHorizontal: 5,
    },
    cancel: {
        width: 40,
        marginLeft: 10,
    },
});
