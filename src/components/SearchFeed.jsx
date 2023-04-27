
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import {useParams} from 'react-router-dom'
import React from 'react'

// Just use './' because we are already in the components section
import  {Videos}  from './';


import { fetchFromAPI } from '../utils/fetchFromAPI';

// Use stack to wrap the side bar and main bar of the site
const SearchFeed = () => {
  const [videos,setVideos]=useState([]);
  const {searchTerm} = useParams();


  useEffect(()=>{
    // Will racall this function everytime we change a name
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
  },[searchTerm]);


  return (
    <Box p={2} sx={{overflowY:'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
         Search Results for: <span style = {{color:'#f31503'}}>{searchTerm}</
         span> videos
         
        </Typography>

        <Videos videos={videos} />
      </Box>
  
  )
};
  


export default SearchFeed;


