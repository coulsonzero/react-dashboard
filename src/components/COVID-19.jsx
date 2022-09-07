import React from 'react'
import styled from 'styled-components'


export default class COVID_19 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tableData: [
				{ area: '全国', local_add: '323', outside_add: '57', silent: '1247', high_risk_area: '3428', exist_confirmed: '5709', total_confirmed: '6144277', total_cure: '325510', total_death: '25088' },
				{ area: '北京', local_add: '14', outside_add: '4', silent: '0', high_risk_area: '12', exist_confirmed: '53', total_confirmed: '4025', total_cure: '3963', total_death: '9' },
			],
			columns: [
				{ title: '地区', dataIndex: 'area' },
				{ title: '本土新增', dataIndex: 'local_add' },
				{ title: '境外新增', dataIndex: 'outside_add' },
				{ title: '无症状', dataIndex: 'silent' },
				{ title: '中高风险地区', dataIndex: 'high_risk_area' },
				{ title: '现有确诊', dataIndex: 'exist_confirmed' },
				{ title: '累计确诊', dataIndex: 'total_confirmed' },
				{ title: '累计治愈', dataIndex: 'total_cure' },
				{ title: '累计死亡', dataIndex: 'total_death' },
			],
		}
	}
	render() {
        const { tableData, columns } = this.state
        const tableDataRow = tableData.map((item, index) => {
            return (
                <div className="table-row" key={index}>
                    <div className="table-cell emphassize">{item.area}</div>
                    <div className="table-cell emphassize">{item.local_add}</div>
                    <div className="table-cell">{item.outside_add}</div>
                    <div className="table-cell">{item.silent}</div>
                    <div className="table-cell">{item.high_risk_area}</div>
                    <div className="table-cell emphassize">{item.exist_confirmed}</div>
                    <div className="table-cell">{item.total_confirmed}</div>
                    <div className="table-cell">{item.total_cure}</div>
                    <div className="table-cell">{item.total_death}</div>
                </div>
            )
        })

        const tableColumns = columns.map((item, index) => {
            return (
                <div className="column-header table-cell" key={index}>
                    <div className={(item.dataIndex === "local_add" || item.dataIndex === "exist_confirmed") && "emphassize" }>{item.title}</div>
                </div>
            )
        })

		return (
			<COVID_19_Style className="section-wrapper">
				<div className="section-title">COVID-19</div>
				<div className="section-wrapper">
					<div className="custom-table">
						<div className="table-header">{tableColumns}</div>
						{tableDataRow}
					</div>
				</div>
			</COVID_19_Style>
		)

    }
}


const COVID_19_Style = styled.section`
	.custom-table {
		background-color: #fff;
		box-shadow: 0 2px 6px 0 rgb(136 148 171 / 20%), 0 24px 20px -24px rgb(71 82 107 / 10%);
		border-radius: 12px;
		padding: 12px;
		display: table;
		table-layout: auto;
		width: 100%;
		.table-cell {
			display: table-cell;
			font-size: 12px;
			line-height: 16px;
			color: #787878;
			padding: 8px;
			text-align: right;
		}
		.emphassize {
			font-weight: bold;
			color: #000;
		}
		.table-header {
			display: table-header-group;
			.column-header {
				font-size: 12px;
				line-height: 16px;
				color: #888da9;
			}
			.size-cell {
				width: 20%;
			}
		}
		.table-row {
			display: table-row-group;
			.name-cell {
				width: 40%;
				word-break: break-all;
				&::before {
					border-radius: 4px;
					font-size: 8px;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 4px;
					display: inline-block;
					vertical-align: middle;
					margin-right: 4px;
				}
				&.pdf::before {
					content: 'PDF';
					background-color: #e2e9f8;
					color: #5a8ff7;
				}
				&.jpg:before {
					content: 'JPG';
					background-color: #e4e2f1;
					color: #302d7d;
				}
				&.png::before {
					content: 'JPG';
					background-color: #f8e8f6;
					color: #2caa7e;
				}
			}
		}
	}
`