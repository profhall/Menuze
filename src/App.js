import React, { useState } from 'react'
import Menu from './Menu'
import Logo from "./components/Logo";

import Categories from './Categories'
import items from './data_'

const allCategories = ['all', ...new Set(items.map((item) => { if (item.avail) return item.category}))].filter(function( element ) {
  return element !== undefined;
})

console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <Logo />
          <h3>100% Vegan Soul Fusion Food</h3>
          <h4>sides are $5 individually</h4>
          <h4><u>Tax not included in price</u></h4>
          <h4><a target={"_blank"} href="https://www.instagram.com/thetastyplantbased.kitchen/">Follow Us On Instagram</a></h4>


          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
