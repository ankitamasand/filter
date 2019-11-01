import React, { Component } from 'react'
import cloneDeep from 'clone-deep'
import { Button, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { buildEmptyFilter, getComponent } from '../../utils'
import { SimpleSelect } from '../index'
import { ComponentKeyMappings } from '../../constants/component-key-mappings'

class QueryBuilder extends Component {

    state={
        appliedFilters: []
    }

    addFilter = () => {
        const { appliedFilters } = this.state
        const newAppliedFilters = [ ...appliedFilters ]
        const emptyFilter = buildEmptyFilter()
        newAppliedFilters.push(emptyFilter)
        this.setState({ appliedFilters: newAppliedFilters })
    }

    onChange = (e, index, type) => {
        const { appliedFilters } = this.state
        const updatedFilter = cloneDeep(appliedFilters)
        let value = e

        if (e) {
            value = e.target ? e.target.value : e
        }

        updatedFilter[index][type].value = value
        if (type === 'lhs') {
            updatedFilter[index]['operator'] = ComponentKeyMappings(value, 'operator')
            updatedFilter[index]['rhs'] = ComponentKeyMappings(value, 'rhs')
        }

        this.setState({ appliedFilters: updatedFilter })
    }

    applyQueries = () => {
        const { appliedFilters } = this.state
        const query = []

        appliedFilters.forEach(filter => {

            let rhs = filter.rhs.value
            if (Array.isArray(filter.rhs.value)) {
                rhs = []
                filter.rhs.value.forEach(item => {
                    rhs.push(item.value)
                })
            }

            query.push({
                lhs: filter.lhs.value,
                operator: filter.operator.value,
                rhs
            })
        })

        console.info('Applied Filters', query)
    }

    removeFilter = (index) => {
        const { appliedFilters } = this.state
        const updatedFilter = cloneDeep(appliedFilters)
        updatedFilter.splice(index, 1)
        this.setState({ appliedFilters: updatedFilter })
    }

    renderAppliedFilters = () => {
        const { appliedFilters } = this.state
        return (
            <div>
                {
                    appliedFilters.map((filter, index) => {
                        return (
                            <div className='filter-wrapper' key={index}>
                                {
                                    Object.keys(filter).map(item => {
                                        return getComponent(filter[item], (e) => this.onChange(e, index, item))
                                    })

                                }
                                <IconButton aria-label="Clear" className="icon" onClick={(index) => this.removeFilter(index)}>
                                    <CloseIcon />
                                </IconButton>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render () {
        const { appliedFilters } = this.state
        return (
            <div className='query-builder'>
                {
                    appliedFilters.length > 0 ? this.renderAppliedFilters() : null
                }
                <Button color="primary" onClick={this.addFilter}>
                    + ADD
                </Button>
                {
                    appliedFilters.length > 0 ? (
                        <div className='apply-filters'>
                            <Button variant="contained" color="primary" onClick={this.applyQueries}>Apply</Button>
                        </div>
                    ) : null
                }

            </div>
        )
    }
}

export default QueryBuilder
