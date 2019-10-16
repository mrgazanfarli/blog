import axios from 'axios';

const getAll = () => {
    return axios({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'get'
    })
}

const getOne = (id) => {
    return axios({
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        method: 'get'
    })
}

const createPost = post => {
    return axios({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'post',
        data: post
    })
}

export {
    getAll,
    getOne,
    createPost
};