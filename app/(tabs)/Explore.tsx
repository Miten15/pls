import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import ExploreHeader from '@/components/ExploreHeader';
import ListingsBottomSheet from '@/components/ListingsBottomSheet'; // Import ListingsBottomSheet component
import ListingsMap from '@/components/ListingsMap';
import { ListingGeo } from '@/interfaces/ListingGeo';
import { listingGeo } from '@/interfaces/ListingGeo';

const Page = () => {
  const geoItems: ListingGeo[] = useMemo(() => listingGeo, []);
  const [category, setCategory] = useState<string>('Tiny homes');

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <ListingsMap listings={geoItems} categoryFilter={''} />
      {/* Render ListingsBottomSheet component with correct props */}
      <ListingsBottomSheet category={category} refresh={0} listings={[]} />
    </View>
  );
};

export default Page;
