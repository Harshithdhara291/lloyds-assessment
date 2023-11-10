import {Route, BrowserRouter} from 'react-router-dom'
// import CartState from './context/CartState'
import AllProductsSection from './components/AllProductsSection'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={AllProductsSection} />
    <Route exact path="/cart" component={AllProductsSection} />
  </BrowserRouter>
)

export default App
