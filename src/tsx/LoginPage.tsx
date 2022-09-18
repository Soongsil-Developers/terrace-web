import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/LoginPage.css";

const LoginPage = () => {
  return (
    <Form>
      <div id="loginPage">
        <div>
          <p id="loginTitle">로그인</p>
        </div>
        <div id="inputLoginInfo">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FaUser size="25" color="#A4A4A4" />
            <Form.Control placeholder="U-Saint ID" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FaLock size="25" color="#A4A4A4" />
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div id="loginBtnDiv">
            <Link to="/MainPage">
              <Button id="loginBtn" variant="primary" type="submit">
                <p id="loginBtnText">로그인</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default LoginPage;
