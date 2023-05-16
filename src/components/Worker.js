import React from "react";
import manager from "../Images/manager.svg";
import employee from "../Images/employee.svg";
import staff from "../Images/staff.svg";
function Worker() {
  return (
    <div className="container-worker my-5 mx-5">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img
              src={manager}
              class="card-img-top my-3"
              alt="..."
              style={{ height: "20vh" }}
            />
            <div class="card-body">
              <h5 class="card-title">Managers</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-success">
                Get Employee List
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={employee}
              class="card-img-top my-3"
              alt="..."
              style={{ height: "20vh" }}
            />
            <div class="card-body">
              <h5 class="card-title">Employees</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-success">
                Get Employee List
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={staff}
              class="card-img-top my-3"
              alt="..."
              style={{ height: "20vh" }}
            />
            <div class="card-body">
              <h5 class="card-title">Helping staffs</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-success">
                Get Employee List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Worker;
