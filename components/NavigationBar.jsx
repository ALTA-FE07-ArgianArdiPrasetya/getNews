import { Navbar } from "react-bootstrap";
import { IoNewspaperSharp } from "react-icons/io5";

const NavigationBar = () => {
  return (
    <>
      <Navbar fixed="top" className="bg-dark" variant="dark">
        <div className=" border border-dark text-white w-100 h-100 d-flex justify-content-center  align-items-center">
          <IoNewspaperSharp className="fs-3 " />
          <h1>News App</h1>
        </div>
      </Navbar>
    </>
  );
};

export default NavigationBar;
