import React, { useState ,useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

import {getGifs} from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {


    //const [count,setCount] = useState(0);
    const {data:images , loading} = useFetchGifs(category);


   
    

    return (
        <>
            <h3 className="card animate__animated animate__bounce "> {category}</h3>
            <div className="card-grid">
            { loading ? <p className="animate__animated animate__flash ">Loading...</p>: null }    
                
                
                
                <ol>
                    {
                        images.map( (img)=> (
                            <GifGridItem key = {img.id}  {...img} />
                        ))
                    }
                </ol>
            </div>
        </>        
    )
}
