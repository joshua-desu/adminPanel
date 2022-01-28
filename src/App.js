import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import "./App.css";
import Home from "./routes/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./routes/userlist";
import User from "./routes/user";
import NewUser from "./routes/newuser";
import ProductList from "./routes/productlist";
import Product from "./routes/products";
import NewProduct from "./routes/newproduct";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="routes">
        <Sidebar />
        <Routes>
         <Route exact path='/' element={<Home/>}></Route>
         <Route exact path='/userlist' element={<UserList/>}></Route>
         <Route exact path='/user' element={<User/>}></Route>
         <Route exact path='/newuser' element={<NewUser/>}></Route>
         <Route exact path='/productlist' element={<ProductList/>}></Route>
         <Route exact path='/products' element={<Product/>}></Route>
         <Route exact path='/newproduct' element={<NewProduct/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;