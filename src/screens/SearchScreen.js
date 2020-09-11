import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
	const [ term, setTerm ] = useState('');
	const [ searchApi, results, error ] = useResults();
	const filterResultsByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};
	return (
		<View style={{ flex: 1 }}>
			{/* 		<> */}
			<SearchBar
				term={term}
				onChangeTerm={(newTerm) => setTerm(newTerm)}
				onTermSubmit={() => {
					if (term !== '') {
						searchApi(term);
					}
				}}
			/>
			{error ? <Text>{error}</Text> : null}
			<ScrollView>
				<ResultsList /* navigation={navigation} */ results={filterResultsByPrice('$')} title='Cost Effective' />
				<ResultsList /* navigation={navigation} */ results={filterResultsByPrice('$$')} title='Bit Pricier' />
				<ResultsList /* navigation={navigation} */ results={filterResultsByPrice('$$$')} title='Big Spender' />
				<ResultsList /* navigation={navigation} */ results={filterResultsByPrice('$$$$')} title='Very Costly' />
			</ScrollView>
			{/* </> */}
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
