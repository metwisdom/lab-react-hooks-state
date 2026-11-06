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

  const appStyle = {
    backgroundColor: darkMode ? '#111827' : '#f5f5f5',
    color: darkMode ? '#f9fafb' : '#111827',
    minHeight: '100vh',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif'
  }

  return (
    <div style={appStyle}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

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

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={addToCart}
      />

      <Cart cartItems={cart} />
    </div>
  )
}

export default App
