import React, { Component } from 'react'
import { Input, AutoComplete } from 'antd'

export default class SearchCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			options: [],
			links: [
				{ id: 1, name: 'john', country: 'cn' },
				{ id: 2, name: 'mary', country: 'us' },
				{ id: 3, name: 'yart', country: 'cn' },
				{ id: 4, name: 'lkwq', country: 'us' },
				{ id: 5, name: 'qwqw', country: 'cn' },
			],
		}
	}

	// getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

	searchResult = (query) => {
        const k = 'name'
        const partner = this.state.links.filter((link) => link[k].includes(query))
        // console.log(partner)
        return partner.map(item => {
            return {
               value: item[k],
               label: (
                   <div>{item[k]}</div>
               )
            }
        })
	}

	handleSearch = (value) => {
		this.setState({
			options: value ? this.searchResult(value) : [],
		})
        // console.log(this.state.options)
	}

	onSelect = (value) => {
		console.log('onSelect', value)
	}

	onSearch = (value) => console.log("onSearch: ", value)

	render() {
		return (
			<div>
				<AutoComplete
					dropdownMatchSelectWidth={252}
					style={{
						width: 300,
					}}
					options={this.state.options}
					onSelect={this.onSelect}
					onSearch={this.handleSearch}>
					<Input.Search placeholder="search" allowClear onSearch={this.onSearch} enterButton style={{ width: 300 }} />
				</AutoComplete>
			</div>
		)
	}
}
