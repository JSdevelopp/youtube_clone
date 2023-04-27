
import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player';
import { Typography,Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import React from 'react';

import {Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null)

  // For the the set data to videos link, using useState
  const [videos, setVideos] = useState(null);

  // Fetching the video ID's to use here:
  const {id} = useParams();

  useEffect(() =>{
    // Fetching video detail data with dynamic url then sending those data to a useState variable to pass to ReactPlayer
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    // For useState
    .then((data)=>setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>setVideos(data.items));

  },[id]);

    
  // If statements when video is still loading 
  if (!videoDetail?.snippet) return 'Loading...';
  // Destructuing the videoDetail for the video data

  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail;
    

  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:'column', md: 'row'}}>
        <Box flex={1}>
          {/* This is video portion side with the comments, view, likes, and the video player  */}
          <Box sx={{width:'100%', posistion: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            // Make the video bigger and have controls for the videos
            className = "react-player" controls/>
            <Typography color = "#fff" variant = "h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction = "row" justifyContent="space-between" sx={{color: '#fff'}} py={1}px={2}>
              <Link to= {`/channel/${channelId}`}>
                <Typography variant = {{sm:'subtitle1', md:'h6' }}
                color= '#fff'>
                  {channelTitle}
                  <CheckCircle sx = {{fontSize:'12px', color:'grey',ml:'5px'}}/>
                </Typography>
              
              </Link>
              <Stack direction = "row" gap ="20px" alignItems = 'center'>
                {/* Subscriber's count with formated of millions */}
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>

            </Stack>

          </Box>

        </Box>
        <Box px={2} py={{md:1, xs:5}} justifyContent= "center" alignItems="center">
        <Videos videos={videos} direction ="column"/>

        </Box>
      </Stack>
      {/* <Box px={2} py={{md:1, xs:5}} justifyContent= "center" alignItems="center">
        <Videos videos={videos} direction ="column"/> */}

      {/* </Box> */}

    </Box>
  )
}

export default VideoDetail