import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function SearchInput(props) {
    const [stateValor, setStateValor] = useState(props.initialValue);
    const onChange = (text) => {
        setStateValor(text)
        props.onChange(text)
    }
    return (
        <View style={styles.container}>
            <AntDesign name="search1" size={24} color="black" />
            <Text style={styles.textStyle}>{props.label}</Text>
            <TextInput style={styles.textInputStyle} value={stateValor} onChangeText={onChange} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#d1cdcd",
    },
    textInputStyle: {
        marginLeft:5,
    },
    textStyle:{
        alignSelf: "center",
    }

});
