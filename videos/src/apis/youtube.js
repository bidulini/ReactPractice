import axios from 'axios';

const KEY = "AIzaSyA6CW0N_Qet6L07Ozy4pHYImlp-iwaLNsY";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});


