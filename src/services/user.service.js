import handleResponse from '@/helpers/handleResponse';
// How it should be
// const apiUrl = process.env.VUE_APP_API_URL;

const apiUrl = 'http://localhost:8080'

const axios = require('axios');

const getUsers = () => {
    console.log("Getting users");
    return axios.get(apiUrl + '/user').then(handleResponse);
}

const postUser = (user) => {
    return axios.post(apiUrl + '/user', user).then(handleResponse);
}

const putUser = (id, user) => {
    return axios.put(apiUrl + '/user/' + id, user).then(handleResponse);
}

const deleteUser = (id) => {
    return axios.delete(apiUrl + '/user/' + id).then(handleResponse);
}

export const userService = {
    getUsers,
    postUser,
    putUser,
    deleteUser
};
