import { Signup } from "./assets/pages/signup";
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from "react-router-dom";
import { Signin } from "./assets/pages/signin";
import { Transfer } from "./assets/pages/transfer";
import { Dashboard } from "./assets/pages/dashboard";
import { SuccesfulTransaction } from "./assets/pages/SuccesfulTransaction";


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
  <Route path="/done" element={<SuccesfulTransaction/>}></Route>
</Routes>
    </div>
    </div>
  )
}

export default App;