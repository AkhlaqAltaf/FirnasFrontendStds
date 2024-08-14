import { Route, Routes } from "react-router-dom";
import UserForm from "./components/data_read";
import Navbar from "./components/navbar";


function App() {
  return (
   <>
      <Navbar/>

   
   <Routes>
    <Route path="/" element={<h1>Home page</h1>} />
    <Route path='form' element={<UserForm/>} />

   </Routes>
   </>
  );
}

export default App;
