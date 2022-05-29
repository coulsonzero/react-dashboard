import React, {Component} from "react"
import styled from "styled-components"
import Sidebar from "@/components/Sidebar"
import Dashboard from "@/components/Dashboard"

export default class App extends Component {
	render() {
		return (
			<Div>
				<div class="app-container">
					<Sidebar />
					<Dashboard />
				</div>
			</Div>
		)
	}
}

const Div = styled.div`
	font-family: "DM Sans", sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	overflow: hidden;
	overflow-x: hidden;
	background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);
	background-position: center;
	background-size: cover;
	padding: 20px;
	width: 100%;
	height: 100vh;
	.app-container {
		position: relative;
		border-radius: 10px;
		width: 100%;
		height: 100%;
		max-width: 1200px;
		max-height: 900px;
		background: linear-gradient(180deg, #e0e9fd 0%, #e9ecf1 90%);
		box-shadow: 0 0 0 10px rgb(255 255 255 / 40%);
		display: flex;
		overflow: hidden;
	}
`
