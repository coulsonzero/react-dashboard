import React, {Component} from "react"
import * as echarts from "echarts"

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
			// color:['#8C25FF','#0078FF'],
			// "backgroundColor": "#1A253A",
			legend: [
				{
					top: "70%",
					right: 30,
					itemGap: 12,
					textStyle: {
						fontSize: 12,
						// color: "#EFF4FF",
						color: "#242425",
					},
					icon: "circle",
					orient: "vertical",
					align: "left",
				},
			],
			radar: {
				center: ["40%", "50%"],
				indicator: [
					{
						name: "人力资源",
						max: 50,
					},
					{
						name: "技术",
						max: 50,
					},
					{
						name: "产品",
						max: 50,
					},
					{
						name: "经济交流",
						max: 50,
					},
					{
						name: "用户信息",
						max: 50,
					},
					{
						name: "订阅服务",
						max: 50,
					},
				],
				splitNumber: 5,
				startAngle: 0, //旋转的度数。
				// name: {
				// 	textStyle: {
				// 		// color: "#EFF4FF",
				// 		color: "#242425",
				// 	},
				// },
				axisName: {
					color: "#242425",
				},
				splitLine: {
					lineStyle: {
						color: "#1A466B",
					},
				},
				splitArea: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						color: "#1A466B",
					},
				},
			},
			series: [
				{
					type: "radar",
					data: [
						{
							name: "每日交易量",
							lineStyle: {
								// normal: {
								// "color": "#FF5BE2",
								color: "#8C25FF",
								width: 1,
								// },
							},
							value: [33, 33, 46, 46, 47, 37, 44],
							itemStyle: {
								// normal: {
								color: "#8C25FF",
								// },
							},
							areaStyle: {
								// normal: {
								color: "#8C25FF",
								// "opacity": 0.35
								opacity: 0.2,
								// },
							},
						},
						{
							name: "累计交易量",
							lineStyle: {
								// normal: {
								color: "#0078FF",
								width: 1,
								// },
							},
							value: [39, 45, 46, 41, 38, 43, 39],
							itemStyle: {
								// normal: {
								color: "#0078FF",
								// },
							},
							areaStyle: {
								// normal: {
								color: "#0078FF",
								opacity: 0.2,
								// },
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
