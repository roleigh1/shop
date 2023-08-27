import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import { CartProvider } from './CartContext';
import { useState } from 'react';
import ProductPage from './ProductPage/ProductPage';
function App() {
  const [items] = useState([
    {
      id: 1,
      name: 'Peaches',
      price: 2.99,
      image: 'https://i.ibb.co/Zm29fjS/peach-gbead77ccb-640.jpg',
      type: 'Fruit'
  },
  {
      id: 2,
      name: 'Strawberrys',
      price: 4.99,
      image: 'https://i.ibb.co/S6sK3C7/strawberries-g91324ddda-640.jpg',
      type: 'Fruit'
  },
  {
      id: 3,
      name: 'Paprika',
      price: 1,
      image: 'https://i.ibb.co/D7bBy1Q/bell-peppers-gc3855d807-640.jpg"',
      type: 'Vegetable'
  },
  {
      id: 4,
      name: 'Eggplant',
      price: 3.50,
      image: 'https://i.ibb.co/p0QrGTJ/eggplant-gbd2ba8a1c-640.jpg',
      type: 'Vegetable'
  
  }
  ]);
  const [infos] = useState([
    {
      id: "1",
      name: "Lettuce",
      text: "Cultivated as leafy greens, lettuces are a staple in diets worldwide. Consumed fresh in salads, they're both crispy and nutritious.",
      image: 'https://i.ibb.co/BzJtwyx/image-16.jpg'
  },
  {
      id: "2",
      name: "Mint",
      text: "Mint, a fragrant herb, aids digestion in teas and food. Lettuce, globally grown, is crispy and nutritious in salads.",
      image: 'https://i.ibb.co/s1ks8wP/image-8.jpg'
  },
  {
      id: "3",
      name: "Tomato",
      text: "Essential in many cuisines, tomatoes balance both sweetness and acidity. Rich in lycopene, they are healthful and flavorful.",
      image: 'https://i.ibb.co/qDxhs6P/cherry-bush-tomatoes-healthy-vegetables-healthy-food-beautiful-fresh-red-tomatoes-twig.jpg'
  },
  {
      id: "4",
      name: "Apple",
      text: "Favored globally, apples are both delicious and health-promoting. Eaten raw or cooked, they're a testament to nature's bounty.",
      image: 'https://i.ibb.co/7Wh8xhJ/apple-1327789.jpg'
  }
])
  const [products] = useState([
    {
    id:1,
    name:"Brokkoli",
    price:4.00,
    image:"",
    type:"vegetables"
  },
  {
    id:2,
    name:"chanterelles",
    price:2.20,
    image:"",
    type:""
  },
  {
    id:1,
    name:"blueberry",
    price:5.00,
    image:"",
    type:""
  },
  {
    id:1,
    name:"grape",
    price:2.00,
    image:"",
    type:""
  },
  {
    id:1,
    name:"cucumber",
    price:1.00,
    image:"",
    type:""
  },
  {
    id:1,
    name:"courgette",
    price:4.50,
    image:"",
    type:""
  },
  {
    id:1,
    name:"Carrot",
    price:2.50,
    image:"",
    type:""
  },
  {
    id:1,
    name:"celeriac",
    price:2.00,
    image:"",
    type:""
  },
  {
    id:1,
    name:"parsley",
    price:1.20,
    image:"",
    type:""
  }, {
    id:1,
    name:"basil",
    price:4,
    image:"",
    type:""
  },
   {

    id:1,
    name:"chives",
    price:1.20,
    image:"",
    type:""
  },
  {

    id:1,
    name:"dill",
    price:1.20,
    image:"",
    type:""
  },
  {

    id:1,
    name:"lovage",
    price:3.00,
    image:"",
    type:""
  },

  {

    id:1,
    name:"nectarine",
    price:4.00,
    image:"",
    type:""
  },

  {

    id:1,
    name:"cabbage",
    price:2.00,
    image:"",
    type:""
  },

  {

    id:1,
    name:"yellow turnip",
    price:3.00,
    image:"",
    type:""
  }




])

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/"  element={<Home items={items}  infos={infos}/>} />
          <Route path="/checkout" element={<Checkout  />} />
           <Route path='/products' element={<ProductPage />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App;
