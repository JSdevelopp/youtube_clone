import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import React from 'react'

// Just use './' because we are already in the components section
import  {Sidebar, Videos}  from './';


import { fetchFromAPI } from '../utils/fetchFromAPI';

// Use stack to wrap the side bar and main bar of the site
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos,setVideos]=useState([]);


  useEffect(()=>{
    // Will racall this function everytime we change a name
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items))
  },[selectedCategory]);


  return (
    // md is medium devices or higher that are row layout but smaller devices aree column layout of feed. You have specify the sizes and layout for medium-bigger devices and mobile devices
    <Stack sx={{flexDirection: {sx: 'column', md:'Row' }}}>
      {/* 92vh is verticl height for medium or larger devices of the dark background*/}
      <Box sx={{height : {sx:'auto', md: '92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md: 2 }}}>
      <Sidebar selectedCategory = {selectedCategory} setSelectedCategory ={setSelectedCategory}
      />
      {/* Typograhphy is used for all text elements like p tags and headings */}
        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
        Copyright 2022 @Elysium Media
        </Typography>
      </Box>
      
      <Box p={2} sx={{overflowY:'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          {selectedCategory} <span style = {{color:'#f31503'}}>
          videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;