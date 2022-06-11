
export default function Footer() {

    return (
      <div>
                <div className=" bg-dark text-white  d-flex justify-content-around">
                   <div >
                   <i class="fa-solid fa-phone"></i><a href="tel:0100-818-9925" className="text-decoration-none text-white"> 0100-818-9925</a><br/>
                   <i class="fa-solid fa-envelope"></i><a href = "mailto: ahmed.reda.bastawesy@gmail.com" className="text-decoration-none text-white"> ahmed.reda.bastawesy@gmail.com</a>
                   </div>
                   <div className=" mt-3 ">
                   <a href = "https://github.com/Ahmed-bastwesy" target="_blank" className="text-decoration-none text-white"> See my projects</a>
                   </div>
                   <div className=" mt-2 fs-3">
                   <a href = "https://github.com/Ahmed-bastwesy" target="_blank" className="text-decoration-none text-white"><i class="fa-brands fa-github"></i></a>
                   <a href = "https://www.linkedin.com/in/ahmed-bastwesy/" target="_blank" className="text-decoration-none text-white"><i class="fa-brands fa-linkedin ms-3"></i></a>
                   </div>
                </div>
      </div>
    );
  }