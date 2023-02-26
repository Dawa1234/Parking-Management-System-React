import "../../../design/bottom_info_css/contents_css/content1.css";

const Content1 = () => {
  return (
    <>
      <div className="content1">
        {/* Header */}
        <header>
          <h5>Address</h5>
        </header>
        {/* Bottom info */}
        <div>
          <span>
            {/* Icon */}
            <i className="material-icons">place</i>
          </span>
          <small>Boudha, Kathmandu</small>
        </div>
        <br />
        <div>
          <span>
            {/* Icon */}
            <i className="material-icons">phone</i>
          </span>
          <small>+977-9840355789</small>
        </div>
      </div>
    </>
  );
};

export default Content1;
