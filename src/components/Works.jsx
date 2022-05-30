import React, { Component } from 'react'
import styled from "styled-components"
import Linker from "@/container/Linker"

export default class Works extends Component {
    constructor(props) {
        super(props)
        this.state = {
					linkBox: [
						{title: "", to: "#", src: "https://www.nextjs.cn/static/images/showcase-thumbnails/showcases-16.jpg"},
						{title: "", to: "http://www.coulsonzero.cn", src: "./images/website/1.png"},
						{title: "", to: "http://docs.coulsonzero.top", src: "./images/website/2.png"},
						{title: "", to: "./works/homepage/demo1/index.html", src: "./images/homepage/1.png"},
						{title: "", to: "./works/homepage/demo2/index.html", src: "./images/homepage/2.png"},
						{title: "", to: "./works/homepage/demo3/index.html", src: "./images/homepage/3.png"},
						{title: "", to: "./works/homepage/demo4/index.html", src: "./images/homepage/4.png"},
						{title: "", to: "./works/homepage/demo5/index.html", src: "./images/homepage/5.png"},
						{title: "", to: "./works/homepage/demo6/index.html", src: "./images/homepage/6.png"},
						{title: "", to: "./works/homepage/demo7/index.html", src: "./images/homepage/7.png"},
						{title: "", to: "./works/nav/demo1/index.html", src: "./images/nav/1.png"},
						{title: "", to: "./works/swipper/demo1/index.html", src: "./images/swipper/1.png"},
						{title: "", to: "./works/section/demo1/index.html", src: "./images/section/1.png"},
					],
				}
    }

	render() {
		return (
			<WorksStyle>
                <div className="section-title">Works Display</div>
                <div className="link-wrapper">
                    {this.state.linkBox.map((item, index) => <Linker title={item.title.length > 0 ? item.title : `${index + 1}`} to={item.to} src={item.src} key={index}/>)}
                </div>

			</WorksStyle>
		)
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
    .link-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;
	}
`