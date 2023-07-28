import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native';
import useGetDetails from '../hooks/useGetDetails';
import Loading from '../components/Loading';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { result, isLoading, error } = useGetDetails(id);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ?
        <Loading /> :
        <>
          <Text>{result.name}</Text>
          <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
              return <Image style={styles.image} source={{ uri: item }} />
            }} />
        </>}
      {error ? <Text>{error}</Text> : null}
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
  image: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;