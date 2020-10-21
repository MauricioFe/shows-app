import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
export default function TabBar({ navigation, state }) {
    return (
        <View style={styles.container}>
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} >
                    <Feather name="home" size={30} color={state.index === 0 ? "blue" : "black"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Shows")} >
                    <Feather name="list" size={30} color={state.index === 1 ? "blue" : "black"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("NewShow")} >
                    <Ionicons name="md-add" size={30} color={state.index === 2 ? "blue" : "black"} />
                </TouchableOpacity>
            </>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEFEFE',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: 50,
    },
})