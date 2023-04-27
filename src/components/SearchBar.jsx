import React from 'react'

// Add {} for importing materials 
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Paper, IconButton} from '@mui/material';

import {Search} from '@mui/icons-material';

const SearchBar = () => {

  // Use state string
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    // Must use this key here to not reload to submit a form 
    e.preventDefault();

    // Check search form exist
    if(searchTerm){
      // Navigate to that direct url. If search term is used (useState), then navigate to that search
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');

    }
  }
  return (
    // Paper is a simple div that has a white mini bar to put any components for functions. In this case, this is for the searchbar feature that helps. Also, you would need to create the component = 'form' to make user functionality of searching
    <Paper
    component='form'
    onSubmit={onhandleSubmit}
    // pl is padding left. mr is margin right setting for small devices
    sx= {{borderRadius:20,border: '1px solid #e3e3e3',pl:2,boxShadow: 'none',mr: {sm:5}}}
    >
    <input 
    className='search-bar'
    placeholder='Search '
    value={searchTerm}
    onChange={(e) =>setSearchTerm(e.target.value)}
    />
    <IconButton type='submit' sx={{p:'10px',color:'red'}}>
        <Search /> 
    </IconButton>
    </Paper>
  )
}

export default SearchBar

