import Header from "./Header";
import useMovieData from "../hooks/useMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
const Browse = () => {
  console.log("calling api");
  useMovieData();

  return (
    <div className="w-full bg-black">
     <Header key="hd"/>
     <MainContainer key="mc"/>
     <SecondaryContainer key="sc"/>
    </div>
  )
}

export default Browse;