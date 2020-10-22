import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Detail from '../components/Detail/ShowDetail'
import List from '../components/List/ShowList'

export default function Shows() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.list}>
                    <List />
                </View>
                <View style={styles.detail}>
                    <Detail />
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
    },
    list: {
        flex: 2,
    },
    detail: {
        flex: 1,
        justifyContent: "center"
    },
})