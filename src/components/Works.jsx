import React, { Component } from 'react'
import styled from "styled-components"
import Linker from "@/container/Linker"

export default class Works extends Component {
    constructor(props) {
        super(props)
        this.state = {
            linkBox: [
                {title: "", to: "#", src: "https://www.nextjs.cn/static/images/showcase-thumbnails/showcases-16.jpg" },
                {title: "", to: "./works/homepage/demo1/index.html", src: "./images/homepage/1.png"},
                {title: "", to: "./works/homepage/demo2/index.html", src: "./images/homepage/2.png"},
                {title: "", to: "./works/homepage/demo3/index.html", src: "./images/homepage/3.png"},
                {title: "", to: "./works/homepage/demo1/homePage.html"},
                {title: "", to: "./works/homepage/demo1/homePage.html"},
                {title: "", to: "./works/homepage/demo1/homePage.html"},
                {title: "", to: "./works/homepage/demo1/homePage.html"},
                {title: "", to: "./works/homepage/demo1/homePage.html"},
                {title: "", to: "./works/homepage/demo1/homePage.html"},
                {title: "", to: "./works/homepage/demo1/homePage.html"},
                {title: "", to: "./works/homepage/demo1/homePage.html"},
                {title: "", to: "./works/homepage/demo1/homePage.html"},
            ]
        }
    }

	render() {
		return (
			<WorksStyle>
                <div className="section-title">Works Display</div>
				{/* <Linker title="" to="./works/homepage/demo1/homePage.html" src="https://www.nextjs.cn/static/images/showcase-thumbnails/showcases-16.jpg" />
				<Linker title="" to="./works/homepage/demo1/homePage.html" /> */}
                <div className="link-wrapper">
                    {this.state.linkBox.map((item, index) => <Linker title={item.title.length > 0 ? item.title : `链接 ${index + 1}`} to={item.to} src={item.src} key={index}/>)}
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