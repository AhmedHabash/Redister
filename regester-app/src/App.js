import Signup from "./signup";
import Login from "./Login";
import Home from './Home'
import { Route , Routes } from "react-router-dom";


function App() {
  return (
<>
<Routes>
  <Route path="/" element={<Signup/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/home" element={<Home/>}></Route>


</Routes>


</>
  );
}

export default App;
