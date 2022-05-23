import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CardGif from './GifCard';
import { getImages } from '../helpers/getImages';

const GifGrid = ({ category }) => {
    
    const [images, setImages] = useState([])

    useEffect(() => {
        getImages(category)
            .then(gifs => setImages(gifs))
    }, [category])

    return (
        <div className="row g-0 justify-content-center mb-5">
            <label className='fs-4 bg-secondary text-light rounded p-2'>{category}</label>
            {
                images.map(image => <CardGif key={image.id} {...image} />)
            }
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid