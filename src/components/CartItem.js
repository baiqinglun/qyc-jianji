/* eslint-disable react/prop-types */
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors, Size } from "../constants";

const CartItem = props => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.time}>{props.time}</Text>
                <Ionicons
                    name="ellipsis-horizontal-sharp"
                    size={Size.FontSize.ml}
                    color={Colors.light.tipColor}
                ></Ionicons>
            </View>
            <View style={styles.tags}>
                {props.tags.map(item => (
                    <Text
                        key={item}
                        style={styles.tag}
                    >
                        #{item}
                    </Text>
                ))}
            </View>
            <Text style={styles.content}>{props.content}</Text>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        margin: 5,
        padding: 5,
        borderRadius: 2,
        maxHeight: 150,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
    },
    time: {
        color: Colors.light.tipColor,
        fontSize: Size.FontSize.s,
    },
    tags: {
        flexDirection: "row",
    },
    tag: {
        flexDirection: "row",
        alignItems: "center",
        color: Colors.light.tagText,
        fontSize: Size.FontSize.s,
        // backgroundColor: Colors.light.tagBg,
        width: "auto",
        marginHorizontal: 5,
        marginBottom: 5,
        borderRadius: 2,
    },
    content: {
        marginHorizontal: 5,
        color: Colors.light.defalutText,
        fontSize: Size.FontSize.s,
    },
});
