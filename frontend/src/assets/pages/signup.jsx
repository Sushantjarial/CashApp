
import {InputBox} from "../components/inputBox.jsx"
import {SignButton} from "../components/signButton.jsx"
import { BottomWarning } from "../components/BottomWarning.jsx"
import image from '../images/img.jpg'
import { useNavigate } from "react-router-dom";
export function Signup(){
    const navigate=useNavigate();

    return(
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 ...   h-screen flex justify-center">
               <div className="flex  flex-col justify-center   ">
                 <div className="rounded-lg bg-white w-80 text-center p-2  px-4 border-2 border-transparent hover:border-black flex flex-col gap-2  ">
                    <h1 className="font-bold  ">Sign up </h1>
                        
                        <InputBox  label={"First Name"} placeholder="jagdeesh" />
                        <InputBox label={"Last Name"} placeholder="badmosh" />
                        <InputBox  label={"Email"} placeholder="omjaijagdeesh123@gmail.com"/>
                        <InputBox  label={"Password"} placeholder="password >8 characters"/>
                        <SignButton text="Sign up"/>
                        <BottomWarning text="Already have an account?" buttonText="Sign in" to="/signin"></BottomWarning>                     
                        
                    
                    
                        
                    </div>  
                    
                </div>         
                
        </div>
    )
}









// import { BottomWarning } from "../components/BottomWarning"
// import { Button } from "../components/Button"
// import { Heading } from "../components/Heading"
// import { InputBox } from "../components/InputBox"
// import { SubHeading } from "../components/SubHeading"

// export const Signup = () => {
//     return <div className="bg-slate-300 h-screen flex justify-center">
//     <div className="flex flex-col justify-center">
//       <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
//         <Heading label={"Sign up"} />
//         <SubHeading label={"Enter your infromation to create an account"} />
//         <InputBox placeholder="John" label={"First Name"} />
//         <InputBox placeholder="Doe" label={"Last Name"} />
//         <InputBox placeholder="harkirat@gmail.com" label={"Email"} />
//         <InputBox placeholder="123456" label={"Password"} />
//         <div className="pt-4">
//           <Button label={"Sign up"} />
//         </div>
//         <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
//       </div>
//     </div>
//   </div>
// }