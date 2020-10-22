import React from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native'

const shows = {
    items: [
        {
            id: 1,
            nome: "How i Met Your Mother"
        },
        {
            id: 2,
            nome: "Friends"
        },
        {
            id: 3,
            nome: "Two and a half man"
        },
    ]
}

export default function ShowList() {
    return (
        <>
            <View style={styles.listStyle}>
                <FlatList
                    data={shows.items}
                    renderItem={
                        ({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => { console.log(item.id) }}>
                                    <View style={styles.itemList}>
                                        <Text> {item.nome}</Text>
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
        justifyContent: "center",
        alignItems: "center",
        borderColor: 'grey',
        borderTopWidth: 1,
        backgroundColor: '#DCDCDC',
        borderBottomWidth: 1,


    },
})