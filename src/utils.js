import React from 'react'
import { SimpleSelect, Text, MultiSelect } from './components'
import { getSelectOptions } from './constants'

export const buildEmptyFilter = () => {
    return {
        lhs: {
            component: 'SimpleSelect',
            key: 'lhs',
            value: null
        },
        operator: {
            component: 'SimpleSelect',
            key: 'operator.account',
            value: null
        },
        rhs: {
            component: 'SimpleSelect',
            key: 'rhs.account',
            value: null
        }
    }
}

export const getComponent = ({ component, key, value }, onChange) => {
    const options = getSelectOptions(key)
    switch (component) {
        case 'SimpleSelect':
            return (
                <SimpleSelect
                    key={key}
                    selectedValue={value || ''}
                    values={options}
                    onChange={onChange}
                />
            )
        case 'MultiSelect':
            return (
                <MultiSelect
                    key={key}
                    selectedValue={value || ''}
                    values={options}
                    onChange={onChange}
                />
            )
        case 'TextBox':
            return (
                <Text
                    key={key}
                    value={value}
                    type='text'
                    onChange={onChange}
                />
            )
        case 'NumericTextBox':
            return (
                <Text
                    key={key}
                    value={value}
                    type='number'
                    onChange={onChange}
                    step='.01'
                />
            )
    }
}

export const generateAccountNumbers = (n) => {
    return new Array(n).fill(0).map((e, i) => {
        return {
            label: i+1,
            value: i+1
        }
    })
}
