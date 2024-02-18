import { View, Text ,StyleSheet,Image,ScrollView, Dimensions} from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import ListingsData from '@/assets/data/Events-listingvertical.json';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';


const IMG_HEIGHT = 300;
const {width} = Dimensions.get('window');

const Page = () => {
    const { id } = useLocalSearchParams<{id: string}>();
    const listing  = (ListingsData as any[]).find((item) => item.id === id);
     


  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={require('@/assets/download.jpg')} style={styles.image}/>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{listing.name}</Text>
          <Text style={styles.location}>
            {listing.venue}
          </Text>
          <Text style={styles.rooms}>
            {listing.date}
          </Text>
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Text style={styles.ratings}>
              {listing.categories}
            </Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.hostView}>
            <Image source={{ uri: listing.host_picture_url }} style={styles.host} />

            <View>
              <Text style={{ fontWeight: '500', fontSize: 16 }}>Hosted by {listing.host}</Text>
              {/* <Text>Host since {listing.host}</Text> */}
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.description}>{listing.description}</Text>
        </View>



      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  image:{
    height:IMG_HEIGHT,
    width,
  },
  infoContainer: {
    padding: 24,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'mon-sb',
  },
  location: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'mon-sb',
  },
  rooms: {
    fontSize: 16,
    color: 'grey',
    marginVertical: 4,
    fontFamily: 'mon',
  },
  ratings: {
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'grey',
    marginVertical: 16,
  },
  host: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'grey',
  },
  hostView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  footerText: {
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  footerPrice: {
    fontSize: 18,
    fontFamily: 'mon-sb',
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  header: {
    backgroundColor: '#fff',
    height: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor:'grey',
  },

  description: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'mon',
  },
});

export default Page