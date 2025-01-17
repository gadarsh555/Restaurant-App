import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
	const [ result, setResult ] = useState(null);
	const id = navigation.getParam('id');
	/* console.log(result); */
	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};
	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}
	return (
		<View style={{ flex: 1 }}>
			<Text style={styles.title}>{result.name}</Text>
			<FlatList
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image source={{ uri: item }} style={styles.image} />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		height: 180,
		width: 300,
		margin: 10,
		alignSelf: 'center',
		borderRadius: 10
	},
	title: {
		fontSize: 22,
		textAlign: 'center',
		color: 'blue',
		fontWeight: '700'
	}
});

export default ResultsShowScreen;
