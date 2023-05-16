import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function Logout() {
  const history = useNavigate();
  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };
  return (
    <div>
      <Button
        onClick={userlogout}
        className=" mt-3 btn btn-danger"
        style={{ marginLeft: "35rem" }}
      >
        LogOut
      </Button>
    </div>
  );
}

export default Logout;
