import axios from 'axios';

const instances = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
});


export default instances;