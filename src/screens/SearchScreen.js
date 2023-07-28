import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import Loading from '../components/Loading';

const SearchScreen = () => {

  const {
    term,
    isLoading,
    error,
    searchApi,
    setTerm,
    filterResultsByPrice
  } = useResults();

  return <View style={styles.searchScreenBackground}>
    <SearchBar
      term={term}
      onTermChange={newTerm => setTerm(newTerm)}
      onTermSubmit={() => searchApi(term)} />
    {error ? <Text>{error}</Text> : null}
    {isLoading ? <Loading /> :
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
        <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
      </ScrollView>}
  </View>
}

const styles = StyleSheet.create({
  searchScreenBackground: {
    backgroundColor: '#fff',
    flex: 1
  }
});

export default SearchScreen;