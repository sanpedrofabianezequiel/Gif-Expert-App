import React, { useState } from 'react'

export const AddCategory = ( {setCategories}) => {

    const [inputValue,setInputValue ] = useState('');


    const handleInputChange= (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit=(e) =>{
        e.preventDefault();
        //console.log('Submit Hecho')
        if( inputValue.trim().length > 2){
            setCategories( cats => [ inputValue,  ...cats ] );
            setInputValue('');//clean input
        }
    }
    return (
        <>
          <form onSubmit= {handleSubmit}>
            <input
                    type="text"
                    value= { inputValue }
                    onChange = { handleInputChange }
            />      
          </form>      
        </>
    )
}
