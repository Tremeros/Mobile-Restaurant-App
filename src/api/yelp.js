import axios from 'axios';
import { API_KEY, PROTOCOL, VERSION, URL } from "@env"

export default axios.create({
    baseURL: `${PROTOCOL}://${URL}/${VERSION}/businesses`,
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
});