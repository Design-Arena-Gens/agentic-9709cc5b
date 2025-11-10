const menuItems = [
  {
    id: 1,
    name: 'Шашлык из свинины',
    description: 'Сочное мясо, маринованное в специях',
    price: 450,
    weight: '300г',
    emoji: '🥓'
  },
  {
    id: 2,
    name: 'Шашлык из баранины',
    description: 'Нежное мясо молодого барашка',
    price: 550,
    weight: '300г',
    emoji: '🍖'
  },
  {
    id: 3,
    name: 'Шашлык из курицы',
    description: 'Диетический и полезный вариант',
    price: 350,
    weight: '300г',
    emoji: '🍗'
  },
  {
    id: 4,
    name: 'Люля-кебаб',
    description: 'Из рубленого мяса с зеленью',
    price: 400,
    weight: '250г',
    emoji: '🌯'
  },
  {
    id: 5,
    name: 'Овощи на гриле',
    description: 'Перец, баклажан, помидор, кабачок',
    price: 280,
    weight: '350г',
    emoji: '🍅'
  },
  {
    id: 6,
    name: 'Лаваш с мясом',
    description: 'Свежий лаваш с начинкой',
    price: 320,
    weight: '200г',
    emoji: '🫓'
  },
  {
    id: 7,
    name: 'Шашлык-микс',
    description: 'Свинина, баранина и курица',
    price: 650,
    weight: '400г',
    emoji: '🍢'
  },
  {
    id: 8,
    name: 'Картофель по-деревенски',
    description: 'Запеченный с травами',
    price: 180,
    weight: '300г',
    emoji: '🥔'
  }
]

export default function Menu({ addToCart }) {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Наше меню</h2>
        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-item">
              <div className="item-emoji">{item.emoji}</div>
              <h3>{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <div className="item-footer">
                <div className="item-info">
                  <span className="item-price">{item.price} ₽</span>
                  <span className="item-weight">{item.weight}</span>
                </div>
                <button
                  className="add-button"
                  onClick={() => addToCart(item)}
                >
                  Добавить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
