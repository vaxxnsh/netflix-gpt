import netflixLogo from "../assets/Netflix_Logo_PMS.png";

const Header = () => {

  return (
    <>    
          <ul className="absolute z-10 flex w-full list-none bg-gradient-to-b from-black py-3 px-16">
            <img className=" w-52" src={netflixLogo} alt="Logo"/>
          </ul>   
    </>
  )
  
}

export default Header