import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import UsersList from "./Pages/UsersList";
import Users from "./Pages/Users";
import Newuser from "./Pages/Newuser";
import Products from "./Pages/Products";

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="flex gap-x-3">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userslist" element={<UsersList />} />
          <Route path="/userslist/:userId" element={<Users />} />
          <Route path="/newuser" element={<Newuser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="/newproducts" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
