import Signup from "./signup";
import Login from "./Login";
import Home from './Home'
import { Route , Routes } from "react-router-dom";
import Cheken from './Meals/Cheken'
import Beef from './Meals/Beef'
import Salmon from './Meals/Salmon'

function App() {
  return (
<>
<Routes>
  <Route path="/" element={<Signup/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/cheken" element={<Cheken/>}></Route>
  <Route path="/beef" element={<Beef/>}></Route>
  <Route path="/salmon" element={<Salmon/>}></Route>

  

  




</Routes>


</>
  );
}

export default App;
