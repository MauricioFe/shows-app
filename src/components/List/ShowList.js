import React from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useShows } from '../../hooks/useShows';



export default function ShowList() {
    const { shows } = useShows();

    return (
        <>
            <ScrollView vertical>
                <View style={styles.listStyle}>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={shows}
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
            </ScrollView>
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
        height: 50,
        padding: 10
    },
})