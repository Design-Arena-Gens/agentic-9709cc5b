import { useState } from 'react'

export default function Cart({ cart, removeFromCart, updateQuantity, onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [showOrder, setShowOrder] = useState(false)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleOrder = (e) => {
    e.preventDefault()
    if (cart.length > 0 && name && phone && address) {
      setShowOrder(true)
    }
  }

  if (showOrder) {
    return (
      <div className="cart-overlay" onClick={onClose}>
        <div className="cart-panel success-panel" onClick={e => e.stopPropagation()}>
          <div className="success-content">
            <div className="success-icon">✅</div>
            <h2>Заказ принят!</h2>
            <p>Ваш заказ на сумму <strong>{total} ₽</strong> принят в обработку.</p>
            <p>Мы свяжемся с вами по телефону <strong>{phone}</strong> для подтверждения.</p>
            <p className="delivery-time">⏱️ Доставка через 45-60 минут</p>
            <button className="close-button" onClick={onClose}>Закрыть</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Корзина</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Корзина пуста</p>
            <p>🍖 Добавьте блюда из меню</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <span className="cart-item-emoji">{item.emoji}</span>
                    <div>
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">{item.price} ₽ × {item.quantity}</p>
                    </div>
                  </div>
                  <div className="cart-item-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <strong>Итого: {total} ₽</strong>
            </div>

            <form className="order-form" onSubmit={handleOrder}>
              <h3>Оформление заказа</h3>
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
              <textarea
                placeholder="Адрес доставки"
                value={address}
                onChange={e => setAddress(e.target.value)}
                required
                rows="3"
              />
              <button type="submit" className="order-button">
                Оформить заказ
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
