import {useEffect, useState} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import EachCategory from '../EachCategory'
import './index.css'

const AllProductsSection = () => {
  const [categoryList, setCategoryList] = useState([])

  const getProductData = async () => {
    const url = 'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d'
    const response = await fetch(url)
    const data = await response.json()
    const filteredList = data.categories
    if (response.ok) {
      setCategoryList(filteredList)
    }
  }

  useEffect(() => {
    getProductData()
  }, [])

  const RenderCategories = () => (
    <div>
      {categoryList.map(eachcat => (
        <EachCategory eachcat={eachcat} key={eachcat.name} />
      ))}
    </div>
  )

  const CategoryNames = () => {
    console.log(categoryList)
    return (
      <div className="category-names">
        {categoryList.map(each => (
          <li className="category-item" key={each.name}>
            <a className="category-names-head" href={`#${each.name}`}>
              {each.name}
            </a>
          </li>
        ))}
      </div>
    )
  }

  const Header = () => (
    <nav className="ecommerce-header">
      <h1>ECommerce</h1>
      <AiOutlineShoppingCart className="cart-icon" />
    </nav>
  )

  return (
    <div className="home-container">
      {Header()}
      <div className="second-container">
        <div className="category-names-1">{CategoryNames()}</div>
        <div className="categories">{RenderCategories()}</div>
      </div>
    </div>
  )
}

export default AllProductsSection
