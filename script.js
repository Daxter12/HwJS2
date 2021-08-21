class GoodsItem {
  constructor(title, price) {
    this.title = title
    this.price = price
  }
  render() {
    return `<div class="goods-item">
              <div class="img-wrap">
                <img src=" " alt="">
              </div>
              <h3>${this.title}</h3>
              <p>${this.price}</p>
              <button class="goods-button" type="button">Купить</button>
            </div>`
  }
}

class GoodsList {
  constructor() {
    this.goods = []
  }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 60 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ]
  }
  render() {
    let listHtml = ''
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.title, good.price)
      listHtml += goodItem.render()
    })
    document.querySelector('.goods-list').innerHTML = listHtml
  }

  // Вычисление суммарной стоимости товаров
  calcTotalPrice() {
    let sum = 0
    for (let i = 0; i < this.goods.length; i++) {
      sum = sum + this.goods[i].price
    }
    return sum
  }
}

class Cart {
  addItem() {}
  removeItem() {}
  calcTotalValue() {}
  clearCart() {}
}

class CartItem {}

const list = new GoodsList()
list.fetchGoods()
list.render()

// list.calcTotalPrice()
console.log(list.calcTotalPrice())
