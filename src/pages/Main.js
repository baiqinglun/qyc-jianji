import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { CartItem } from "../components/index";
import notions from "../../assets/notions";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants";

function Main() {
    const [addIsPressed, setAddIsPressed] = React.useState(false);

    const handleAddPressIn = () => {
        setAddIsPressed(true);
    };
    const handleAddPressOut = () => {
        setAddIsPressed(false);
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={notions}
                renderItem={({ item }) => (
                    <CartItem
                        time={item.time}
                        tags={item.tags}
                        content={item.content}
                    />
                )}
                keyExtractor={item => item.id}
            />
            <View style={styles.add}>
                <TouchableOpacity
                    style={{ opacity: addIsPressed ? 0.5 : 1 }}
                    onPressIn={handleAddPressIn}
                    onPressOut={handleAddPressOut}
                >
                    <Ionicons
                        name="add-circle"
                        size={80}
                        color={Colors.light.tint}
                    ></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f7f7f7",
        flex: 1,
        position: "relative",
    },
    add: {
        position: "absolute",
        bottom: 20,
        right: 20,
    },
});

export default Main;
