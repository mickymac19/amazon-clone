import axios from "axios"; 

const instance = axios.create({
    baseURL: 'https://us-central1-clone-540b7.cloudfunctions.net/api'
    //'http://localhost:5001/clone-540b7/us-central1/api' The API (cloud function) URL

    
});

export default instance; 

