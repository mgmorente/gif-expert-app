import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const addCategory = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length === 0) return;
        setCategories(cat => [inputValue, ...cat]);
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <span className="input-group-text" id="addon-wrapping">😃</span>
                <input type="text" value={inputValue} className='form-control' onChange={addCategory} />
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}    

