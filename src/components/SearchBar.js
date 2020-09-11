import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onChangeTerm, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name='search' style={styles.iconStyle} />
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder='Search'
				value={term}
				onChangeText={(newTerm) => onChangeTerm(newTerm)}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#9A9A9A',
		margin: 15,
		height: 50,
		borderRadius: 5,
		flexDirection: 'row',
		marginBottom: 10
	},
	inputStyle: {
		flex: 1,
		fontSize: 19
	},
	iconStyle: {
		alignSelf: 'center',
		fontSize: 35,
		marginHorizontal: 12
	}
});

export default SearchBar;
