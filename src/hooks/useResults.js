import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [ results, setResults ] = useState([]);
	const [ error, setError ] = useState('');

	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'delhi'
				}
			});
			await setResults(response.data.businesses);
			setError('');
		} catch (err) {
			setError('Something went wrong');
		}
	};

	useEffect(() => {
		searchApi('pasta');
	}, []);
	return [ searchApi, results, error ];
};
