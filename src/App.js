import {Routes,Route}from "react-router-dom"
import './App.css';
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<h1>Dashboard</h1>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
