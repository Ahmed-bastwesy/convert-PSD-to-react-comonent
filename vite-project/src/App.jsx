import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./component/mainPages/aboutUs";
import Home from "./component/mainPages/homePage";
import PageNotFound from "./component/mainPages/PageNotFound";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/about"  element={<About />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  </BrowserRouter>,
    </div>
  )
}

export default App
