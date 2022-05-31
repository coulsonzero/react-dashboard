import React, { Component } from 'react'
import styled from 'styled-components'
import Linker from '@/container/Linker'

export default class Works extends Component {
	constructor(props) {
		super(props)
		this.state = {
			linkBox: [
				{ title: 'example', to: '#', src: 'https://www.nextjs.cn/static/images/showcase-thumbnails/showcases-16.jpg' },
				{ title: 'http://www.coulsonzero.cn', to: 'http://www.coulsonzero.cn', src: './images/website/1.png' },
				{ title: 'http://docs.coulsonzero.top', to: 'http://docs.coulsonzero.top', src: './images/website/2.png' },
				{ title: '', to: './works/homepage/demo1/index.html', src: './images/homepage/1.png' },
				{ title: '', to: './works/homepage/demo2/index.html', src: './images/homepage/2.png' },
				{ title: '', to: './works/homepage/demo3/index.html', src: './images/homepage/3.png' },
				{ title: '', to: './works/homepage/demo4/index.html', src: './images/homepage/4.png' },
				{ title: '', to: './works/homepage/demo5/index.html', src: './images/homepage/5.png' },
				{ title: '', to: './works/homepage/demo6/index.html', src: './images/homepage/6.png' },
				{ title: '', to: './works/homepage/demo7/index.html', src: './images/homepage/7.png' },
				{ title: 'nav', to: './works/nav/demo1/index.html', src: './images/nav/1.png' },
				{ title: 'nav', to: './works/nav/demo2/index.html', src: './images/nav/2.png' },
				{ title: 'nav', to: './works/nav/demo3/index.html', src: './images/nav/3.png' },
				{ title: 'nav', to: './works/nav/demo4/index.html', src: './images/nav/4.png' },
				{ title: 'nav', to: './works/nav/demo5/index.html', src: './images/nav/5.png' },
				{ title: 'swipper', to: './works/swipper/demo1/index.html', src: './images/swipper/1.png' },
				{ title: 'section', to: './works/section/demo1/index.html', src: './images/section/1.png' },
				{ title: 'login', to: './works/login/demo1/index.html', src: './images/login/1.png' },
				{ title: 'login', to: './works/login/demo2/index.html', src: './images/login/2.png' },
			],
		}
	}

	render() {
		return (
			<WorksStyle>
				<div className="section-title">Works Display</div>
				<div className="link-tab">
					<button className="link-btn" id="btn-1" onClick={this.handleClick}>All</button>
					<button className="link-btn" id="btn-2" onClick={this.handleClick}>Homapage</button>
					<button className="link-btn" id="btn-3" onClick={this.handleClick}>Nav</button>
				</div>
				<div className="link-wrapper">
					{this.state.linkBox.map((item, index) => (
						<Linker title={item.title.length > 0 ? item.title : `${index + 1}`} to={item.to} src={item.src} key={index} />
					))}
				</div>
			</WorksStyle>
		)
	}

	handleClick = (e) => {
		console.log(e.target.id.slice(-1))
		
	}
}

const WorksStyle = styled.section`
	overflow: scroll;
	.section-title {
		text-align: center;
		padding: 40px 20px;
		font-size: 1.5rem;
		font-weight: 700;
	}
	.link-tab {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10px auto 30px;
		max-width: fit-content;
		/* text-align: center; */
		.link-btn {
			font-size: 1rem;
			padding: 10px 1.25rem;
			/* color: rgb(105, 105, 105); */
			color: rgba(156,163,175, 1);
			background: transparent;
			cursor: pointer;
			outline: none;
			border-bottom: 2px solid transparent;
			&.active,
			&:hover {
				color: rgb(0,0,0);
				border-bottom-color: #37b067;
			}
		}
	}
	.link-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;
	}
`
