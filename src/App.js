import { Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import ErrorComponent from "./pages/ErrorComponent";
import Feed from "./pages/Feed";
import VideoDetails from "./pages/VideoDetails";

function App() {
 
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Feed/>} errorElement={<ErrorComponent/>}/>
        <Route path= "/video/:id" element= {<VideoDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
