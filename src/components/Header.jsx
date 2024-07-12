import { useNavigate } from "react-router-dom";
import netflixLogo from "../assets/Netflix_Logo_PMS.png";
import { auth } from "../utils/firebase";
import {signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();

  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
       navigate("/");
    }).catch((error) => {
      
      navigate("/error");
    });
  }

  return (
    <>    
          <div className="absolute z-10 flex w-full bg-gradient-to-b from-black py-3 px-16 justify-between align-baseline">

            <img className=" w-52" src={netflixLogo} alt="Logo"/>

            {user && <button onClick={handleSignOut} 
                    className="text-white bg-red-600 w-24 my-5 font-medium on hover:bg-red-700 rounded"> Sign Out 
            </button>}
          </div>   
    </>
  )
  
}

export default Header