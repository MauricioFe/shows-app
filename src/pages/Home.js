import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Input from '../components/Input';
import SearchInput from '../components/SearchInput';

export default function Home() {
    const [nome, setNome] = useState();
    return (
        <View style={styles.container}>
         
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});
