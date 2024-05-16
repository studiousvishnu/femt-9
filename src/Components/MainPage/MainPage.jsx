import "./MainPage.css";
import image from "../../assets/images/image-qr-code.png";
const MainPage = () => {
  return (
    <div className="container   d-flex justify-content-center min-vh-100 align-items-center">
      <div className="row ">
        <div className="col-lg-3"></div>
        <div className="container rounded-3 col-lg-6 bg-white p-3">
          <img className="rounded-3  w-100" src={image} alt="" />
          <div className="content-container">
            <h4 className="fw-bold pt-3 text-center">
              Improve your front-end skills by building projects
            </h4>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default MainPage;
