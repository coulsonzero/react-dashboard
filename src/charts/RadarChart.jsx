import React, { Component } from 'react'
import * as echarts from 'echarts'

export default class PieChart extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.pieRef = React.createRef(null)
		this.chartInit = this.chartInit.bind(this)
	}

	render() {
		return <div ref={this.pieRef} className="chart"></div>
	}

	chartInit() {
		let myChart = echarts.init(this.pieRef.current)

		myChart.setOption({
			legend: [
				{
					top: '70%',
					right: 30,
					itemGap: 12,
					textStyle: {
						fontSize: 12,
						// color: "#EFF4FF",
						color: '#242425',
					},
					icon: 'circle',
					orient: 'vertical',
					align: 'left',
				},
			],
			radar: {
				center: ['40%', '50%'],
				indicator: [
					{
						name: 'A',
						max: 50,
					},
					{
						name: 'B',
						max: 50,
					},
					{
						name: 'C',
						max: 50,
					},
					{
						name: 'D',
						max: 50,
					},
					{
						name: 'E',
						max: 50,
					},
					{
						name: 'F',
						max: 50,
					},
				],
				splitNumber: 5,
				startAngle: 0,
				axisName: {
					color: '#242425',
				},
				splitLine: {
					lineStyle: {
						color: '#1A466B',
					},
				},
				splitArea: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						color: '#1A466B',
					},
				},
			},
			series: [
				{
					type: 'radar',
					data: [
						{
							name: '每日提交',
							lineStyle: {
								color: '#8C25FF',
								width: 1,
							},
							value: [33, 33, 46, 46, 47, 37, 44],
							itemStyle: {
								color: '#8C25FF',
							},
							areaStyle: {
								color: '#8C25FF',
								opacity: 0.2,
							},
						},
						{
							name: '累计提交',
							lineStyle: {
								color: '#0078FF',
								width: 1,
							},
							value: [39, 45, 46, 41, 38, 43, 39],
							itemStyle: {
								color: '#0078FF',
							},
							areaStyle: {
								color: '#0078FF',
								opacity: 0.2,
							},
						},
					],
				},
			],
		})
	}

	componentDidMount() {
		this.chartInit()
	}

	componentWillUnmount() {
		echarts.dispose(this.pieRef.current)
	}
}
