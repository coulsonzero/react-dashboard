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
		const myChart = echarts.init(this.pieRef.current)
		const seriesData = [
			{
				value: 30,
				name: '云服务',
			},
			{
				value: 40,
				name: '解决方案',
			},
			{
				value: 10,
				name: '微服务',
			},
			{
				value: 20,
				name: '应用商店',
			},
		]
		//圆环和子项颜色
		const color = ['#FFD200', '#18FFFC', '#92FF0A', '#129BFB']

		const option = {
			backgroundColor: '#1b1d3d',
			color: color,
			tooltip: {
				trigger: 'item',
			},
			legend: {
				orient: 'vertical',
				right: '5%',
				top: 'center',
				//
				icon: 'circle',
				itemWidth: 10,
				textStyle: {
					color: '#fff',
					fontSize: 16,
				},
				// 百分比格式化
				formatter: function (name) {
					function sumArr(arr) {
						let sum = 0
						for (var i = 0; i < arr.length; i++) {
							sum += arr[i].value
						}
						return sum
					}
					const sum = sumArr(seriesData)
					if (seriesData.length) {
						const item = seriesData.filter((item) => item.name === name)[0]
						const percentage = (item.value / sum) * 100
						name = item.name.length === 2 ? `  ${name}` : name
						// 保留小数点后几位
						const DecimalPoint = 0
						const per = percentage.toFixed(DecimalPoint)
						return per.length > DecimalPoint + 2 ? `  ${name}:  ${per}%` : `  ${name}:    ${per}%`
					}
				},
			},
			series: [
				{
					type: 'pie',
					center: ['25%', '50%'],
					// 圆环(中心为空)
					radius: ['54%', '60%'],
					data: seriesData,
					label: {
						show: false,
						position: 'center',
						fontSize: '20',
						fontWeight: 'bold',
						formatter: '{b}\n\n{c}%',
						color: '#fff',
					},
					labelLine: {
						show: true,
					},
					emphasis: {
						label: {
							show: true,
							fontSize: '20',
						},
					},
				},
			],
		}

		myChart.setOption(option)
	}

	componentDidMount() {
		this.chartInit()
	}

	componentWillUnmount() {
		echarts.dispose(this.pieRef.current)
	}
}
