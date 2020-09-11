import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={result.image_url ? { uri: result.image_url } : null} />
			<Text style={styles.name}>{result.name}</Text>
			<Text>
				{result.rating} Stars, {result.review_count} Reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 10
	},
	image: {
		width: 250,
		height: 150,
		borderRadius: 5,
		margin: 5
	},
	name: {
		fontWeight: 'bold'
	}
});

export default ResultsDetail;
