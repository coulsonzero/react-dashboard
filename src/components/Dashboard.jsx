import React, {Component} from "react"
import styled from "styled-components"
import BarChart from "@/container/BarChart"
import PieChart from "@/container/PieChart"
import Tableview from "@/container/Tableview"


export default class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<DashboardStyle>
				<div className="main-container">
					<div className="section-title">Dashboard</div>
                    <div className="chart-container">
                        <div className="chartBox"><BarChart /></div>
                        <div className="chartBox"><PieChart /></div>
                        <div className="chartBox"><BarChart /></div>
                        <div className="chartBox"><BarChart /></div>
                    </div>
                    <div className="table-container">
                        <Tableview/>
                    </div>
				</div>
			</DashboardStyle>
		)
	}
}

const DashboardStyle = styled.section`
	width: 80%;
	height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
	/* background: transparent; */
	.main-container {
		padding: 20px;
		.section-title {
			font-size: 2rem;
			font-weight: 600;
			text-align: center;
			margin: 10px 0 40px;
		}
		.chart-container {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
			place-items: center;
			grid-gap: 1rem 1rem;
			.chartBox {
				position: relative;
				width: 450px;
				height: 220px;
				border-radius: 12px;
				background-color: #ffffff;
				padding: 10px;
				.chart {
					width: 100%;
					height: 100%;
				}
			}
		}
		.table-container {
            padding: 40px 0px;
		}
	}
`