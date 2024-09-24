import { Signup } from "./assets/pages/signup";
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from "react-router-dom";
import { Signin } from "./assets/pages/signin";
import { useNavigate } from "react-router-dom";
import { Transfer } from "./assets/pages/transfer";
import { Dashboard } from "./assets/pages/dashboard";


function App() {
  return (
     <BrowserRouter>
     <App2></App2>
     </BrowserRouter>
   
  );
}
function App2(){
  return(
    <div>
    <div>
<Routes>
  <Route path="/signup" element={<Signup></Signup>}></Route>
  <Route path="/signin" element={<Signin/>}></Route>
  <Route path="/dashboard" element={<Dashboard/>}></Route>
  <Route path="/transfer" element={<Transfer/>}></Route>
</Routes>
    </div>
    </div>
  )
}

export default App;