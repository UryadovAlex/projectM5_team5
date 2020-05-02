import React from "react";
import style from './StockItem.module.css';
import inc from '../../img/inc.png';
import dec from '../../img/dec.png';

class StockItem extends React.Component {

    calculateProfit = (oldPrice, newPrice) => {
        let profit = newPrice - oldPrice;
        let percent = profit / oldPrice * 100;
        return [profit, percent.toFixed(2)];
    }

    render() {

        let {symbol, amount, purchasePrice, name, priceInMarket, price} = this.props;
        purchasePrice = purchasePrice.toFixed(2).toString().split('.');
        const [profit, percent] = this.calculateProfit(price, priceInMarket)
        const plus = profit > 0 ? '+' : '';
        const sign = profit > 0 ? inc : profit < 0 ? dec : '';
        const color = [style.change, profit > 0 ? style.green : profit < 0 ? style.red : ''].join(' ')

        return (
            <tr className={style.row}>
                <td className={style.symbol}>{symbol}</td>
                <td className={style.name}>{name}</td>
                <td className={style.symbol}>{amount} pcs</td>
                <td className={style.price}>
                    {purchasePrice[0]}{purchasePrice[1] ? '.' : ''}
                    <span className={style.decimal}>{purchasePrice[1]} $</span>
                </td>
                <td className={color}>
                    {profit !== 0 && <img src={sign} alt="sign"/>}
                    {plus}{(profit * amount).toFixed(2)}$({plus}{percent}%)
                </td>
            </tr>
        );
    }
}

export default StockItem;