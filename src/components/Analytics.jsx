import React, { Component } from 'react'
import styled from 'styled-components'
import CreditCard from '@/container/CreditCard'
import { card_chip, BTC, ETH, visa, ICBC, CMB, CCB } from '@/assets/card'
import { HiOutlineChevronRight } from 'react-icons/hi'
import axios from 'axios'
import { flushSync } from 'react-dom'


export default class AntdCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			credit_card_info: [
				{ id: '1', card_logo: ICBC, card_name: 'ICBC', account_balance: '103762', card_number: '622203 1507000******', card_date: '07/30' },
				{ id: '2', card_logo: CMB, card_name: 'CMB', account_balance: '71684', card_number: '6214 8310 7113 ****', card_date: '03/22' },
				{ id: '3', card_logo: CCB, card_name: 'CCB', account_balance: '32172', card_number: '6217 0000 1017 0644 ****', card_date: '05/31' },
			],
			overflow_date: '',
			// rank
			rank_title_month: '',
			rank_title: '月消费排行榜',
			rank_columns: [
				{ title: '', dataIndex: 'rank' },
				{ title: '商家', dataIndex: 'name' },
				{ title: '消费金额', dataIndex: 'total_expense' },
			],
			rank_data: [
				{ name: '总计', total_expense: '424.03' },
				{ name: '蜜雪冰城', total_expense: '96.00' },
				{ name: '美团', total_expense: '82.00' },
				{ name: '刀削面', total_expense: '59.60' },
				{ name: '麻辣烫', total_expense: '51.14' },
				{ name: '手机充值', total_expense: '50.00' },
				{ name: '咖啡', total_expense: '22.00' },
				{ name: '腾讯视频', total_expense: '20.00' },
				{ name: '...', total_expense: '...' },
			],
			// sql
			sql_columns: [
				{ title: '', dataIndex: 'id' },
				{ title: '交易时间', dataIndex: 'date' },
				{ title: '商家', dataIndex: 'name' },
				{ title: '描述', dataIndex: 'description' },
				{ title: '金额(元)', dataIndex: 'expense' },
				{ title: '支付方式', dataIndex: 'pay_method' },
			],
			sql_data: [
				{ date: '2022-09-07 15:45', name: '蜜雪冰城', expense: '10.00', pay_method: '零钱' },
				{ date: '2022-09-07 15:25', name: '晋三根手工刀削面', expense: '22.00', pay_method: '零钱' },
				{ date: '2022-09-06 19:39', name: '蜜雪冰城', expense: '8.00', pay_method: '零钱' },
				{ date: '2022-09-06 19:22', name: '晋三根手工刀削面', expense: '26.00', pay_method: '零钱' },
				{ date: '2022-09-06 13:39', name: '蜜雪冰城', expense: '14.00', pay_method: '零钱' },
				{ date: '2022-09-06 12:56', name: '砂锅麻辣烫', expense: '24.33', pay_method: '零钱' },
				{ date: '2022-09-05 17:57', name: '晋三根手工刀削面', expense: '33.60', pay_method: '零钱' },
				{ date: '2022-09-03 14:26', name: '腾讯视频', expense: '20.00', pay_method: '零钱' },
				{ date: '2022-09-03 12:50', name: '蜜雪冰城', expense: '13.00', pay_method: '零钱' },
				{ date: '2022-09-02 15:10', name: '咖啡', expense: '22.00', pay_method: '零钱' },
				{ date: '2022-09-02 09:40', name: '手机充值', expense: '50.00', pay_method: '零钱' },
				{ date: '2022-09-01 20:54', name: '蜜雪冰城', expense: '8.00', pay_method: '零钱' },
				{ date: '2022-09-01 14:58', name: '蜜雪冰城', expense: '9.00', pay_method: '零钱' },
				{ date: '2022-09-01 14:36', name: '北京地铁', expense: '3.00', pay_method: '零钱' },
				{ date: '2022-09-01 13:08', name: '美团', expense: '82.00', pay_method: '零钱', description: '烤肉自助餐' },
			],
			sql_filter_data: [],
		}
	}

	componentDidMount() {
		this.axiosFetchRank()
		this.axiosFetchData()
		this.initSqlFilter()
		this.initInputData()
		setTimeout(() => {
			console.log(this.state.sql_filter_data)
		}, 1000)

	}


	// 接口请求: 排行榜
	axiosFetchRank = async () => {
		await axios
			.get('http://localhost:8080/api/v1/rank')
			.then((res) => {
				this.setState({
					rank_data: res.data.data
				})
			})
			.catch((err) => {
				console.log(err)
			})
	}

	// 接口请求: 表格数据
	axiosFetchData = async () => {
		await axios
			.get('http://localhost:8080/api/v1/bills')
			.then((res) => {
				// console.log(JSON.stringify(res.data, null, 2))
				this.setState({
					sql_filter_data: res.data.data,
					sql_data: res.data.data
				})
			})
			.catch((err) => {
				console.log(err)
			})
	}

	// 排行榜消费详情
	searchClick = (name) => {
		const { sql_data, sql_filter_data } = this.state
		const res = name === '总计' ? sql_data : sql_data.filter((item) => item.name.includes(name))
		this.setState({ sql_filter_data: res })
	}

	// 初始化表格数据
	initSqlFilter = () => {
		const { sql_data } = this.state
		this.setState({
			sql_filter_data: sql_data,
		})
	}

	// 初始化日期
	initInputData = () => {
		const res = new Date().toLocaleString().split(' ')[0].replaceAll('/', '-').split('-')
		this.setState({
			overflow_date: res[0] + '-' + res[1].padStart(2, '0') + '-' + res[2].padStart(2, '0'),
		})
		this.setState({
			rank_title_month: Number(res[1]),
		})
	}

	// 日期输入框change事件
	changeDate = (e) => {
		this.setState({ overflow_date: e.target.value })
		this.setState({
			rank_title_month: Number(this.state.overflow_date.split('-')[1]),
		})
	}

	render() {
		const { credit_card_info } = this.state

		const credit_card_container = credit_card_info.map((item, index) => {
			return (
				<CreditCard
					card_logo={item.card_logo}
					card_name={item.card_name}
					account_balance={item.account_balance}
					card_number={item.card_number}
					card_date={item.card_date}
					key={index}
				/>
			)
		})

		// rank
		const { rank_data, rank_columns, rank_title, rank_title_month } = this.state
		const rankDataRow = rank_data.map((item, index) => {
			return (
				<div className="table-row" key={index}>
					<div className="table-cell">{index}</div>
					<div className="table-cell">{item.name}</div>
					<div
						className="table-cell">
						<div
							onClick={() => {
								this.searchClick(item.name)
							}}
							className="amount-action">
							<span>
								{!(item.name === '...' || item.name === '') && '¥ '}
								{item.total_expense}
							</span>
						</div>
					</div>
					<div
						className="table-cell"
						onClick={() => {
							this.searchClick(item.name)
						}}>
						<button className="more-action">
							<HiOutlineChevronRight />
						</button>
					</div>
				</div>
			)
		})
		const rankColumns = rank_columns.map((item, index) => {
			return (
				<div className="column-header table-cell" key={index}>
					<div>{item.title}</div>
				</div>
			)
		})

		// table
		const { sql_columns, sql_data, sql_filter_data } = this.state
		const sqlColumns = sql_columns.map((item, index) => {
			return (
				<div className="column-header table-cell" key={index}>
					<div>{item.title}</div>
				</div>
			)
		})
		const sqlDataRow = sql_filter_data.map((item, index) => {
			return (
				<div className="table-row" key={index}>
					<div className="table-cell">{index + 1}</div>
					<div className="table-cell">{item.date}</div>
					<div className="table-cell">{item.name}</div>
					<div className="table-cell">{item.description}</div>
					<div className="table-cell">- {item.expense}</div>
					<div className="table-cell">{item.pay_method}</div>
				</div>
			)
		})



		return (
			<AnalyticsStyle className="section-wrapper">
				<div className="section-title">Analytics</div>
				<div className="header-date">
					<h1>Overview</h1>
					<input type="date" value={this.state.overflow_date} onChange={this.changeDate} />
				</div>
				<div className="analytics-container">
					<div className="creditCard-container">{credit_card_container}</div>
					{/* rank */}
					<div className="right-container">
						<div className="rank-container">
							<div className="rank-name">{rank_title_month + rank_title}</div>
							<div className="custom-table">
								<div className="table-header">{rankColumns}</div>
								{rankDataRow}
							</div>
						</div>
					</div>
				</div>
				{/* sql */}
				{/* <div className="sql-wrapper">
					<button>
						<span>year</span>
					</button>
					<button>month</button>
				</div> */}
				<div className="sql-container">
					<div className="custom-table">
						<div className="table-header">{sqlColumns}</div>
						<div className="table-data">{sqlDataRow}</div>
					</div>
				</div>
			</AnalyticsStyle>
		)
	}
}

