import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Cart from '../components/Cart'
import Footer from '../components/Footer'

export default function Home() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (item) => {
    const existingItem = cart.find(i => i.id === item.id)
    if (existingItem) {
      setCart(cart.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ))
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(i => i.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      removeFromCart(id)
    } else {
      setCart(cart.map(i => i.id === id ? { ...i, quantity } : i))
    }
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <Head>
        <title>Шашлычный Дворик - Доставка шашлыка</title>
        <meta name="description" content="Доставка свежего шашлыка и гриля. Быстро, вкусно, горячо!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍖</text></svg>" />
      </Head>

      <Header totalItems={totalItems} onCartClick={() => setShowCart(!showCart)} />

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>🍖 Шашлычный Дворик</h1>
            <p>Аутентичный шашлык с доставкой на дом</p>
            <p className="hero-subtitle">Приготовлено на мангале • Свежее мясо • Быстрая доставка</p>
          </div>
        </section>

        <Menu addToCart={addToCart} />

        {showCart && (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            onClose={() => setShowCart(false)}
          />
        )}
      </main>

      <Footer />
    </>
  )
}
