import { View } from 'react-native';
import React, { useMemo, useState } from 'react';

import { Stack } from 'expo-router';
import ExploreHeader from '@/components/ExploreHeader';
import Listings from '@/components/Listing';
// Root component file, such as App.js or index.js




const Page = () => {
  const items = useMemo(() => Listings as any, []);
  const [category, setCategory] = useState<string>('Tiny homes');

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      {/* Define pour custom header */}
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Listings listings={items} category={category} />
    </View>
  );
};

export default Page;