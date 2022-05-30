import React, { Component } from 'react'
import * as echarts from 'echarts'

export default class LineChart extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.lineRef = React.createRef(null)
		this.chartInit = this.chartInit.bind(this)
	}

	render() {
		return <div ref={this.lineRef} className="chart"></div>
	}

	chartInit() {
		const myChart = echarts.init(this.lineRef.current)

		const option = {
			backgroundColor: '#1A253A',
			tooltip: {
				trigger: 'axis',
			},
			legend: {
				orient: 'horizontal',
				// "icon": "circle",
				left: '70%',
				itemStyle: {
					borderWidth: 2,
				},
				data: ['每日访问', '累计访问'],
				textStyle: {
					fontSize: 12,
					color: '#fff',
				},
				align: 'left',
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				axisLine: {
					lineStyle: {
						type: 'solid',
						color: '#E1E1E1',
					},
				},
				axisLabel: {
					textStyle: {
						color: '#868C97',
					},
				},
				splitLine: {
					show: false,
					lineStyle: {
						type: 'solid',
						color: '#868C97',
					},
				},
				axisPointer: {
					lineStyle: {
						color: '#4E6BFF',
					},
				},
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
			},
			yAxis: {
				type: 'value',

				//"name": "信息量",
				axisLine: {
					show: false,
					lineStyle: {
						type: 'solid',
						color: '#E1E1E1',
					},
				},
				axisLabel: {
					textStyle: {
						color: '#868C97',
					},
				},
				splitLine: {
					show: true,
					lineStyle: {
						type: 'dotted', //"solid"实线,"dotted"虚线
						color: '#868C97',
					},
				},
			},
			series: [
				{
					name: '每日访问',
					symbol: 'circle',
					symbolSize: 5,
					data: [600, 800, 595, 640, 610, 900, 795, 610, 800, 760],
					type: 'line',
					smooth: true,
					areaStyle: {
						// "type": "default",
						color: {
							colorStops: [
								{
									offset: 0,
									color: '#8C25FF', //"#FF7B33"
								},
								{
									offset: 0.1,
									color: '#8C25FF',
								},
								{
									offset: 0.5,
									color: '#1A253A', //"#1A253A"
								},
							],
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							type: 'linear',
							global: false,
						},
					},
					itemStyle: {
						normal: {
							color: '#FFFFFF',
							borderColor: '#8C25FF',
							lineStyle: {
								color: '#8C25FF',
							},
						},
					},
				},
				{
					name: '累计访问',
					symbol: 'circle',
					symbolSize: 5,
					data: [430, 430, 395, 450, 380, 510, 420, 490, 610, 580],
					type: 'line',
					smooth: true,
					areaStyle: {
						type: 'default',
						color: {
							colorStops: [
								{
									offset: 0,
									color: '#0078FF',
								},
								{
									offset: 0.1,
									color: '#0078FF',
								},
								{
									offset: 0.5,
									color: '#1A253A', //"#0078FF"
								},
							],
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							type: 'linear',
							global: false,
						},
					},
					itemStyle: {
						normal: {
							color: '#FFFFFF',
							borderColor: '#0078FF',
							lineStyle: {
								color: '#0078FF',
							},
						},
					},
				},
			],
			color: ['#8C25FF', '#0078FF', '#FF4040', '#E60636', '#F65A70', '#EA5A94', '#FF5BE2', '#F56134', '#FF9D4D', '#F1F406', '#BBF25B'],
		}

		myChart.setOption(option)
	}

	componentDidMount() {
		this.chartInit()
	}

	componentWillUnmount() {
		echarts.dispose(this.lineRef.current)
	}
}
