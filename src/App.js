import {Routes,Route}from "react-router-dom"
import './App.css';
import Home from "./pages/home/Home";
import ListProdcts from "./pages/listAllProduct/ListProdcts";
import AddProduct from "./pages/addProduct/AddProduct";

function App() {
  return (
    <div className="App">
      <h1>Admin Panel</h1>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/view" element={<ListProdcts/>}/>
        <Route exact path="/add" element={<AddProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
