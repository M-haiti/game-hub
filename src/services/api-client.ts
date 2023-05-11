import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ff3fd0c0188d47238ea98e9b59eb672a'
    }
})