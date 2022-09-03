import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/search/photos",
    headers: {
        Authorization: 'Client-ID yjQ39vBjXGt6Uic0t_zpJSkXNP89VBPyESWavbPQMEU'
    }
});