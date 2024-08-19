import { Route, Routes } from "react-router-dom";
import UserForm from "./components/data_read";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Maping from "./components/maping";


function App() {
  return (
   <>
      <Navbar/>

   
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='form' element={<UserForm/>} />
    <Route path='/map' element={<Maping/>} />



   </Routes>
   </>
  );
}

export default App;
