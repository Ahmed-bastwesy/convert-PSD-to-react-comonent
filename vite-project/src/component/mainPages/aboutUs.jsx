import AboutContent from "../body/aboutContent";
import Footer from "../footer/footer";
import NavBar from "../header/navbar";


export default function About() {
  return (
    <div className="p-0 g-0">
      <div className="position-absolute top-0 w-100 h-25">
        <NavBar/>
      </div>
      <div className="position-absolute w-100 p-0 g-0" style={{margin:"100px"}} >
        <AboutContent/>
      </div>
      <div className="position-absolute bottom-0  w-100">
        <Footer/>
      </div>
    </div>
  );
}



