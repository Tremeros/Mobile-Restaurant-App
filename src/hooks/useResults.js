import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setisLoading] = useState(false);

    const searchApi = async (searchTerm) => {
        setisLoading(true);
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'New York City'
                    // location: 'Łódź'
                }
            });
            setisLoading(false);
            setResults(res.data.businesses);
        } catch (error) {
            setisLoading(false);
            setError('Something went wrong. Please try again later.');
        }
    }

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return {
        term,
        results,
        isLoading,
        error,
        searchApi,
        setTerm,
        filterResultsByPrice
    }
}