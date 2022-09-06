import React from 'react'
import styled from 'styled-components'
import { card_chip, BTC, ETH, visa, ICBC, card_pay } from '@/assets/card'



export default function CreditCard({ card_logo, card_name, account_balance, card_number, card_date }) {
	return (
		<CreditCardStyle className="creditCard">
			<div className="top">
				<div className="left">
					<div>
						<img src={card_logo} alt="" className="card_logo" />
					</div>
					<h3>{card_name}</h3>
				</div>
				<img className="right" src={visa} alt="" />
			</div>
			<div className="middle">
				<h2>¥ {moneyFormat(account_balance)}</h2>
				<img className="chip" src={card_chip} alt="" />
			</div>
			<div className="bottom">
				<div>
					<small>Card Number</small>
					<h3>{card_number}</h3>
				</div>
				<div className="right">
					<small>Expiry</small>
					<div className="card_date">{card_date}</div>
				</div>
				<img className="card_pay" src={card_pay} alt="" />
			</div>
		</CreditCardStyle>
	)
}

function moneyFormat(num) {
	if (num == null || num == undefined || (typeof num != 'number' && num != parseFloat(num))) {
		return '-'
	}
	return parseFloat(num).toLocaleString('zh-CN', { style: 'currency', currency: 'CNY', minimumFractionDigits: '0' }).slice(1)
}

CreditCard.defaultProps = {
    card_logo: ICBC,
	card_name: 'ICBC',
	account_balance: '20000',
	card_number: '622203 1507000******',
	card_date: '07/30',
}

const CreditCardStyle = styled.div`
	/* background-color: #e7d9a3; */
	background: linear-gradient(#e7d9a3, #ceba6b);
	color: #fff;
	width: 290px;
	height: 180px;
	border-radius: 14px;
	padding: 20px;
	/* box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.3); */
	box-shadow: 2px 1rem 2rem rgb(80 79 79 / 30%);
	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		h3 {
			margin: 0;
		}
		.left {
			display: flex;
			gap: 0.5rem;
			div {
				/* border: 1px solid #fff; */
				border-radius: 50%;
				overflow: hidden;
				width: 25px;
				height: 25px;
				display: flex;
				justify-content: center;
				align-items: center;
				.card_logo {
					width: 100%;
					height: 100%;
					transform: scale(1.5);
				}
			}
		}
		.right {
			width: 45px;
			height: 18px;
		}
	}
	.middle {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 25px 0 25px 6px;
		h2 {
			margin: 0;
			letter-spacing: 1px;
			font-family: 'Kalam';
			/* font-family: 'Nanum'; */
		}
		img {
			width: 40px;
			height: 30px;
		}
	}
	.bottom {
		display: flex;
		justify-content: space-between;
		gap: 1.6rem;
		color: #3a3a3a;
		position: relative;
		small {
			font-weight: 600;
		}
		h3 {
			font-weight: 300;
			font-size: 97%;
		}
		.card_date {
			font-weight: 300;
		}
		.right {
			z-index: 2;
		}
		.card_pay {
			position: absolute;
			width: 60px;
			height: 58px;
			top: -6px;
			right: -10px;
			opacity: 0.6;
		}
	}
`