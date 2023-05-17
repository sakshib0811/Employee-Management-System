import React from "react";
import Header from "./Header";
import Logout from "./Logout";
import Card from "./Card";
import "./EmployeeList.css";
import { useNavigate } from "react-router-dom";

function EmployeeList() {
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
        EMPLOYEE HIERARCHY
      </h3>
      <div className="employee-list">
        <Card rank={"SDE1"} list={"Get Employee Details"} path={"/SD1"} />
        <Card rank={"SDE2"} list={"Get Employee Details"} />
        <Card rank={"SDE3"} list={"Get Employee Details"} />
        <Card rank={"SDE4"} list={"Get Employee Details"} />
      </div>
      <div className="employee-list">
        <Card rank={"TA1"} list={"Get Employee Details"} />
        <Card rank={"TA2"} list={"Get Employee Details"} />
        <Card rank={"TA3"} list={"Get Employee Details"} />
        <Card rank={"TA4"} list={"Get Employee Details"} />
      </div>

      <div className="logout-btn mt-4">
        <Logout />
      </div>
    </div>
  );
}

export default EmployeeList;
