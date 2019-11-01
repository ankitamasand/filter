export const ComponentKeyMappings = (lhs, type) => {
    const obj = {
        Account: {
            operator: {
                component: 'SimpleSelect',
                key: 'operator.account'
            },
            rhs: {
                component: 'MultiSelect',
                key: 'rhs.account'
            }
        },
        Country: {
            operator: {
                component: 'SimpleSelect',
                key: 'operator.country'
            },
            rhs: {
                component: 'MultiSelect',
                key: 'rhs.country'
            }
        },
        'Campaign Name': {
            operator: {
                component: 'SimpleSelect',
                key: 'operator.campaignName'
            },
            rhs: {
                component: 'TextBox',
                key: 'rhs.country'
            }
        },
        Revenue: {
            operator: {
                component: 'SimpleSelect',
                key: 'operator.revenue'
            },
            rhs: {
                component: 'NumericTextBox',
                key: 'rhs.country'
            }
        }
    }

    return obj[lhs][type]

}
