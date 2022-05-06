import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../../images/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../../firebase.init";
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("token");
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Car Manager Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="header-style me-3" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="header-style me-3" as={Link} to="blogs">
                Blogs
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link className="header-style me-3" as={Link} to="manage-inventory">Manage Items</Nav.Link>
                  <Nav.Link className="header-style me-3" as={Link} to="addItem">Add Items</Nav.Link>
                  <Nav.Link className="header-style me-3" as={Link} to="/my-items">
                    My Items
                  </Nav.Link>
                  <button
                    className="btn btn-link text-decoration-none text-white header-style text-start ps-0 ps-lg-2"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Nav.Link
                  className="header-style text-white  me-3"
                  as={Link}
                  to="login"
                >
                  Login
                </Nav.Link>
              )}
              <Nav.Link className="header-style  ms-3" as={Link} to="register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
