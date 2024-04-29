import { Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";

function App() {
 
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Feed/>}/>
      </Routes>
    </div>
  );
}

export default App;
