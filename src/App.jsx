import Navbar from "./componets/Navbar/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from './pages/Coin/Coin';
import Footer from "./componets/Footer/Footer";


const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/coin/:coinId" element={<Coin/>}/> 
      </Routes>
      <Footer/>
    </div>
  )
}
export default App
