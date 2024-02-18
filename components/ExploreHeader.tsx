import React, { useRef, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


interface Category {
  name: string;
  emoji: string;
}

const categories: Category[] = [
  { name: 'Music ', emoji: '🎵' },
  { name: 'Education', emoji: '🎓' },
  { name: 'Film & Media', emoji: '🎥' },
  { name: 'Sports', emoji: '⚽' },
  { name: 'Business', emoji: '💼' },
  { name: 'Community', emoji: '👥' },
  { name: 'Health', emoji: '⚕️' },
  { name: 'Family and Relationships', emoji: '👨‍👩‍👦' },
  { name: 'Food and Drink', emoji: '🍔' },
  { name: 'Home and Lifestyle', emoji: '🏠' },
  { name: 'Design', emoji: '🎨' },
  { name: 'Gaming', emoji: '🎮' },
  { name: 'Science and Tech', emoji: '🔬' },
  { name: 'School and Education', emoji: '🏫' },
  { name: 'Holiday', emoji: '🏖️' },
  { name: 'Travel', emoji: '✈️' },

  
  // Add other categories as needed
];

interface Props {
  onCategoryChanged: (category: string) => void;
}



const ExploreHeader = ({ onCategoryChanged }: Props) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);
    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
    });
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChanged(categories[index].name);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={'/(modals)/booking'} asChild>
            <TouchableOpacity>
              <View style={styles.searchBtn}>
                <Text style={{ fontFamily: 'mon-sb', fontSize: 24 }}>🔍</Text>
                <View>
                  <Text style={{ fontFamily: 'mon-sb' }}>Where to?</Text>
                  <Text style={{ color: '#fff', fontFamily: 'mon' }}>Anywhere · Any week</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={{ fontFamily: 'mon-sb', fontSize: 24 }}>⚙️</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ width: '100%', height: 120 }}
           contentContainerStyle={{
          alignItems: 'center',
        paddingHorizontal: 16  
                 }}  
>
          <View style={{flexDirection: 'row', flex: 1, paddingTop: 4}}>
          {categories.map((item, index) => (
            <TouchableOpacity 
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              style={activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn }
              onPress={() => selectCategory(index)}>
              <Text style={{ fontSize: 24 }}>{item.emoji}</Text>
              <Text style={activeIndex === index ? styles.categoryTextActive : styles.categoryText}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
          </View>
        </ScrollView>
      </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 130,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  searchBtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 10,
    padding: 14,
    alignItems: 'center',
    width: 280,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c2c2c2',
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#A2A0A2',
    borderRadius: 24,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: '#fff',
  },
  categoryTextActive: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: '#000',
  },
  categoriesBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
    marginRight: 20, // Adjust spacing between categories
  },
  categoriesBtnActive: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    paddingBottom: 8,
    marginRight: 20, // Adjust spacing between categories
  },
  hmm: {
    flexDirection: 'row'
  }
});

export default ExploreHeader;
