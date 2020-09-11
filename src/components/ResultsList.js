import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ResultsList = ({ navigation, title, results }) => {
	if (!results.length) {
		return null;
	}
	return (
		<View style={styles.container}>
			{results.length > 0 ? <Text style={styles.title}>{title}</Text> : null}
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate('Results', { id: item.id });
							}}
						>
							<ResultsDetail result={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'red',
		marginLeft: 10
		/* marginBottom: 5 */
	},
	container: {
		marginBottom: 10
	}
});
export default withNavigation(ResultsList);
