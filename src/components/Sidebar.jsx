import React from 'react'

import { Stack } from '@mui/material';

import { categories } from '../utils/constants';


// Everytime we click on each category on the sidebar, it will highlight with changing the name of each category
const Categories = ({selectedCategory, setSelectedCategory}) => (
  
<Stack 
direction ='row'
sx={{overflow:'auto',
height:{sx: 'auto', md:'95%'},
flexDirection: {md: 'column'},}}
>
    {/* Calling an existing array (categories) from constants with instant return of =>(). This is mapping/"Labeling" the array from the catagories on the sidebar*/}
    {categories.map((category)=> (
    <button 
    className='category-btn'
    onClick={()=>setSelectedCategory(category.name)}
    // You must write the const of seleceted category for it to highlight each button. Then, under in line 'style' of button, you must create a if then statement. 

    // The if then statement for javascript React is; "If class(category.name) {Remeber we set it up for only highlighting 'New'} is true(===) then(&&) make it '#FC1503"
    style={{
        background: category.name===selectedCategory && '#FC1503', color:'white',
    }}
    // Whenever we are mapping something, we must give each property of buttons a 'key'
    key={category.name}
    >
        {/* Each button rendering */}
        {/* each button while have the Span element of small containers: The <span> tag is an inline container used to mark up a part of a text, or a part of a document.  */}

        {/* If then statement of making the other logos of the sidebar red and else white when hover over. 
        class(color.categoryname) is equal (===) to (selectedCategory) then make it ? ('white') else : make it ('red') naturally   */}
        <span style = {{color:category.name === selectedCategory ? 'white':'red',marginRight:'15px'}}>
            {category.icon}
        </span>

        <span style={{opacity: category.name === selectedCategory ? '1': '0.8'}}>
            {category.name}
        </span>

    </button>))}
</Stack>

    );

export default Categories;


