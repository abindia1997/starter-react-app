import {Routes,Route}from "react-router-dom"
import './App.css';
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <h1>Admin Panel</h1>
      <Routes>
        <Route path="/" element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
