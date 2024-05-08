import { useState } from 'react'
import Header from './components/layout/header/Header'
import ProductCards from './components/productCards/ProductCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ProductCards />
      </main>

    </>
  )
}

export default App
