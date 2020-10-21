import React, { useState } from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'

export default function Input(props) {
    const [stateValor, setStateValor] = useState(props.initialValue);
    const onChange = (text)=>{
        setStateValor(text)
        props.onChange(text)
    }
    return (
        <>
            <Text>{props.label}</Text>
            <TextInput style={styles.textInputStyle} value={stateValor} onChangeText={onChange} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputStyle: {
        backgroundColor: "#d1cdcd",
        width:'100%',
        height: 50,
        padding: 8,
    }

});
