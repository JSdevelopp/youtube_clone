
// Need this line to access the API from 'RapidAPI'

import axios from "axios";


export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
  


const options = {
  
  params: {
    maxResults:50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

// This line allow us to call details to each file from RapidAPI

// Call the youtube API, and then pass the dynamic url and then call it from within any companent that is needed.

export const fetchFromAPI = async (url) =>{
   const {data} = await axios.get(`${BASE_URL}/${url}`,options);

   return data;
};






