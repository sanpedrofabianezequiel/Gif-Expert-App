import React, {useEffect, useState} from 'react';
import {getGifs} from '../helpers/getGifs';


//Get All Data and set this information inside Hooks

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data:[],
        loading:true
    });



    useEffect(() => {
        getGifs(category)
            .then((x)=>{
                setState({
                    data:x,
                    loading:false
                });
            });
            
    }, [category]);

    return state;
}
