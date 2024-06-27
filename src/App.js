import Home from "./Pages/Home";
import Track from "./Pages/Track";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import Homelang from "./Pages/Homelang";
import Tracklang from "./Pages/Tracklang";


function App() {
  return (
    <Router>
      <div className=" bg-gray-100 h-[100vh]">
      <Navbar/>
      <Routes>
      
      <Route path='/' element={<Home/>}  />
      <Route path='/track/:id' element={<Track/>}  />

      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
