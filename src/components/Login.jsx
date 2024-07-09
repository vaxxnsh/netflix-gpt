import Header from "./Header"
import netflixBg from "../assets/Netflix_Background_Img.jpg";
import { useEffect, useState } from "react";



const Login = () => {

  const [isSignIn,setisSignIn] = useState(true);

  const changeForm = () => {

    setisSignIn(!isSignIn);

  };

  return (
    <div>
        <Header />

        <div className="w-full p-0 m-0">
            
              <form className="absolute top-1/4 left-1/3 w-3/12 h-auto bg-black/80 rounded px-6 py-5 ml-20 z-10">

                  <h1 className="text-white text-3xl my-6 font-bold">{(isSignIn === true ? "Sign In" : "Sign Up")}</h1>

                  {
                    !isSignIn && <input type="text" placeholder="Full name" className="my-4 p-3 w-full bg-gray-800/50 text-white" />
                  }
                
                  <input type="text" placeholder="Email" className="my-4 p-3 w-full bg-gray-800/50 text-white" />

                  <input type="password" placeholder="Password" className="my-4 p-3 w-full bg-gray-800/50 text-white"/>

                  <button className="my-4 p-3 w-full bg-red-600 text-white rounded hover:bg-red-700">{(isSignIn === true ? "Sign In" : "Sign Up")}</button>

                  <p className="text-white cursor-pointer underline hover:text-blue-700" onClick={() => changeForm()}>{(isSignIn) ? "New to Netflix? Sign Up." : "Already have an account? Sign In. "}</p>

              </form>

            <img src={netflixBg} alt="background-img" className="w-full h-auto"/>

        </div>
        
        <div className="w-full h-auto bg-black p-10 text-white">

                <h1 className="my-5 underline hover:text-blue-700">Questions? Call 000-800-919-1694</h1>

                <ul className="flex flex-wrap w-full text-white gap-x-60">

                  <li className=" underline hover:text-blue-700">FAQ</li>

                  <li className=" underline hover:text-blue-700">Help Center</li>
                  
                  <li className=" underline hover:text-blue-700">Term of use</li>

                  <li className=" underline hover:text-blue-700">Privacy</li>

                  <li className=" underline hover:text-blue-700">Cookie Prefrences</li>

                  <li className="my-5 underline hover:text-blue-700">Corporate Information</li>

                 </ul>
        </div>
        
    </div>
  )
}

export default Login;