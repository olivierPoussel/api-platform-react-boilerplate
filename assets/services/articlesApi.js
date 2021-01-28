import axios from "axios"

const url = "http://localhost:8000/api/";

axios.defaults.headers['Accept'] = 'application/json';

function findAll() {
    return axios.get(url + 'articles').then(response => response.data)
}

function getArticle(id) {
    return axios.get(url + 'articles/'+ id).then((response)=> response.data)
}

function create(article) {
    return axios.post(url + 'articles', article)
            .then((response) => response.data.id);
}


export default {
    findAll,
    getArticle,
    create,
}