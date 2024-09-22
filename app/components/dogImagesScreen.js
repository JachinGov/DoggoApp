// RandomDog.js
import React, { useEffect, useState } from 'react';
import { View, Image, Button, ActivityIndicator, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const RandomDog = () => {
    const [dogImage, setDogImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRandomDogImage = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();

            if (data.status === 'success') {
                setDogImage(data.message);
            } else {
                throw new Error('Failed to fetch dog image');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomDogImage();
    }, []);

    if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
    if (error) return <Text>Error: {error}</Text>;

    return (
        <View style={styles.container}>
            <Image source={{ uri: dogImage }} style={styles.image} />
            <TouchableOpacity  style={styles.customButton} onPress={fetchRandomDogImage}>
                <Text style={styles.buttonText}>Get Another Dog</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#0d98ba',
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    customButton: {
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
    },
    buttonText: {
        color: 'white', // Set text color to white
        fontSize: 16,
        fontWeight: 'bold',
      },
});


