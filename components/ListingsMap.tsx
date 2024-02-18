import React from 'react';
import { View } from 'react-native';
import { ListingGeo } from '@/interfaces/ListingGeo';
import MapView, { Marker } from 'react-native-maps';

interface Props {
  listings: ListingGeo[];
  categoryFilter: string;
}

const ListingsMap = ({ listings, categoryFilter }: Props) => {
  // Filter listings based on the selected category
  const filteredListings = categoryFilter ? listings.filter(listing => listing.categories.includes(categoryFilter)) : listings;

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} initialRegion={{


        latitude: 20,
        longitude: 77,
        latitudeDelta: 10,
        longitudeDelta: 10,
      }}>
        {filteredListings.map(listing => (
          <Marker
            key={listing.id}
            coordinate={{ latitude: parseFloat(listing.latitude), longitude: parseFloat(listing.longitude) }}
            title={listing.name}
            description={listing.description}
          />
        ))}
      </MapView>
    </View>
  );
};

export default ListingsMap;

