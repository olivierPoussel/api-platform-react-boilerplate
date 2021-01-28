import axios from 'axios';

const url = "http://localhost:8000/api/";

function create(user) {
    return axios
        .post(url+"users", user)
        //.then(response => console.log(response.data))
        ;
}

export default {
    create
}