import React, { useContext } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { AppContext } from '../../context/AppContext'

export default function ShowDetail() {
    const { state } = useContext(AppContext);
    const bacon = state.showList.find(item => item.id === state.itemSelected);
    console.log(bacon)
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text>Nome:{bacon.name}</Text>
                    <Text>Country:{bacon.country}</Text>
                    <Text>Network:{bacon.network}</Text>
                </View>
                <Image
                    style={styles.imageShow}
                    source={{ uri: bacon.image_thumbnail_path }}
                />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-around"
    },
    imageShow: {
        height: 200,
        width: 120,
        marginTop: 15
    }, 

})