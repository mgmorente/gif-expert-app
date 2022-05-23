import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['ronaldo'])
    
    return (
        <>
            <label className='fs-2 fw-bold'>Buscador</label>
            <AddCategory setCategories={setCategories} />
            <hr />
            {categories.map(category => <GifGrid key={category} category={category} />)}
        </>
    )
}
