import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultDetail = ({ result }) => {
    const { name, image_url, rating, review_count } = result;
    const img = image_url ? image_url : 'asset:/no-image.jpg';

    return (
        <View style={styles.container}>
          <Image style={styles.imageStyle} source={{ uri: img }} />
          <Text style={styles.name}>{name}</Text>
          <Text>{rating} Stars, {review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultDetail;