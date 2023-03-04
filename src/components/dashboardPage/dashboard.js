import "../../design/dashboardPage/dashBoardPage.css";
import { useOutletContext } from "react-router-dom";

const DashboardPage = () => {
  const obj = useOutletContext();
  return (
    <>
      <div className="dashboard">
        <h1>This is the dashboad page {obj.data}</h1>
      </div>
    </>
  );
};

export default DashboardPage;
