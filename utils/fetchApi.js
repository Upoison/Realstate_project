import axios from 'axios';

export const baseUrl = 'http://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '090451c681msh7d97847d0a20ab3p11e19cjsnb70e152cdf0d'
        }
    });

    return data;
}