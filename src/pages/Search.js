import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { SearchBox } from "../components";

export default function Search() {
    return (
        <SafeAreaView>
            <StatusBar barStyle={"light-content"} />
            <View style={styles.container}>
                <SearchBox></SearchBox>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f7f7f7",
    },
});
