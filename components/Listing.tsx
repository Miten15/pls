import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Link } from 'expo-router';

interface ListingItem {
  id: number;
  name: string;
  thumbnail_url: string;
  date: string;
  price: string;
}

interface Props {
  listings: ListingItem[];
  category: string;
}

const Listings: React.FC<Props> = ({ listings, category }) => {
  return (
    <FlatList
    showsVerticalScrollIndicator={false}
      data={listings}
      renderItem={({ item }) => (
        <Link href={`/listing/${item.id}`} asChild>
          <TouchableOpacity style={styles.listItem}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.thumbnail_url }} style={styles.image} />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.joinText}>Join</Text>
            </View>
          </TouchableOpacity>
        </Link>
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal={false}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
  },
  imageContainer: {
    width: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  joinText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});

export default Listings;