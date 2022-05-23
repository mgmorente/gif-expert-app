import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CardGif from './CardGif';

const GifGrid = ({ category }) => {
    const key = 'mDakXXWPvZIWXuoWHEVnBiwVNrTPGuMP';
    const api = `http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=10`

    const [images, setImages] = useState([])

    useEffect(() => {
        getImages();
    }, [category])


    const getImages = async () => {
        const resp = await fetch(api);
        const { data } = await resp.json();
        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
        setImages([...gifs])
    }

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