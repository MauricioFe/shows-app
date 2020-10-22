import React, { useContext } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { AppContext } from '../../context/AppContext'

export default function ShowDetail() {
    const { state } = useContext(AppContext);
    const { name, country, network, image_thumbnail_path } = state.itemSelected ? state.showList.find(item => item.id === state.itemSelected) :
        {
            name: "",
            country: "",
            network: "",
            image_thumbnail_path: ""
        };
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text>Nome:{name}</Text>
                    <Text>Country:{country}</Text>
                    <Text>Network:{network}</Text>
                </View>
                <Image
                    style={styles.imageShow}
                    source={{ uri: image_thumbnail_path }}
                />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    imageShow: {
        height: 200,
        width: 120,
        marginTop: 15
    },

})