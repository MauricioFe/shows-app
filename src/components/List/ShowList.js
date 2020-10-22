import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native'
import api from '../../services/api';



export default function ShowList() {
    const [listShows, setListShows] = useState(null);
    useEffect(() => {
        api.get("/shows").then((response) => {
            setListShows(response.data)
        });
    }, [])
    return (
        <>
            <View style={styles.listStyle}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={listShows}
                    renderItem={
                        ({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => { console.log(item.id) }}>
                                    <View style={styles.itemList}>
                                        <Text> {item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        }
                    } />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    listStyle: {
        marginTop: 50,
    },
    itemList: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: 'grey',
        borderTopWidth: 1,
        backgroundColor: '#DCDCDC',
        borderBottomWidth: 1,
        height: 30,
    },
})