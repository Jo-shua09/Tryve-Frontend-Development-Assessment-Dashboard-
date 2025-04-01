import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import UsersList from "./Pages/Users/UsersList";
import Users from "./Pages/Users/Users";
import ProductsList from "./Pages/Products/ProductsList";
import Products from "./Pages/Products/Products";
import Newuser from "./Pages/Users/Newuser";
import Newproducts from "./Pages/Products/Newproducts";
import AppLayout from "./Layouts/AppLayout";
import Analysis from "./Pages/Analysis/Analysis";
import Sales from "./Pages/Sales/Sales";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/userslist" element={<UsersList />} />
          <Route path="/userslist/:userId" element={<Users />} />
          <Route path="/newuser" element={<Newuser />} />
          <Route path="/productslist" element={<ProductsList />} />
          <Route path="/productslist/:productId" element={<Products />} />
          <Route path="/newproducts" element={<Newproducts />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
