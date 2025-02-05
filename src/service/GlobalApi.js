import {create} from 'apisauce';

const api = create({
  baseURL: 'https://newsapi.org/v2',
});

const apiKey = '?country=us&apiKey=4d70e317f44a4f40b70c0e303777160b';
const getTopHeadline = api.get('/top-headlines' + apiKey);
const getByCategories = (category)=>api.get('/everything?q='+category+'&apiKey=4d70e317f44a4f40b70c0e303777160b')

export default {
  getTopHeadline,
  getByCategories
};
