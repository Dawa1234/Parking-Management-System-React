import { Link } from "react-router-dom";
import "../../../design/bottom_info_css/contents_css/content2.css";
const Content2 = () => {
  return (
    <>
      <div className="content2">
        {/* Header */}
        <header>
          <h5>About Epark</h5>
        </header>
        {/* Bottom info */}
        <div>
          <Link to="/ourPolicies">
            <small>Our polices</small>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Content2;
