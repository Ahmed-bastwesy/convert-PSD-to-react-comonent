import { Link } from "react-router-dom";
import aboutImg from "../../public/images/about.jpg";

export default function AboutContent() {

    return (
        <div className="card mb-3" >
        <div className="row g-0">
            <div className="col-md-4"> 
            <img src={aboutImg} className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body w-50 text-center mt-5">
                <h2 className="card-title text-dark fw-bolder ">About US</h2>
                <p className="card-text">Charger customs , luxury automotive restyling center based in corona ,There is no limit for what we can do </p>
                <Link to="/" className="btn btn-outline-danger card-link">More</Link>
            </div>
            </div>
        </div>
        </div>

    );
}