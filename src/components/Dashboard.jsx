import React, { Component } from 'react'
import styled from 'styled-components'
import BarChart from '@/charts/BarChart'
import RadarChart from '@/charts/RadarChart'
import LineChart from '@/charts/LineChart'
import PieChart from '@/charts/PieChart'
import GuageChart from '@/charts/GuageChart'
import PicBar from '@/charts/PicBar'
import Tableview from '@/container/Tableview'

export default class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<DashboardStyle className="section-wrapper">
				<div className="main-container">
					<div className="section-title">Dashboard</div>
					<div className="chart-container">
						<div className="chartBox">
							<BarChart />
						</div>
						<div className="chartBox">
							<RadarChart />
						</div>
						<div className="chartBox">
							<LineChart />
						</div>
						<div className="chartBox">
							<PieChart />
						</div>
						<div className="chartBox">
							<GuageChart />
						</div>
						<div className="chartBox">
							<PicBar />
						</div>
					</div>
					<div className="table-container">
						<Tableview />
					</div>
				</div>
			</DashboardStyle>
		)
	}
}

const DashboardStyle = styled.section`
	.main-container {
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
				/* padding: 10px; */
				overflow: hidden;
				.chart {
					width: 100%;
					height: 100%;
				}
			}
		}
		.table-container {
			padding: 40px 0;
		}
	}
`
