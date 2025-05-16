import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles.css"
import Navbar from "./Navbar"
import StickyHeader from "./StickyHeader"
import Board from "./Board"
import StartHere from "./StartHere"
import Featured from "./Featured"
import PopularMenu from "./PopularMenu"
import Banner from "./Banner"
import { ValueProvider } from "./ValueContext"
import Footer from "./Footer"
import OrderPage from "./OrderPage"
import DealsPage from "./DealsPage"
import CheckoutPage from "./CheckoutPage"
import LocationsPage from "./LocationsPage"
import SignInPage from "./SignInPage"

function HomePage() {
  const featuredItems = [
    {
      url: "/fTag.jpg",
      desc: "Supreme Pizza - Loaded with pepperoni, Italian sausage, mushrooms, onions & green peppers"
    },
    {
      url: "/fTag.jpg",
      desc: "8 Boneless Wings + Fries Deal - Choose from multiple flavors"
    },
    {
      url: "/fTag.jpg",
      desc: "Meat Lover's® Pizza - Packed with pepperoni, Italian sausage, ham, bacon, seasoned pork & beef"
    },
    {
      url: "/fTag.jpg",
      desc: "Stuffed Crust Pizza - Our famous pizza with a ring of melted cheese baked into the crust"
    },
    {
      url: "/fTag.jpg",
      desc: "Big Dinner Box - Pizza, wings & breadsticks all in one box"
    }
  ];
   
  const popularPizzas = [
    {
      url: "/popularTag.webp",
      desc: "Pepperoni Lover's® Pizza - Extra pepperoni and extra cheese for extra flavor"
    },
    {
      url: "/popularTag.webp",
      desc: "Supreme Pizza - Our signature pizza loaded with everyone's favorite toppings"
    },
    {
      url: "/popularTag.webp",
      desc: "Veggie Lover's® Pizza - Fresh mushrooms, onions, green peppers, tomatoes & black olives"
    },
    {
      url: "/popularTag.webp",
      desc: "Buffalo Chicken Pizza - Grilled chicken, buffalo sauce & ranch with a blend of cheeses"
    }
  ];
    
  return (
    <>
      <Navbar />
      <StickyHeader />
      <Board path="/board.webp"/>
      <StartHere />
      <Featured path={featuredItems}/>
      <PopularMenu details={popularPizzas}/>
      <Banner />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ValueProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/menu" element={<OrderPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/delivery" element={<OrderPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/carryout" element={<OrderPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </Router>
    </ValueProvider>
  );
}
































// const [newItem, setNewItem] = useState("")
//   const [todos, setTodos] = useState([]);
  
//   function handleSubmit(e) {
//     e.preventDefault()

//     setTodos([ ...todos, {
//       id : crypto.randomUUID(), title: newItem, completed: false,
//     }])
//   }
  
//   console.log(todos);
//   return (
//     <>
//       <form onSubmit = {handleSubmit} className="new-item-form">
//         <div className="form-row">
//           <label htmlFor="item"> NewItem</label>
//           <input value = {newItem}
//           onChange = { e => setNewItem(e.target.value) }
//           type="text" id="item" />
//         </div>
//         <button className = 'btn'>Add</button>
//       </form>

//       <h1 className="header">TO DO LIST</h1>
//       <ul className="list">
//         <li>
//           <label htmlFor="">
//             <input type="checkbox" />
//             Item 1
//           </label>
//           <button className="btn btn-danger">Delete</button>
//         </li>
//         <li>
//           <label htmlFor="">
//             <input type="checkbox" />
//             Item 2
//           </label>
//           <button className="btn btn-danger">Delete</button>
//         </li>
//       </ul>
      
//     </>
  
//   )