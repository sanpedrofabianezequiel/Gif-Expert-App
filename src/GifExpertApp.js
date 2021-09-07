import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import PropTypes from 'prop-types';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);


   /*const handleAdd= ()=>{
        setCategories( x => [...x, 'HunterXHunter'])
    };*/


    return (
        <>
        
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            

            <ol>
                {
                    categories.map( (x)=>
                        ( 
                            <GifGrid key={x} category={x}  />
                        )
                    )
                }
            </ol>-
        </>
    )

    AddCategory.prototype = {
        setCategories : PropTypes.func.isRequired
    }

}
