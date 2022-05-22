import dinero from "dinero.js";
import {calculateDiscount} from './discount.utils'

const Money = dinero

Money.defaultCurrency = 'BRL'
Money.defaultPrecision = 2

export default class Cart {
    items = [];

    add(item) {
        const indexDuplicatedItem = this.items.findIndex(itemCart => {
            return itemCart.product === item.product
        });

        if(indexDuplicatedItem > -1) {
            this.items.splice(indexDuplicatedItem, 1);
        }

        this.items.push(item)
    }

    remove(item) {
        const indexItem = this.items.findIndex(itemCart => {
            return itemCart.product === item
        });

        this.items.splice(indexItem, 1);
    }

    getTotal() {
        return this.items.reduce((acc, { quantity, product, condition }) => {
            const amount = Money({amount: product.price * quantity})
            let discount = Money({ amount: 0 })

            if(condition) {
                discount = calculateDiscount(amount, quantity, condition);
            }

            return acc.add(amount).subtract(discount)
        }, Money({ amount: 0 }));
    }

    summary() {
        const total = this.getTotal();
        const formatted = total.toFormat('$0,0.00');
        const items = this.items;

        return {
            total,
            formatted,
            items
        }
    }

    checkout() {
        const {total, items} = this.summary();

        this.items = []

        return {
            total,
            items
        }
    }
}