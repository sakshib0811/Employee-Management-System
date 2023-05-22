import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EmpDetails() {
  const { empid } = useParams();

  const [empdata, setEmpdata] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employeeSdOne/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpdata(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="mt-4">
      {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

      <div className="container">
        <div className="card row" style={{ paddingLeft: "2rem" }}>
          <div className="card-title">
            <h1 style={{ textAlign: "center" }}>Employee Details</h1>
          </div>
          <div className="card-body"></div>

          {empdata && (
            <div>
              <h5>
                The Employee name is : <b>{empdata.name}</b> ({empdata.id})
              </h5>
              <h5>Date of Birth : {empdata.birthday}</h5>
              <h5>Their Manager : {empdata.manager}</h5>
              <h5>Current Salary : {empdata.salary}</h5>
              <h5>Their Manager : {empdata.manager}</h5>
              <h5>Contact Details</h5>
              <h5>Email Address : {empdata.email}</h5>
              <h5>Phone Number : {empdata.phone}</h5>
              <Link className="btn btn-danger my-3" to="/details">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
        {/* </div>
        </div> */}
      </div>
    </div>
  );
}

export default EmpDetails;
