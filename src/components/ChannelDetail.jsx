
import { useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

import { Box } from '@mui/material'

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI'


const ChannelDetail = () => {

  // We use the `useState` to set ChannelDetails page first before the data is structured on there. To use this function, we call what we want to set on a empty array, and within that array [] we write set that object we want to be set and updated which written as const [channelDetail,setChannelDetail] = useState(null).  This is for the channeldetal of `useEffect`
  const [channelDetail, setChannelDetail] = useState();

  // the line below sets up the data provided with that channel credentials, such as the subsribers and name

  // Similar to the above `useState` function, we are setting this up for videos upon the `useEffect` part below
  const [videos, setVideos] = useState([]);
  

 
   // we use `useParams` for to help return the channel 'id' and then fetching it with the values for that channel. For example, when we click on the Js Mastery channel card on main site, it will fetch the channel id within our code to then direct us to that channels' content; We create "const (destructure id)=> {id}=useParams() 
   
  const {id} = useParams();

  
// console.log(channelDetail, videos);
// Based off of that channel id, we are able to create a `useEffect` function to rerender whenever our id changes. From there we then create 2 function calls, 1 with fetching from the api (fetchFromAPI) but a different url which is for channels, once we get the url, we then write a ".then" to get the (data)=>. Once we get the data, we then want to SET up the channel detail page first before putting the detail on there. For us to do that, we must create/use the `useState` snippet to return setting the channel details. We write it like so;    " const [channelDetail, setChannelDetail] = useState(null)" Once we have that set up, we are able to continue with putting the data and items (?.items) from the api and setting it on the first channel on the list = [0].

  useEffect(() =>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data)=> setChannelDetail(data?.items[0]));

        // We can reuse/recall the fetchFromAPI component and just change the url for different type of data. Notice we also have to create a new `useState` above. "?" is setting the channelId= {id}. &order=date means to order the videos listed
    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      .then((data)=> setVideos(data?.items));
  }, [id])


  return (

    <Box minHeight="95vh">
      {/* Another box. the colorful box */}
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(70,70,173,1) 67%, rgba(0,212,255,1) 100%)',
        zIndex:10,
        height: '300px'
}}

/>

        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        {/* <ChannelCard channelDetail={channelDetail}/> */}
      </Box>
      <Box display='flex' p='2'>
        {/* Only small and higher */}
        <Box sx={{mr: {sm:'100px'}}} />
          {/* Rendering videos */}
          <Videos videos={videos}/>

        

      </Box>
    </Box>
  )
}

export default ChannelDetail;

