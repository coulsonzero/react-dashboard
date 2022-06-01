import React from 'react'
import styled from 'styled-components'

const LinkStyle = styled.a`
	position: relative;
	text-decoration: none;
	color: #8a8adf;
	margin: 10px;
	width: 300px;
	height: 180px;
	background-color: rgb(255, 255, 255);
	border-radius: 7px;
	box-shadow: rgb(0 0 0 / 8%) 0px 4px 12px 0px, rgb(0 0 0 / 2%) 0px 0px 0px 1px;
	overflow: hidden;
	cursor: zoom-in;
	.link-container {
		position: relative;
		/* width: 416px; */
		/* height: 220px; */
		width: 100%;
		height: 100%;
		.shadow {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			-webkit-box-align: center;
			align-items: center;
			-webkit-box-pack: end;
			justify-content: flex-end;
			color: white;
			text-shadow: rgb(0 0 0 / 50%) 0px 2px 20px;
			background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
			transition: opacity 0.2s ease 0s;
			opacity: 0;
			.info {
				width: 100%;
				padding: 1.5rem;
				background: rgba(0, 0, 0, 0.8);
				text-align: center;
				transition: opacity 0.6s ease 0s;
				opacity: 0;
				.link {
					color: #fff;
				}
			}
		}
		&:hover .info,
		&:hover .shadow {
			opacity: 1;
		}
	}

	.default-bg {
		background-image: url(https://www.nextjs.cn/static/images/showcase-thumbnails/theculturetrip.jpg);
	}

	.link-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center top;
		background-repeat: no-repeat;
	}
`

export default function Linker({ to, title, src, open }) {
	return (
		<LinkStyle href={to} target={open ? '_self' : '_blank'}>
			<div className="link-container">
				<img className={src ? 'link-img' : 'link-img default-bg'} src={src ? src : undefined} alt={title} />
				<div className="shadow">
					<div className="info">
						<div className="link-title">{title}</div>
					</div>
				</div>
			</div>
		</LinkStyle>
	)
}
