/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
  
  const currency = '$'
  const delivery_fee = 10
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState({})
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');
  const navigate = useNavigate()

  const addToCart = async (itemId, size) => {

    if (!size) {
      toast.error('Please select product size!')
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/add', {itemId, size}, {headers: {token}});
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };
  };

  const getCartTotalItems = () => {

    let cartTotalItems = 0;

    for(const items in cartItems) {
      for(const item in cartItems[items]){
        try {
          if (cartItems[items][item] > 0) {
            cartTotalItems += cartItems[items][item]
          }
        } catch (error) {
          console.log(error);
          
        }
      }
    }

    return cartTotalItems;
  }

  const getCartAmount = () => {
    let totalAmount = 0;

    for(const items in cartItems) {
      const itemInfo = products.find((product) => product._id === items);
      
      for(const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += Math.ceil(itemInfo.price * cartItems[items][item]);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    return totalAmount;
  }

  const updateCart = async (id, size, quantity) => {

    let cartData = structuredClone(cartItems);
    
    cartData[id][size] = quantity;
    setCartItems(cartData);

    if (token) {
      try {
        const response = await axios.post(backendUrl + '/api/cart/update', {itemId: id, size, quantity}, {headers: {token}});
        console.log(response.data);
        
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  }

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(backendUrl + '/api/cart/get', {}, {headers: {token}});

      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  },[]);

  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
      getUserCart(localStorage.getItem('token'));
    }
  },[]);

  const value = {
    products, currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch,
    cartItems, addToCart, getCartTotalItems, updateCart,
    getCartAmount, navigate, backendUrl, setCartItems,
    token, setToken
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;