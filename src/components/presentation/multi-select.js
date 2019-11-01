import React from 'react'
import Select from 'react-select'

const MultiSelect = ({ values, selectedValue, onChange, styles }) => {
    return (
        <Select
            selectedValue={selectedValue}
            options={values}
            onChange={onChange}
            isMulti
            className='custom-multi-select'
        />
    )
}

export default MultiSelect
