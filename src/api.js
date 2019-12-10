
import axios from 'axios'

export const getPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
export const getAddresType = ()=>axios.get(`/getaddresstype`);