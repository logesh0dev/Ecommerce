import React from "react";
import { Routes, Route } from "react-router-dom"; // Do not import Router here
import { Home } from "../Pages/home";
import { Category } from "../Pages/Category";
import { Collections } from "../Pages/Collections";
import { Contact } from "../Pages/Contact";
import { Cart } from "../Pages/Cart";
import WhishList from "../Pages/WhishList";
import Account from "./Account";
import Product from "./Product";

export const RourterComponent = () => {
  return (
    <Routes  >
      <Route path="/" element={<Home />} />
      <Route path="category" element={<Category />} />
      <Route path="collections" element={<Collections />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart/>}/>
      <Route path="wishlist" element={<WhishList/>}/>
      <Route path="account" element={<Account/>} />
      <Route path="/product/:id" element={<Product/>}/>
    </Routes>
  );
};
