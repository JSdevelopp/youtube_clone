// Run 'RAFCE' for simple Navbar compnent structure

import React from 'react'

import { Stack } from '@mui/material';

import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';

import SearchBar from './SearchBar';

const Navbar = () => (
  
  // 'p' means for padding; 'sx' is for styles from css but built in from mui system
  // As a CSS utility, the Stack component also supports all system properties. You can use them as props directly on the component.

  <Stack direction ='row' 
  alignItems='center' 
  p={2} 
  sx={{position:'sticky',background:'#000',top: 0,justifyContent:'space-between'}}>

    <Link to='/' style={{display:'flex',alignItems:'center'}}>
      <img src={logo} alt='logo' height={45} />
   
    </Link>
    <SearchBar />
  </Stack>
  
);

export default Navbar