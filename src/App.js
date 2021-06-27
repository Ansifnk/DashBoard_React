
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

import './App.css';
import SideBar from './components/sideBar/sideBar';
import TopBar from './components/topBar/TopBar';
import Home from './pages/home/Home';
import NewUser from './pages/newUserPage/NewUser';
import ProductList from './pages/productList/ProductList';
import User from './pages/user/User';
import UserLists from './pages/userList/UserLists';
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  return (

    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/"  >
            <Home />
          </Route>
          <Route exact path="/users"  >
            <UserLists />
          </Route>
          <Route exact path="/user/:userId"  >
            <User />
          </Route>
          <Route exact path="/newUser"  >
            <NewUser />
          </Route>
          <Route exact path="/products"  >
            <ProductList />
          </Route>
          <Route exact path="/products/:productId"  >
            <Product />
          </Route>
          <Route exact path="/newProduct"  >
            <NewProduct />
          </Route>

        </Switch>

      </div>

    </Router>



  );
}

export default App;
