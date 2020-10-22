import React, { useContext } from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { AppContext } from '../../context/AppContext';
import { useShows } from '../../hooks/useShows';



export default function ShowList() {
    const { shows } = useShows();
    const { dispatch } = useContext(AppContext);


    return (
        <>
            <ScrollView vertical>
                <View style={styles.listStyle}>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={shows.sort((a, b) => "" + a.name.localeCompare(b.name))}
                        renderItem={
                            ({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => dispatch({ type: "setItemSelected", payload: item.id })}>
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