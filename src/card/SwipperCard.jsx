import React from 'react'
import { Carousel } from 'antd'
import { robot, perfil, author } from '@/assets/imgs'

const contentStyle = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
}

export default function SwipperCard() {
	const onChange = (currentSlide) => {
		console.log(currentSlide)
	}

	return (
		<Carousel afterChange={onChange}>
			<div>
				<div style={contentStyle}>
					<img src={perfil} style={{ height: '160px', width: 'auto' }} />
				</div>
			</div>
			<div>
				<h3 style={contentStyle}>2</h3>
			</div>
			<div>
				<h3 style={contentStyle}>3</h3>
			</div>
			<div>
				<h3 style={contentStyle}>4</h3>
			</div>
		</Carousel>
	)
}