const AnalyticsStyle = styled.section`
	width: 100%;

	.analytics-container {
		display: flex;
	}
	.header-date {
		display: flex;
		input[type='date'] {
			padding: 10px 20px;
			border-radius: 30px;
			margin-left: 30px;
		}
	}
	.creditCard-container {
		width: 70%;
		/* display: flex; */
		/* justify-content: space-between; */
		/* gap: 1rem; */
		/* margin: 0 auto; */
		overflow-x: scroll;
		display: -webkit-box;
		padding: 20px 20px;
		height: 260px;
		&::-webkit-scrollbar {
			width: 0.2px;
			display: none;
		}
		&::-webkit-scrollbar-thumb {
			background: transparent;
		}
		&::-webkit-scrollbar-track {
			background: transparent;
		}
	}
	.creditCard:nth-child(1) {
		background: linear-gradient(rgb(25 194 166 / 80%), #5d70ffc9);
		background: linear-gradient(rgb(44 85 196 / 82%), #266bd79e);
		/* background: linear-gradient(rgb(40 64 131 / 84%), #266bd79e); */
		background: linear-gradient(rgb(63 98 194 / 82%), #266bd79e);
	}
	.creditCard:nth-child(2) {
		background: linear-gradient(rgb(230 169 227 / 80%), #8e99ebc9);
	}
	.creditCard:nth-child(3) {
		background: linear-gradient(#e7d9a3, #ceba6b);
	}

	.right-container {
		width: 28%;
		margin: 20px;
		margin-right: 0;
	}
	.rank-container {
		background: #fff;
		border-radius: 15px;
		color: #000;
		height: 307px;
		overflow-y: scroll;
		box-shadow: 0 2px 6px 0 rgb(136 148 171 / 20%), 0 24px 20px -24px rgb(71 82 107 / 10%);
		&::-webkit-scrollbar {
			display: none;
		}
	}
	.rank-name {
		padding: 20px 10px 0px 20px;
	}

	/* rank */
	.custom-table {
		background-color: #fff;
		border-radius: 12px;
		padding: 12px;
		display: table;
		table-layout: auto;
		width: 100%;
		.table-cell {
			display: table-cell;
			font-size: 12px;
			line-height: 16px;
			padding: 8px;
			white-space: nowrap;
			max-width: 120px;
			overflow: scroll;
			&::-webkit-scrollbar {
				display: none;
			}
		}
		.table-cell:not(.table-header) {
			color: #787878;
		}
		.table-header {
			display: table-header-group;
		}
		.table-row {
			display: table-row-group;
		}
		.amount-action {
			cursor: pointer;
		}
		.more-action {
			border: none;
			background-color: transparent;
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
			width: 16px;
			height: 16px;
			outline: none;
			cursor: pointer;
			transform: translateY(3px);
			transition: all 0.1s ease;
			border: 1px solid transparent;
			border-radius: 50%;
			color: #cacaca;
			svg {
				width: 100%;
				height: 100%;
			}
		}
		/* .table-cell:nth-child(3) {
			border: 1px solid transparent;
			border-radius: 50%;
			transition: all 0.15s ease;
		}
		.table-cell:nth-child(3):hover {
			border-color: #323232;
		} */
		.table-cell:last-child:hover .more-action {
			color: #323232;
			/* border-color: #acabab; */
		}
	}
	.rank-container .table-cell:nth-child(2) {
		min-width: 106px;
		max-width: 106px;
	}
	.rank-container .table-cell:nth-child(4),
	.rank-container .table-cell:nth-child(3):not(.column-header) {
		border: 1px solid transparent;
		border-radius: 50%;
		transition: all 0.1s ease;
	}
	.rank-container .table-cell:nth-child(4):hover,
	.rank-container .table-cell:nth-child(3):not(.column-header):hover {
		border-color: #323232;
	}
	.sql-container {
		height: 263px;
		overflow-y: scroll;
		border-radius: 16px;
		.custom-table {
			padding: 10px 30px 20px 30px;
			border-radius: 16px;
			.table-header {
				position: sticky;
				top: 0px;
				background: #4b4b4b;
				font-weight: 700;
				div {
					color: #fff;
				}
			}
			.table-cell {
				letter-spacing: 1px;
				width: 20%;
			}
			.table-cell:first-child {
				width: 5%;
			}
			.table-cell:nth-child(5),
			.table-cell:last-child {
				text-align: right;
			}
			.table-data {
				display: contents;
			}
		}
	}

	.sql-wrapper {
		button {
			position: relative;
			padding: 6px 30px;
			background: transparent;
			border: 1px solid #323232;
			border-radius: 20px;
			margin: 0 10px 10px;
			cursor: pointer;
			transition: all 0.2s ease;
			overflow: hidden;
		}
		button:hover {
			background: #323232;
			color: #fff;
		}
		/* button:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 50%;
			height: 100%;
			background: #000;
			transition: all 0.2s ease;
			z-index: 0;
		}
		button:hover:before {
			width: 100%;
		}
		button span {
			color: red;
		}
		button:hover span {

		} */
	}
`