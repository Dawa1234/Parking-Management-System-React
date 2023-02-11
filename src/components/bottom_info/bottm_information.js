import "../../design/bottom_info_css/bottom_information.css";
import Content1 from "./contents/content1";
import Content2 from "./contents/content2";
import Content3 from "./contents/content3";
import Content4 from "./contents/content4";

const BottomInformation = () => {
  return (
    <>
      {/* Bottom information  */}
      <div className="bottom-information">
        {/* First information */}
        <div className="first-info">
          {/* Address */}
          <Content1 />
          {/* About us */}
          <Content2 />
          {/* Why epark */}
          <Content3 />
          {/* QR code */}
          <Content4 />
        </div>
        {/* Second information */}
        <div className="second-info">
          {/* logo part */}
          <div className="bottom-logo">
            <span className="e">E</span>
            <span className="park">park</span>
          </div>

          <div className="info">
            © 2020 - 2023 Designed and Developed by Batch Id: 210097
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomInformation;
