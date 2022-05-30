import React, {Component} from "react"
import * as echarts from "echarts"

export default class BarChart extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.barRef = React.createRef(null)
		this.chartInit = this.chartInit.bind(this)
	}

	render() {
		return <div ref={this.barRef} className="chart"></div>
	}

	chartInit() {
		const myChart = echarts.init(this.barRef.current)

		myChart.setOption({
			title: {
				text: "ECharts 入门示例",
				show: false,
			},
			tooltip: {},
			xAxis: {
				data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
				// 隐藏刻度线
				axisTick: {
					show: false,
				},
			},
			yAxis: {},
			series: [
				{
					name: "销量",
					type: "bar",
					data: [5, 20, 36, 10, 10, 20],
					// 柱体宽度
					barWidth: 12,
					// 柱体圆角
					itemStyle: {
						normal: {
							color: "#99e0f7",
							barBorderRadius: [8, 8, 0, 0],
						},
					},
				},
			],
		})
	}

	componentDidMount() {
		this.chartInit()
	}

	componentWillUnmount() {
		echarts.dispose(this.barRef.current)
	}
}
