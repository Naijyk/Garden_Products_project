export const addDiscountUser = discount_user => {
    fetch('http://localhost:3333/sale/send', {
      method: 'POST',
      body: JSON.stringify(discount_user),
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
      .then(res => res.json())
      .then(json => console.log(json))
}