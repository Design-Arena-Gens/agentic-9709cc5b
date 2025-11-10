export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <section id="delivery" className="footer-section">
          <h3>🚗 Доставка</h3>
          <p>Бесплатная доставка при заказе от 1000 ₽</p>
          <p>Время доставки: 45-60 минут</p>
          <p>Зона доставки: в пределах города</p>
        </section>

        <section id="contacts" className="footer-section">
          <h3>📞 Контакты</h3>
          <p>Телефон: <a href="tel:+79991234567">+7 (999) 123-45-67</a></p>
          <p>Email: <a href="mailto:info@shashlik.ru">info@shashlik.ru</a></p>
          <p>Режим работы: 11:00 - 23:00</p>
        </section>

        <section className="footer-section">
          <h3>🍖 О нас</h3>
          <p>Готовим настоящий шашлык на углях</p>
          <p>Используем только свежее мясо</p>
          <p>Семейные рецепты маринада</p>
        </section>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Шашлычный Дворик. Все права защищены.</p>
      </div>
    </footer>
  )
}
