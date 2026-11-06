import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cart, setCart] = useState([])

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  const appClass = darkMode ? 'app-shell dark' : 'app-shell'

  return (
    <div className={appClass}>
      <div className="app-content">
        <h1>🛒 Shopping App</h1>
        <p>
          Welcome! Your task is to implement filtering, cart management, and dark
          mode.
        </p>

        <div className="toolbar">
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <label>Filter by Category: </label>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option value="all">All</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy">Dairy</option>
          </select>
        </div>

        <ProductList
          selectedCategory={selectedCategory}
          onAddToCart={addToCart}
        />

        <Cart cartItems={cart} />
      </div>
    </div>
  )
}

export default App
