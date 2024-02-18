import React, { useState } from 'react';
import { View } from 'react-native';
import ListingsMap from '@/components/ListingsMap';
import { ListingGeo, listingGeo } from '@/interfaces/ListingGeo'; // Importing the listingGeo data from ListingGeo.tsx
import { Stack } from 'expo-router';
import ExploreHeader from '@/components/ExploreHeader';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Text } from '@/components/Themed';
import { Callout } from 'react-native-maps';
import { StyleSheet } from 'react-native';




const App = () => {
  const [category, setCategory] = useState<string>('');

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  const [selectedMarker, setSelectedMarker] = useState<ListingGeo | null>(null); // Specify the type of selectedMarker

  const handleMarkerPress = (marker: ListingGeo) => { // Specify the type of the marker parameter
    setSelectedMarker(marker);
  };

  const handleMapPress = () => {
    setSelectedMarker(null);
  };

  const filteredMarkers = category
    ? listingGeo.filter((marker) => marker.categories.includes(category))
    : listingGeo;

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <MapView
        style={{ flex: 1 }}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 20.5937, // Default latitude for India
          longitude: 78.9629, // Default longitude for India
          latitudeDelta: 15, // Zoom level
          longitudeDelta: 15, // Zoom level
        }}
      >
        {filteredMarkers.map((marker, index) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: parseFloat(marker.latitude), longitude: parseFloat(marker.longitude) }}
            onPress={() => handleMarkerPress(marker)}
          >
            <Callout>
              <Text>{marker.name}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
      {selectedMarker && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Name: {selectedMarker.name}</Text>
          <Text style={styles.infoText}>Description: {selectedMarker.description}</Text>
          <Text style={styles.infoText}>Host: {selectedMarker.host}</Text>
          <Text style={styles.infoText}>Venue: {selectedMarker.venue}</Text>
          <Text style={styles.infoText}>ID: {selectedMarker.id}</Text>
          <Text style={styles.infoText}>Gate: {selectedMarker.date}</Text>
          <Text style={styles.infoText}>Categories: {selectedMarker.categories.join(', ')}</Text>
          <Text style={styles.infoText}>Price: {selectedMarker.price}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  infoText: {
    marginBottom: 5,
  },
});

export default App;
