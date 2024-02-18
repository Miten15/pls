import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { useAuth, useUser } from '@clerk/clerk-expo';
const Page = () => {
    const { signOut, isSignedIn } = useAuth();
    return (
        <View>
            <TouchableOpacity onPress={() => signOut()}>
                <Text>Log Out</Text>
            </TouchableOpacity>
            {!isSignedIn && (
                <Link href={'/(modals)/login'}>
                <Text>Login</Text>
            </Link>
            
            )}
        </View>
    );
};

export default Page;
