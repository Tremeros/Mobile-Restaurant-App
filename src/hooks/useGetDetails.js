import { useState, useEffect } from 'react';
import yelp from "../api/yelp";

export default (id) => {
    const [result, setResult] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getDetails(id);
    }, []);

    const getDetails = async (id) => {
        setIsLoading(true);
        try {
            const response = await yelp.get(`${id}`);
            setResult(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }

    return {
        result,
        isLoading,
        error
    }
}
