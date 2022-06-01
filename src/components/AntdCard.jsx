import React, { Component } from 'react'
import styled from 'styled-components'
import CommentCard from '@/card/CommentCard'
import SwipperCard from '@/card/SwipperCard'
import Login from '@/card/Login'
import FormJson from '@/card/FormJson'
import SearchCard from '@/card/SearchCard'

export default class AntdCard extends Component {
	render() {
		return (
			<AntdStyle className="section-wrapper">
				<div className="section-title">AntdCard</div>
				<div className="section-card">
					<SearchCard />
				</div>
				<div className="section-card">
					<Login />
				</div>
				<div className="section-card">
					<FormJson />
				</div>
					<CommentCard />
					<SwipperCard />
			</AntdStyle>
		)
	}
}

const AntdStyle = styled.section`
	.section-card {
		display: grid;
    	place-items: center;
		margin-bottom: 30px;
		padding: 20px;
		border: 1px solid #323232;
	}
`
