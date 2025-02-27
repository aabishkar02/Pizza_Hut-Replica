
import { useState } from "react"
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

export default function App() {
  const val = [
    {url: "fTag.jpg", desc: "Constant COnstanasda asd asd as"},
    {url: "/fTag.jpg", desc: "Constant COnstanasddas as"},
    {url: "/fTag.jpg", desc: "Constant COnstanasddas as"},
    {url: "/fTag.jpg", desc: "Constant COnstanasddas as"},
    {url: "/fTag.jpg", desc: "Constant COnstanasddas as"}
  ];
   
  const popularPizzas = [
    {url: "/fTag.jpg", desc: "Constant COnstanasda asd asd as"},
    {url: "/fTag.jpg", desc: "Constant COnstanasddas as"},
    {url: "/fTag.jpg", desc: "Constant COnstanasddas as"},
    {url: "/fTag.jpg", desc: "Constant COnstanasddas as"}
  ];
    
  return <>

    <ValueProvider>
      <Navbar />
      <StickyHeader />
      <Board path = "/board.webp"/>
      <StartHere />
      <Featured path = {val}/>
      <PopularMenu details = {popularPizzas}/>
      <Banner />
      <Footer />
    </ValueProvider>

  </>
  
  
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