import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove, update } from './Redux/productSlice'

function App() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product.items)

  const [form, setForm] = useState({ name: '', price: '', category: '', id: null })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.id) {
      dispatch(update(form))
    } else {
      dispatch(add(form))
    }
    setForm({ name: '', price: '', category: '', id: null })
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
        <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
        <button type="submit">{form.id ? 'Update' : 'Add'}</button>
      </form>

      <hr />

      <h3>Product List</h3>
      {products.map(p => (
        <div key={p.id} style={{ marginBottom: '10px' }}>
          <strong>{p.name}</strong> | ₹{p.price} | {p.category}
          <button onClick={() => setForm(p)}>Edit</button>
          <button onClick={() => dispatch(remove(p.id))}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default App
