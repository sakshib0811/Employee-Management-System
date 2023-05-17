import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EmpListing.css";
function EmpListing() {
  const [empdata, setEmpdata] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/employeeSdOne")
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
    <div className="mx-3 mt-3 container-card">
      <div className="card-box">
        <div className="card-title">
          <h1>EMPLOYEE LISTING</h1>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/employee/create" className="btn btn-success">
              Add New
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Position</td>
                <td>Salary</td>
                <td>Email</td>
                <td>Hire Date</td>
                <td>Phone</td>
                <td>Birthday</td>
                <td>Manager Name</td>
                <td>Salary Hike</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.position}</td>
                    <td>{item.salary}</td>
                    <td>{item.email}</td>
                    <td>{item.hire}</td>
                    <td>{item.phone}</td>
                    <td>{item.birthday}</td>
                    <td>{item.manager}</td>
                    <td>{item.hike}</td>
                    <td>
                      {" "}
                      <a href="" className="btn btn-success">
                        Edit
                      </a>
                      <a href="" className="btn btn-danger">
                        Remove
                      </a>
                      <a href="" className="btn btn-primary">
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmpListing;
