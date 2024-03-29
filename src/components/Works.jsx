import React, { Component } from 'react'
import { flushSync } from 'react-dom'
import styled from 'styled-components'
import Linker from '@/container/Linker'
import { gif1, gif2, gif3, gif4, gif5, gif6, img7, img8, gif9 } from '../assets/canvas'

export default class Works extends Component {
	constructor(props) {
		super(props)
		this.state = {
			// 初始数据
			linkBox: [
				{ title: 'example', to: '#', src: 'https://www.nextjs.cn/static/images/showcase-thumbnails/showcases-16.jpg' },
				{ title: 'http://www.coulsonzero.cn', to: 'http://www.coulsonzero.cn', src: 'http://www.coulsonzero.cn/codepen-work/images/website/1.png' },
				{ title: 'http://docs.coulsonzero.top', to: 'http://docs.coulsonzero.top', src: 'http://www.coulsonzero.cn/codepen-work/images/website/2.png' },
				{ title: '', to: 'http://www.coulsonzero.cn/codepen-work/works/homepage/demo1/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/homepage/1.png' },
				{ title: '', to: 'http://www.coulsonzero.cn/codepen-work/works/homepage/demo2/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/homepage/2.png' },
				{ title: '', to: 'http://www.coulsonzero.cn/codepen-work/works/homepage/demo3/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/homepage/3.png' },
				{ title: '', to: 'http://www.coulsonzero.cn/codepen-work/works/homepage/demo4/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/homepage/4.png' },
				{ title: '', to: 'http://www.coulsonzero.cn/codepen-work/works/homepage/demo5/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/homepage/5.png' },
				{ title: '', to: 'http://www.coulsonzero.cn/codepen-work/works/homepage/demo6/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/homepage/6.png' },
				{ title: '', to: 'http://www.coulsonzero.cn/codepen-work/works/homepage/demo7/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/homepage/7.png' },
				{ title: '', to: 'http://www.coulsonzero.cn/codepen-work/works/homepage/demo8/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/homepage/8.png' },
				{ title: 'nav', to: 'http://www.coulsonzero.cn/codepen-work/works/nav/demo1/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/nav/1.png' },
				{ title: 'nav', to: 'http://www.coulsonzero.cn/codepen-work/works/nav/demo2/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/nav/2.gif' },
				{ title: 'nav', to: 'http://www.coulsonzero.cn/codepen-work/works/nav/demo3/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/nav/3.png' },
				{ title: 'nav', to: 'http://www.coulsonzero.cn/codepen-work/works/nav/demo4/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/nav/4.png' },
				{ title: 'nav', to: 'http://www.coulsonzero.cn/codepen-work/works/nav/demo5/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/nav/5.png' },
				{ title: 'nav', to: 'http://www.coulsonzero.cn/codepen-work/works/nav/demo6/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/nav/6.gif' },
				{ title: 'swipper', to: 'http://www.coulsonzero.cn/codepen-work/works/swipper/demo1/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/swipper/1.gif', type: 'other' },
				{ title: 'section', to: 'http://www.coulsonzero.cn/codepen-work/works/section/demo1/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/section/1.png', type: 'other' },
				{ title: 'login', to: 'http://www.coulsonzero.cn/codepen-work/works/login/demo1/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/login/1.png' },
				{ title: 'login', to: 'http://www.coulsonzero.cn/codepen-work/works/login/demo2/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/login/2.png' },
				{ title: 'input', to: 'http://www.coulsonzero.cn/codepen-work/works/input/demo1/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/input/1.png' },
				{ title: 'input', to: 'http://www.coulsonzero.cn/codepen-work/works/input/demo2/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/input/2.png' },
				{ title: 'input', to: 'http://www.coulsonzero.cn/codepen-work/works/input/demo3/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/input/3.gif' },
				{ title: 'input', to: 'http://www.coulsonzero.cn/codepen-work/works/input/demo4/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/input/4.png' },
				{ title: 'FAQ', to: 'http://www.coulsonzero.cn/codepen-work/works/other/FAQ/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/other/faq.png' },
				{ title: 'scrollAnimate', to: 'http://www.coulsonzero.cn/codepen-work/works/scrollAnimate/SvgAnimate/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/scrollAnimate/svgAnimate.gif' },
				{ title: 'scrollAnimate', to: 'http://www.coulsonzero.cn/codepen-work/works/scrollAnimate/scrollAnimate/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/scrollAnimate/iphoneSESrcoll.gif' },
				{ title: 'scrollAnimate', to: 'http://www.coulsonzero.cn/codepen-work/works/scrollAnimate/scrollAnimate2/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/scrollAnimate/scrollAnimate2.gif' },
				{ title: 'scrollAnimate', to: 'http://www.coulsonzero.cn/codepen-work/works/scrollAnimate/scrollAnimate3/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/scrollAnimate/textScroll.gif' },
				{ title: 'passwordGenerator', to: 'http://www.coulsonzero.cn/codepen-work/works/other/passwordGenerator/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/scrollAnimate/passwordGenerator.png' },
				{ title: 'calendar', to: 'http://www.coulsonzero.cn/codepen-work/works/other/calendar2/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/other/calendar2.png' },
				{ title: 'calendar', to: 'http://www.coulsonzero.cn/codepen-work/works/other/calendar/calendar.html', src: 'http://www.coulsonzero.cn/codepen-work/images/other/calendar.gif' },
				{ title: 'comboBox', to: 'http://www.coulsonzero.cn/codepen-work/works/input/comboBox/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/input/5.gif' },
				{ title: 'button', to: 'http://www.coulsonzero.cn/codepen-work/works/button/demo1/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/button/1.png' },
				{ title: 'button', to: 'http://www.coulsonzero.cn/codepen-work/works/button/demo2/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/button/2.gif' },
				{ title: 'button', to: 'http://www.coulsonzero.cn/codepen-work/works/button/demo3/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/button/3.png' },
				{ title: 'button', to: 'http://www.coulsonzero.cn/codepen-work/works/button/demo4/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/button/4.gif' },
				{ title: '3D', to: 'http://www.coulsonzero.cn/codepen-work/works/3d/demo1/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/3d/1.gif' },
				{ title: '3D', to: 'http://www.coulsonzero.cn/codepen-work/works/3d/demo2/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/3d/2.gif' },
				{ title: '3D', to: 'http://www.coulsonzero.cn/codepen-work/works/3d/demo3/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/3d/3.gif' },
				{ title: '3D', to: 'http://www.coulsonzero.cn/codepen-work/works/3d/demo4/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/3d/4.png' },
				{ title: '3D', to: 'http://www.coulsonzero.cn/codepen-work/works/3d/demo5/index.html', src: 'http://www.coulsonzero.cn/codepen-work/images/3d/5.png' },
				{ title: 'Canvas', to: 'http://www.coulsonzero.cn/canvas-learning/Canvas3D/canvas3D.html', src: gif1 },
				{ title: 'Canvas', to: 'http://www.coulsonzero.cn/canvas-learning/Canvas3DBody/canvas3DBody.html', src: gif2 },
				{ title: 'Canvas', to: 'http://www.coulsonzero.cn/canvas-learning/CanvasGlobe/canvasGlobe.html', src: gif3 },
				{ title: 'Canvas', to: 'http://www.coulsonzero.cn/canvas-learning/CanvasReact/canvasReact.html', src: gif4 },
				{ title: 'Canvas', to: 'http://www.coulsonzero.cn/canvas-learning/CanvasSololearn/canvasSololearn.html', src: gif5 },
				{ title: 'Canvas', to: 'http://www.coulsonzero.cn/canvas-learning/CanvasWave/canvasWave.html', src: gif6 },
				{ title: 'Canvas', to: 'http://www.coulsonzero.cn/canvas-learning/GameCanvas/gameCanvas.html', src: img7 },
				{ title: 'Canvas', to: 'http://www.coulsonzero.cn/canvas-learning/Learning/index.html', src: img8 },
				{ title: 'Canvas', to: 'http://www.coulsonzero.cn/canvas-learning/TextAnimate/textAnimate.html', src: gif9 },
			],
			// 当前筛选数据
			links: [],
			// btn-active
			cur_btn: '0',
			// buts
			btn_filter: ['All', 'Homepage', 'Nav', 'Input', 'Button', '3D', 'Canvas', 'scroll', 'Other'],
		}
	}

	render() {
		const { cur_btn, links, btn_filter } = this.state

		return (
			<WorksStyle>
				<div className="section-title">Works Display</div>
				<div className="link-tab fixed">
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
		// flushSync(() => {
			this.setState({ cur_btn: e.target.id })
		// })
	}

	filterData = (e) => {
		const { linkBox } = this.state
		const target = e.target.innerHTML.toLowerCase()
		const data = linkBox.filter((item, index) => item.to.includes(target) || (item.type && item.type.includes(target))).map((item) => item)
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
	overflow-y: scroll;

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
	.fixed {
		position: sticky;
		top: 20px;
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: saturate(180%) blur(20px);
		box-shadow: 4px 4px 6px rgba(32, 32, 32, 0.1);
		z-index: 10;
		padding: 10px 30px 6px 30px;
		border-radius: 30px;
	}
`
