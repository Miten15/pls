import {View, Text} from 'react-native'
import React from 'react'
import { Tabs, useLocalSearchParams } from 'expo-router'

const Page = () => {
    const {id} = useLocalSearchParams();
    console.log("~ file: [id].tsx:7 ~ Page ~ id:", id);
    return (
        <View>
            <Text>ye</Text>
        </View>
    )
}

export default Page;