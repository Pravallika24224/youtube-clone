import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"
const options = {
  method: 'GET',
  params: {hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
console.log(process.env.REACT_APP_YOUTUBE_API_KEY)
export const fetchDataFromAPI = async(url) => {
  const response =  await axios.get(`${BASE_URL}/${url}`, options)
  return response?.data
}
