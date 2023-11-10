import {BiSolidChevronRight} from 'react-icons/bi'
import EachProduct from '../EachProduct'
import './index.css'

const EachCategory = props => {
  const {eachcat} = props
  const {name, products} = eachcat
  const idname = name.split(' ')
  const iname = idname.join(' ')
  console.log(iname)

  const RenderProducts = () => (
    <div className="products-list">
      {products.map(each => (
        <EachProduct each={each} key={each.id} />
      ))}
    </div>
  )

  return (
    <div id={`${name}`}>
      <h1>
        {name} <BiSolidChevronRight />{' '}
      </h1>
      {RenderProducts()}
    </div>
  )
}

export default EachCategory
