import React from 'react'

import styled from 'styled-components'
import scrollreveal from 'scrollreveal'

import { MdSpaceDashboard } from 'react-icons/md'
import { AiOutlineDotChart, AiOutlineAntDesign } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import { FaAirbnb } from 'react-icons/fa'
import { SiVectorworks } from 'react-icons/si'

export default class Sidebar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			links: [
				{ icon: MdSpaceDashboard, title: 'Dashboard' },
				{ icon: AiOutlineDotChart, title: 'Charts' },
				{ icon: FaAirbnb, title: 'Analytics' },
				{ icon: SiVectorworks, title: 'Works' },
				{ icon: AiOutlineAntDesign, title: 'Ant Design' },
				{ icon: IoSettingsOutline, title: 'Settings' },
			],
		}
	}

	render() {
		const { links } = this.state
		const { currentLink, setCurLink } = this.props

		return (
			<Div>
				<a className="side-logo">Dashboard</a>
				<div className="side-wrapper">
					{/* <div className="side-title">MENU</div> */}
					<ul className="side-menu">
						{links.map((item, index) => {
							return (
								// <li className={currentLink === index ? "active" : undefined} onClick={() => this.setState({currentLink: index})} key={index}>
								<li className={currentLink === index ? 'active' : undefined} onClick={() => setCurLink(index)} key={index}>
									<a href={'#' + item.title} className="side-item">
										<div className="side-link">{<item.icon />}</div>
										<span className="side-title">{item.title}</span>
									</a>
								</li>
							)
						})}
					</ul>
				</div>
			</Div>
		)
	}

	componentDidMount() {
		const sr = scrollreveal({
			origin: 'bottom',
			distance: '20px',
			duration: 1000,
			smooth: true,
			reset: false,
		})

		sr.reveal(
			`
            	.side-logo,
				.side-title,
				.side-wrapper .side-menu
      		`,
			{
				opacity: 0,
				interval: 200,
			}
		)
	}
}

const Div = styled.div`
	width: 20%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.7);
	backdrop-filter: blur(20px) saturate(180%);
	padding: 30px;
	display: flex;
	flex-direction: column;
	// flex-shrink: 0;
	transition-duration: 0.2s;
	.side-logo {
		font-weight: 600;
		font-size: 1.4rem;
		margin-bottom: 40px;
		text-align: center;
		cursor: default;
	}
	.side-wrapper {
		border-bottom: 1px solid rgba(128, 129, 145, 0.24);
		.side-title {
			opacity: 0.6;
		}
		.side-menu {
			margin-top: 20px;
			li {
				position: relative;
				border-radius: 12px;
				transition: 0.3s ease;
				cursor: pointer;
				&:hover {
					/* background: rgba(207, 207, 207, 0.2); */
				}
				&::before {
					position: absolute;
					left: 0;
					top: 0;
					content: '';
					background: #dc885e;
					width: 4px;
					height: 60%;
					transform: translateY(12px) scaleY(0);
					transition: 0.2s ease;
				}
				&.active::before {
					height: 60%;
					transform: translateY(12px) scaleY(1);
				}
				&::after {
					position: absolute;
					left: 0;
					top: 0;
					content: '';
					/* background: #d1e2e161; */
					background-color: rgba(43, 61, 95, 0.125);
					width: 0%;
					height: 60%;
					transform: translateY(12px);
					transition: width 0.5s ease-in-out;
					z-index: -1;
				}
				&:hover::after {
					width: 86%;
				}
				&:hover::before {
					height: 60%;
					transform: translateY(12px) scaleY(1);
					box-shadow: rgba(43, 61, 95, 0.125);
					background-color: #2b3d5f;
					transition-delay: 0.3s;
				}
				.side-item {
					display: flex;
					align-items: center;
					padding: 16px;
					cursor: pointer;
					.side-link {
						margin-right: 16px;
						display: flex;
						opacity: 0.5;
						font-size: 1.2rem;
					}
					.side-title {
						color: rgba(51, 51, 51, 0.7);
					}
				}
				&.active .side-link,
				&:hover .side-link {
					/* color: #ca824e; */
					opacity: 1;
				}
				&.active .side-title,
				&:hover .side-title {
					color: #000000;
				}
			}
		}
	}
`
