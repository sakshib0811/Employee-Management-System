import React from "react";
import Header from "./Header";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";
import "./EmployeeList.css";
import Card from "./Card";
function ManagerList() {
  const navigate = useNavigate();

  const onClickHandle = () => {
    navigate("/details", { replace: true });
  };
  return (
    <div className="conatiner-employe-list">
      <Header />
      <h3
        style={{ textAlign: "center", cursor: "pointer" }}
        className="mt-4"
        onClick={onClickHandle}
      >
        MANAGER HIERARCHY
      </h3>
      <div className="employee-list">
        <Card rank={"Manager1"} list={"Get Manager Details"} />
        <Card rank={"Manager2"} list={"Get Manager Details"} />
        <Card rank={"Manager3"} list={"Get Manager Details"} />
        <Card rank={"Manager4"} list={"Get Manager Details"} />
      </div>
      <div className="logout-btn mt-4">
        <Logout />
      </div>
    </div>
  );
}

export default ManagerList;
