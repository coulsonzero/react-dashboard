import React, { Component } from 'react'
import styled from 'styled-components'
import { card_chip, BTC, ETH, visa, ICBC, CMB, CCB } from '@/assets/card'
import CreditCard from '@/container/CreditCard'

export default class AntdCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			credit_card_info: [
                { id: '1', card_logo: ICBC, card_name: 'ICBC', account_balance: '127930', card_number: '622203 1507000******', card_date: '07/30' },
				{ id: '2', card_logo: CMB, card_name: 'CMB', account_balance: '51600', card_number: '6214 8310 7113 ****', card_date: '03/22' },
				{ id: '3', card_logo: CCB, card_name: 'CCB', account_balance: '32172', card_number: '6217 0000 1017 0644 ****', card_date: '03/22' },
            ],
		}
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

		return (
			<AnalyticsStyle className="section-wrapper">
				<div className="section-title">Analytics Demo</div>
				<div className="analytics-container">
					<div className="creditCard-container">{credit_card_container}</div>
					<div className="right-container">
						<div className="rank-container">top</div>
					</div>
				</div>
			</AnalyticsStyle>
		)
	}
}

const AnalyticsStyle = styled.section`
	width: 100%;
    .section-wrapper {
        padding: 0;
    }
	.analytics-container {
		display: flex;
	}
	.creditCard-container {
		width: 70%;
		/* display: flex; */
		/* justify-content: space-between; */
		gap: 2rem;
		/* margin: 0 auto; */
		overflow-x: scroll;
		display: -webkit-box;
		padding: 20px 30px;
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
		width: 30%;
		margin-top: 20px;
	}
	.rank-container {
		background-color: #323232;
		border-radius: 15px;
		color: #fff;
		height: 300px;
	}
`