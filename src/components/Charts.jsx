import React, { Component } from 'react'
import styled from 'styled-components'
import IncomeExpendBar from '@/charts/Charts/IncomeExpendBar'

export default class Charts extends Component {
    render() {
        return (
			<Div className="section-wrapper">
				<div className="section-title">Charts</div>
				<div className="chart-container">
					<div className="chartBox">
						<IncomeExpendBar />
					</div>
				</div>
			</Div>
		)
    }
}

const Div = styled.div`
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
`