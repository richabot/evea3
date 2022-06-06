import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Products from "./components/Products/Products"
// eslint-disable-next-line
// import RequiredAuth from "./hoc/RequiredAuth";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
 
      <Navbar />
      <Routes>
      
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Products' element={<Products />} >
                </Route>
      
     </Routes> 
   
    </div>
  );
}

export default App;
