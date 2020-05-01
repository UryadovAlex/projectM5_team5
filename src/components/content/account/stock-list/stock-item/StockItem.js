import React from "react";
import style from './StockItem.module.css';

class StockItem extends React.Component {

    calculateProfit = (oldPrice, newPrice) =>{
        let profit = newPrice - oldPrice;
        let percent = profit/oldPrice * 100;
        return [profit, percent.toFixed(2)];
    }

// {
//     "id": "31",
//     "userId": "5",
//     "code": "NKE",
//     "amount": 4,
//     "purchasePrice": 737
// },

    render() {
        let {code, amount, purchasePrice, name} = this.props;
        //const [profit, percent] = this.calculateProfit(price, price -1);
        //const changing = {profit > 0 ? `+${profit}` : `${profit}`}$({percent}%)
        let price = purchasePrice.toString().split('.');
        return (
            <tr className={style.row}>
                <td className={style.symbol}>{code}</td>
                <td className={style.name}>
                    {name.slice(0, 12)}
                    <span className={style.transparent}>{name.slice(12, 14)}</span>
                </td>
                <td className={style.symbol}>{amount} pcs</td>
                <td className={style.price}>
                    {price[0]}{price[1] ? '.' : ''}<span className={style.decimal}>{price[1]}</span> $
                </td>
                <td className={style.change}>100%</td>
            </tr>
        );
    }
}

export default StockItem;