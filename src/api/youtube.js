import axios from 'axios'

const KEY = 'AIzaSyChERxo6PmXQhrhzkavcJhDB0y2yOZGl38'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})