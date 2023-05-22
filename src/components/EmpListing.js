import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./EmpListing.css";
function EmpListing() {
  const location = useLocation();
  const { from, foo } = location.state;
  const [empdata, setEmpdata] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/employee/details/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  const LoadPromote = (id) => {
    navigate("/employee/promote/" + id);
  };

  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/employeeSdOne/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed Successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  useEffect(() => {
    fetch("http://localhost:8000/employeeSdOne")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        const result = resp.filter((resp) => {
          return resp.position === from;
        });
        setEmpdata(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="mx-3 mt-3 container-card">
      <div className="card-box">
        <div className="card-title">
          <h1> {foo} </h1>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/employee/create" className="btn btn-success">
              Add New
            </Link>
            <Link to="/details" className="btn btn-danger">
              Back
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
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                      <a
                        onClick={() => {
                          LoadPromote(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Promote
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
