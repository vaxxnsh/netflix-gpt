import { createBrowserRouter} from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { RouterProvider } from "react-router-dom"

function Body() {
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Login />
    },
    {
      path : "/browse",
      element : <Browse key="brw"/>
    }

  ])


 
  return (
      <div className="scroll-m-0 scroll-p-0 max-w-full overflow-x-hidden">
        <RouterProvider router={appRouter}/>
      </div> 
  )
}

export default Body;
