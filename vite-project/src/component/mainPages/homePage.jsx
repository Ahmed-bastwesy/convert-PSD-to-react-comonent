import imageurl from "../../public/images/car1.jpg";
import SlideContent from "../body/slideContent";
import Footer from "../footer/footer";
import NavBar from "../header/navbar";

export default function Home() {
  return (
    <div className="p-0 g-0">
      <div className="position-absolute top-0 w-100 h-25">
        <NavBar/>
      </div>
      <div className="position-absolute  w-100  p-0 g-0 mt-5 " style={{ backgroundImage:`url(${imageurl})`, backgroundRepeat: "no-repeat" , backgroundSize: "cover" ,height:"90%"}}>
        <SlideContent/>
      </div>
      <div className="position-absolute bottom-0  w-100">
        <Footer/>
      </div>
    </div>
  );
}

