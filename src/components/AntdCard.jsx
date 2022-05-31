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
        <SearchCard />
				<Login />
        <FormJson />
				<CommentCard />
				<SwipperCard />
			</AntdStyle>
		)
	}
}

const AntdStyle = styled.section``
