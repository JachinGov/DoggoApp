import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setBreeds, setLoading, setError } from '../redux/store/store';

export const BreedListScreen = () => {
    const dispatch = useDispatch();
    const { breeds, loading, error } = useSelector((state) => state.breeds);
    const [selectedBreed, setSelectedBreed] = useState(null);
    const [breedImage, setBreedImage] = useState(null);

    useEffect(() => {
        const fetchBreeds = async () => {
            dispatch(setLoading(true));
            try {
                const response = await axios.get('https://dog.ceo/api/breeds/list/all');
                const breedList = Object.keys(response.data.message);
                dispatch(setBreeds(breedList));
            } catch (error) {
                dispatch(setError('Failed to load breeds.'));
            }
        };

        fetchBreeds();
    }, [dispatch]);

    const handlePress = async (breed) => {
        setSelectedBreed(breed);
        try {
            const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
            setBreedImage(response.data.message);
        } catch (error) {
            dispatch(setError('Failed to load breed image.'));
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={breeds}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
                        <Text style={styles.itemText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
            {breedImage && (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: breedImage }} style={styles.image} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#0d98ba',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8d7da',
    },
    errorText: {
        color: '#721c24',
        fontSize: 18,
    },
    item: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    itemText: {
        fontSize: 18,
    },
    imageContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
});







