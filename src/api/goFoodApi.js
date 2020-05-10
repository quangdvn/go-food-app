import axios from 'axios';

const goFoodApi = axios.create({
    baseURL: 'https://quangdvn-go-food.herokuapp.com/api'
});

export default goFoodApi;