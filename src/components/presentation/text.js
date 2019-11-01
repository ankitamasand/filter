import React from 'react'
import { TextField } from '@material-ui/core'

const Text = ({ value, onChange, type = 'text', step='any' }) => {
    return (
        <TextField
            defaultValue={value}
            type={type}
            onChange={onChange}
            step={step}
            margin='normal'
            variant='outlined'
            className='material-textfield'
        />
    )
}

export default Text
