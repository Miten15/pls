import React, { useMemo, useState } from "react";
import { View,Text } from "react-native";
import { Link, Stack, Tabs } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listing";
import { Categories } from "emoji-picker-react";
import ListingData from "@/assets/data/Events-listingvertical.json";

const Page = () =>{

    const [category,setCategory]= useState('Tiny homes');


    const items = useMemo(() => ListingData as any,[]);

    const onDataChanged = (category: string) => {
        setCategory(category);
      };


    
    return(

        <View style={{flex:1,marginTop:130}}> 

        <Stack.Screen 
            options={{
                header: () => <ExploreHeader onCategoryChanged={onDataChanged}/>,
        }}/>

        <Listings listings={items} category={category} /> 
      
        </View>
   
    )
}

export default Page