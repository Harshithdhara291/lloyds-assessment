import './index.css'

const EachProduct = props => {
  const {each} = props
  const {image, price, weight, name} = each
  return (
    <div className="each-product">
      <img src={image} alt={name} className="product-image" />
      <h1 className="product-name">{name}</h1>
      <p className="product-price">{price}</p>
      <p className="product-price">{weight}</p>
      <footer>
        <button type="button">Add to Cart</button>
      </footer>
    </div>
  )
}

export default EachProduct
