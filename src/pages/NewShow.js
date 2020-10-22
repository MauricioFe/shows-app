import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Input from "../components/Form/Input";
import { AppContext } from '../context/AppContext';
export default function NewShow() {
    const [name, setName] = useState("");
    const [network, setNetwork] = useState("");
    const [country, setCountry] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const { dispatch } = useContext(AppContext);
    const salvar = () => {
        const action = {
            type: "addItem",
            payload: {
                id:4228,
                name,
                network,
                country,
                image_thumbnail_path: thumbnail,
            }
        };
        dispatch(action);
    }
    return (
        <View style={styles.container}>
            <Input label={"Nome: "} initialValue={""} onChange={(text) => setName(text)} />
            <Input label={"network: "} initialValue={""} onChange={(text) => setNetwork(text)} />
            <Input label={"country: "} initialValue={""} onChange={(text) => setCountry(text)} />
            <Input label={"thumbnail: "} initialValue={""} onChange={(text) => setThumbnail(text)} />
            <Button title={"Salvar"} onPress={() => salvar()} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50,
        marginEnd:10,
        marginStart:10
    },
})