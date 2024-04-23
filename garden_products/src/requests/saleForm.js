import { domen } from "./allProducts"

export const addDiscountUser = discount_user => {
    fetch(`${domen}/sale/send`, {
      method: 'POST',
      body: JSON.stringify(discount_user),
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
      .then(res => res.json())
      .then(json => console.log(json))
}