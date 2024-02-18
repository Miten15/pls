import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, ToastAndroid } from 'react-native';
import { app } from '@/firebaseConfig';
import { DocumentData, collection, getDocs, getFirestore, addDoc } from 'firebase/firestore';
import { FirebaseApp } from 'firebase/app';
import { Formik } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, UploadResult } from "firebase/storage";

const getFirestoreInstance = (app: FirebaseApp) => {
  return getFirestore(app);
};

const storage = getStorage(); // Initialize Firebase Storage

const Add = () => {
  const [image, setImage] = useState<string>('');
  const [categoryList, setCategoryList] = useState<DocumentData[]>([]);
  const db = getFirestoreInstance(app);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    const querySnapshot = await getDocs(collection(db, 'Category'));
    const tempCategoryList: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      console.log("Docs:", doc.data());
      tempCategoryList.push(doc.data());
    });
    setCategoryList(tempCategoryList);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 4],
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onsubmitMethod = async (values: {
    evntname?: string;
    desc?: string;
    category?: string;
    venue?: string;
    price?: string;
    image: any;
    phoneno?: string;
    Email_id?: string;
    Host?: string;
    date?: string;
  }) => {
    try {
      let imageUrl = '';

      if (typeof values.image !== 'string') {
        const resp = await fetch(values.image);
        const blob = await resp.blob();
        const storageRef = ref(storage, 'Events/' + Date.now() + ".jpg");
        const snapshot = await uploadBytes(storageRef, blob) as UploadResult;
       // imageUrl = await snapshot.ref.getDownloadURL(); // Use getDownloadURL method
      } else {
        imageUrl = values.image;
      }

      await addDoc(collection(db, 'Events'), { ...values, image: imageUrl });

      console.log("Event added successfully!");
      ToastAndroid.show('Event added successfully!', ToastAndroid.SHORT);
    } catch (error) {
      console.error("Error adding event: ", error);
      ToastAndroid.show('Failed to add event!', ToastAndroid.SHORT);
    }

    // Reset form fields
    setImage('');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontFamily: 'bold' }}>ADD A NEW EVENT</Text>
        <Formik
          initialValues={{ evntname: '', desc: '', category: '', venue: '', price: '', image: '', phoneno: '', Email_id: '', Host: '', date: '' }}
          onSubmit={values => onsubmitMethod(values)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder='Event Name'
                value={values?.evntname}
                onChangeText={handleChange('evntname')}
              />
              <TextInput
                style={styles.input}
                placeholder='Description'
                value={values?.desc}
                numberOfLines={5}
                onChangeText={handleChange('desc')}
              />
              <TextInput
                style={styles.input}
                placeholder='Price'
                value={values?.price}
                keyboardType='number-pad'
                onChangeText={handleChange('price')}
              />
              <TextInput
                style={styles.input}
                placeholder='Category'
                value={values?.category}
                onChangeText={handleChange('category')}
              />
              <TextInput
                style={styles.input}
                placeholder='Venue'
                value={values?.venue}
                onChangeText={handleChange('venue')}
              />
              <TextInput
                style={styles.input}
                placeholder='Phone Number'
                value={values?.phoneno}
                keyboardType='number-pad'
                onChangeText={handleChange('phoneno')}
              />
              <TextInput
                style={styles.input}
                placeholder='Email Address'
                value={values?.Email_id}
                onChangeText={handleChange('Email_id')}
              />
              <TextInput
                style={styles.input}
                placeholder='Date'
                value={values?.date}
                onChangeText={handleChange('date')}
              />
              <TextInput
                style={styles.input}
                placeholder='Host'
                value={values?.Host}
                onChangeText={handleChange('Host')}
              />
              <TouchableOpacity onPress={pickImage}>
                <Text style={{ fontSize: 17, marginBottom: 5 }}>ADD IMAGES OF THE EVENT</Text>
                {image ?
                  <Image source={{ uri: image }} style={{ width: 500, height: 500, borderRadius: 20 }} />
                  : <Image source={require('@/assets/images/placeholder.jpg')} style={{ width: 500, height: 500, borderRadius: 20 }} />
                }
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSubmit} style={{ padding: 10, borderRadius: 10, backgroundColor: '#000', marginTop: 20 }}>
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, fontFamily: 'bold' }}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 17,
    fontSize: 17,
    marginTop: 10,
    marginBottom: 5,
    color: "grey",
  }
});

export default Add;
