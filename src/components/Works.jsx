import React, { Component } from 'react'
import styled from 'styled-components'
import Linker from '@/container/Linker'
import { flushSync } from 'react-dom'

export default class Works extends Component {
	constructor(props) {
		super(props)
		this.state = {
			// 初始数据
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
			// 当前筛选数据
			links: [],
			// btn-active
			cur_btn: '0',
			// buts
			btn_filter: ['All', 'Homepage', 'Nav'],
		}
	}

	render() {
		const { cur_btn, links, btn_filter } = this.state

		return (
			<WorksStyle>
				<div className="section-title">Works Display</div>
				<div className="link-tab">
					{btn_filter.map((item, index) => {
						return (
							<button id={index} className={cur_btn == index ? 'link-btn active' : 'link-btn'} onClick={this.handleClick} key={index}>
								{item}
							</button>
						)
					})}
					{/*
					<button className={cur_btn === '0' ? 'link-btn active' : 'link-btn'} id="0" onClick={this.handleClick}>
						All
					</button>
					<button className={cur_btn === '1' ? 'link-btn active' : 'link-btn'} id="1" onClick={this.handleClick}>
						Homepage
					</button>
					<button className={cur_btn === '2' ? 'link-btn active' : 'link-btn'} id="2" onClick={this.handleClick}>
						Nav
					</button>
					*/}
				</div>
				<div className="link-wrapper">
					{links.map((item, index) => (
						<Linker title={item.title.length > 0 ? item.title : `${index + 1}`} to={item.to} src={item.src} key={index} />
					))}
				</div>
			</WorksStyle>
		)
	}

	handleClick = (e) => {
		// btn-active
		this.setActiveBtn(e)
		// current-btn filter date
		this.filterData(e)
	}

	setActiveBtn = (e) => {
		flushSync(() => {
			this.setState({ cur_btn: e.target.id })
		})
	}

	filterData = (e) => {
		const { linkBox } = this.state
		const target = e.target.innerHTML.toLowerCase()
		const data = linkBox.filter((item, index) => item.to.includes(target)).map((item) => item)
		this.setState({ links: data.length === 0 ? linkBox : data })
	}

	linksInit = () => {
		this.setState({ links: this.state.linkBox })
	}

	componentDidMount() {
		this.linksInit()
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
			position: relative;
			font-size: 1rem;
			padding: 10px 1.25rem;
			/* color: rgb(105, 105, 105); */
			color: rgba(156, 163, 175, 1);
			background: transparent;
			cursor: pointer;
			outline: none;
			border-bottom: 2px solid transparent;
			&:hover {
				color: rgb(0, 0, 0);
			}
			&.active {
				color: rgb(0, 0, 0);
				border-bottom-color: #6b6c6c;
			}
			&::after {
				content: '';
				position: absolute;
				bottom: -2px;
				left: 0;
				width: 100%;
				height: 2px;
				background: #fc862e;
				transform: scaleX(0);
				transition: transform 0.15s ease-in-out;
				will-change: transfrom;
			}
			&:hover::after {
				transform: scaleX(1);
			}
		}
	}
	.link-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;
	}
`
