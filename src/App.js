import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import CartPage from './CartPage/CartPage';
import { CartProvider } from './CartContext';
import { useState } from 'react';
import ProductPage from './ProductPage/ProductPage';
import Checkout from './CartPage/CartPage';
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
      price: 1.00,
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
    image:"https://i.ibb.co/GvXpWLv/pexels-mart-production-7890206-1.jpg",
    type:"vegetables",
    
  },
  {
    id:2,
    name:"chanterelles",
    price:2.20,
    image:"https://i.ibb.co/g7xZhjV/pexels-joerg-hartmann-17739208.jpg",
    type:"shroomes",
    
  },
  {
    id:3,
    name:"blueberry",
    price:5.00,
    image:"https://i.ibb.co/3pv5JNw/pexels-olga-1153655.jpg",
    type:"berrys",
    
  },
  {
    id:4,
    name:"grape",
    price:2.00,
    image:"https://i.ibb.co/X8psF6n/pexels-maria-orlova-4946876.jpg",
    type:"fruit"
    
  },
  {
    id:5,
    name:"cucumber",
    price:1.00,
    image:"https://i.ibb.co/2WTP9qb/pexels-matthias-zomer-3568039.jpg",
    type:"vegetables"
    
  },
  {
    id:6,
    name:"courgette",
    price:4.50,
    image:"https://i.ibb.co/jH5rzTX/pexels-ellie-burgin-3375263.jpg",
    type:"vegetables"
    
  },
  {
    id:7,
    name:"Carrot",
    price:2.50,
    image:"https://i.ibb.co/4WhhK2s/pexels-suzy-hazelwood-1306559.jpg",
    type:"vegetables"

  },
  {
    id:8,
    name:"parsley",
    price:1.20,
    image:"https://i.ibb.co/xsW3bdQ/pexels-alleksana-4113888.jpg",
    type:"herbs",
    
  }, {
    id:9,
    name:"basil",
    price:4.00,
    image:"https://i.ibb.co/r4x3q97/pexels-eva-bronzini-5501050.jpg",
    type:"herbs"
 
  },
   {

    id:10,
    name:"chives",
    price:1.20,
    image:"https://i.ibb.co/9GmjhD4/pexels-jonathan-kemper-11761921.jpg",
    type:"herbs"

  },
  {

    id:11,
    name:"dill",
    price:1.20,
    image:"https://i.ibb.co/SXQ9Gbx/pexels-kokokara-12098996.jpg",
    type:"herbs"
    
  },
  {

    id:12,
    name:"lovage",
    price:3.00,
    image:"https://i.ibb.co/1M7WSNT/pexels-jordan-rushton-12329989-1.jpg",
    type:"vegetables"

  },

  {

    id:13,
    name:"nectarine",
    price:4.00,
    image:"https://i.ibb.co/VC0qXWZ/pexels-kseniya-kobi-8085336.jpg",
    type: 'fruit'
  },

  {

    id:14,
    name:"cabbage",
    price:2.00,
    image:'https://i.ibb.co/X7wJN5P/pexels-pixabay-257259.jpg',
    type:"vegetables"
    
  },


  {
    id: 15,
    name: 'Peaches',
    price: 2.99,
    image: 'https://i.ibb.co/Zm29fjS/peach-gbead77ccb-640.jpg',
    type: 'fruit'
   
},
{
    id: 16,
    name: 'Strawberrys',
    price: 4.99,
    image: 'https://i.ibb.co/S6sK3C7/strawberries-g91324ddda-640.jpg',
    type: 'fruit'
  
},
{
    id: 17,
    name: 'Paprika',
    price: 1.00,
    image: 'https://i.ibb.co/D7bBy1Q/bell-peppers-gc3855d807-640.jpg"',
    type: 'vegetable'
    
},
{
    id: 18,
    name: 'Eggplant',
    price: 3.50,
    image: 'https://i.ibb.co/p0QrGTJ/eggplant-gbd2ba8a1c-640.jpg',
    type: 'vegetable'
    

},
{
  id: 19,
  name: 'Tomato',
  price: 7.00,
  image: 'https://i.ibb.co/p0QrGTJ/eggplant-gbd2ba8a1c-640.jpg',
  type: 'vegetable'
  

}




])

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/"  element={<Home items={items}  infos={infos}/>} />
          <Route path="/cartpage" element={<CartPage  />} />
           <Route path='/products' element={<ProductPage products={products} />} /> 
           <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App;
