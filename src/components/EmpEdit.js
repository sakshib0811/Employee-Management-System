import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EmpEdit() {
  const { empid } = useParams();

  // const [empdata, setEmpdata] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employeeSdOne/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setId(resp.id);
        setName(resp.name);
        setPosition(resp.position);
        setSalary(resp.salary);
        setEmail(resp.email);
        setHire(resp.hire);
        setPhone(resp.phone);
        setBirthday(resp.birthday);
        setManager(resp.manager);
        setHike(resp.hike);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [email, setEmail] = useState("");
  const [hire, setHire] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [manager, setManager] = useState("");
  const [hike, setHike] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = {
      id,
      name,
      position,
      salary,
      email,
      hire,
      phone,
      birthday,
      manager,
      hike,
    };
    fetch("http://localhost:8000/employeeSdOne/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("saved Successfully");
        navigate("/details");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="my-3">
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2 style={{ textAlign: "center" }}>Edit</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        disabled
                        required
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Position</label>
                      <input
                        required
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Salary</label>
                      <input
                        required
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Hire Date</label>
                      <input
                        required
                        value={hire}
                        onChange={(e) => setHire(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Birthday</label>
                      <input
                        required
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Manager Name</label>
                      <input
                        required
                        value={manager}
                        onChange={(e) => setManager(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Salary Hike</label>
                      <input
                        required
                        value={hike}
                        onChange={(e) => setHike(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/details" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmpEdit;
