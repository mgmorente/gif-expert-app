import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['ronaldo'])
    
    return (
        <>
            <label className='fs-2 fw-bold animate__animated animate__tada'>Buscador</label>
            <AddCategory setCategories={setCategories} />
            <hr />
            {categories.map(category => <GifGrid key={category} category={category} />)}
        </>
    )
}
