import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.length === 0 ? (
          <li>No items in cart yet.</li>
        ) : (
          cartItems.map((item, index) => (
            <li key={`${item.name}-${index}`}>{item.name} is in your cart.</li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Cart
