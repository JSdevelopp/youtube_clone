import React from 'react'

import {Link} from 'react-router-dom'

import {Typography, Card, CardContent, CardMedia} from '@mui/material'

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'


const VideoCard = ({video: {id: {videoId}, snippet }}) => (
    
    // This is to test and see what is passing through in the console log. In this case the VideoId and snippet/ information. 
    // console.log(videoId, snippet);
     
        <Card sx={{width:{ xs: '100%',sm: '358px', md:'320px'}, boxShadow:'none', borderRadius: 0}}>
            {/* Making an if then statement of ; If videoId exists {videoId ? } then go to `/video/${videoId}if not (:) then go to the demoVideoUrl}*/}
            <Link to={videoId? `/video/${videoId}`:
            demoVideoUrl}>
            {/* Put '?' before listing what is on the cardmedia, so it would be undefined */}
            <CardMedia 
            
            image ={snippet?.thumbnails?.high?.
            url || demoThumbnailUrl} alt={snippet?.title} 
            // this is to show the thumbnails with the videoID
            sx= {{width: {xs: '100%', sm: '358px' }, height:180}}
            />
            </Link>

            <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
            <Link to={videoId? `/video/${videoId}`:
            demoVideoUrl}>
                <Typography varient = 'subtitle1' fontWeight='bold' color='#fff'>
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            


            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl}>
                <Typography varient = 'subtitle2' color='grey'>
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircleIcon sx= {{fontSize:'12px', color: 'grey', ml: '5px'}}/>
                </Typography>
            </Link>
            </CardContent>

        </Card>

  )


export default VideoCard

