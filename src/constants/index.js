import cloneDeep from 'clone-deep'
import { generateAccountNumbers } from '../utils'
import { countryCodes } from './country-codes'

export const getSelectOptions = (typeStr) => {

    const type = typeStr.split('.')
    const accountNumbers = generateAccountNumbers(1000)

    const optionsObj = {
        lhs: [
            'Account',
            'Country',
            'Campaign Name',
            'Revenue'
        ],
        operator: {
            account: [
                'Contains',
                'Not contains'
            ],
            country: [
                'Contains',
                'Not contains'
            ],
            campaignName: [
                'Starts with',
                'Contains',
                'Not contains'
            ],
            revenue: [
                '>',
                '<',
                '>=',
                '<=',
                '=',
                '!='
            ]
        },
        rhs: {
            account: accountNumbers,
            country: countryCodes,
            campaignName: '',
            revenue: ''
        }
    }

    let options = cloneDeep(optionsObj)

    type.forEach (t => options = options[t])
    return options

}
