import React, { Component } from 'react'
import * as echarts from 'echarts'

export default class IncomeExpendBar extends Component {
	constructor(props) {
		super(props)
		this.barRef = React.createRef(null)
		this.chartInit = this.chartInit.bind(this)
        this.state = {
            year_data: '2022',
            month_data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
            expend_data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        }
	}
	render() {
		return <div ref={this.barRef} className="chart"></div>
	}
	chartInit() {
        const { year_data, month_data, expend_data } = this.state

		const myChart = echarts.init(this.barRef.current)

		let option = {
			title: {
				text: `支出对比 (${year_data}年)`,
				textStyle: { fontSize: 14 },
				left: '5%',
				top: '5%',
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow',
				},
			},
			grid: {
				left: '10%',
				right: '14%',
				bottom: '6%',
				containLabel: true,
			},
			legend: {
				icon: 'circle',
				show: false,
			},
			toolbox: {
				show: true,
				orient: 'vertical',
				left: 'left',
				top: 'center',
				feature: {
					mark: { show: true },
					dataView: { show: true, readOnly: false },
					magicType: { show: true, type: ['line', 'bar'] },
					restore: { show: true },
					saveAsImage: { show: true },
				},
			},
			xAxis: [
				{
					type: 'category',
					axisTick: { show: false },
					data: month_data,
				},
			],
			yAxis: [
				{
					type: 'value',
				},
			],
			series: [
				{
					name: '支出',
					type: 'bar',
					barGap: 0,
					barWidth: 16,
					label: {
						formatter: '¥ {c}',
						show: true,
						rotate: -90,
						align: 'left',
						verticalAlign: 'middle',
						position: 'insideTop',
						// distance: 15,
						fontSize: 12,
						color: '#313131',
					},
					emphasis: {
						focus: 'series',
					},
					itemStyle: {
						barBorderRadius: [8, 8, 0, 0],
						color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
							{ offset: 0, color: '#fbc2eb' },
							{ offset: 0.5, color: '#e9defa' },
							{ offset: 1, color: '#a6c1ee' },
						]),
					},
					markLine: {
						data: [{ type: 'average', name: 'Avg' }],
					},
					data: expend_data,
				},
			],
		}

        myChart.setOption(option)
	}

	componentDidMount() {
		this.chartInit()
	}

	componentWillUnmount() {
		echarts.dispose(this.barRef.current)
	}
}
