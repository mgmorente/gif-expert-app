import React from 'react'
// import PropTypes from 'prop-types'

const CardGif = ({ id, title, url }) => {
    return (
        
            <div className="card col-md-2 m-2">
                <img src={url} className="img-fluid card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title text-secondary fs-6">{title}</h5>
                </div>
            </div>
    )
}

// CardGif.propTypes = {
//     image: PropTypes.object.isRequired
// }

export default CardGif