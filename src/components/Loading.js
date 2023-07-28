import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native';

const Loading = ({
    size = 'large'
}) => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator size={size} />
            <Text>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Loading;