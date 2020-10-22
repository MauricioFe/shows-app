import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
export default function NewShow() {
    const [name, setName] = useState("");
    const [network, setNetwork] = useState("");
    const [country, setCountry] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    return (
        <View style={styles.container}>
            <Text>NewShow</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },  
})