export default function Header({ totalItems, onCartClick }) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-icon">🍖</span>
          <span className="logo-text">Шашлычный Дворик</span>
        </div>
        <nav className="nav">
          <a href="#menu">Меню</a>
          <a href="#delivery">Доставка</a>
          <a href="#contacts">Контакты</a>
          <button className="cart-button" onClick={onCartClick}>
            🛒 Корзина {totalItems > 0 && <span className="badge">{totalItems}</span>}
          </button>
        </nav>
      </div>
    </header>
  )
}
