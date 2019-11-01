import React from 'react'
import { Select, MenuItem, OutlinedInput } from '@material-ui/core'

const SimpleSelect = ({ values, selectedValue, onChange }) => {
    return (
        <Select
            displayEmpty
            value={selectedValue}
            onChange={onChange}
            className='simple-select'
            input={<OutlinedInput  />}
            labelWidth={0}
            >
            <MenuItem value='' disabled>Select</MenuItem>
            {
                values.map ((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)
            }
        </Select>
    )
}

export default SimpleSelect
