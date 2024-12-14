import { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { RiNotification3Line } from "react-icons/ri";
import { FiSettings, FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { ImSwitch } from "react-icons/im";
import image from "../../assets/images.png";

import "./Header.css";

const Header = () => {
  
  const [currentDate, setCurrentDate] = useState("");

  
  useEffect(() => {
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    setCurrentDate(date.toLocaleDateString("en-US", options));
  }, []);

  return (
    <>
      <Navbar bg="white" variant="dark" className="py-3">
        <Container fluid> <div className="image">
          <img src={image} alt=""/>
        </div>
          <Navbar.Brand className="brand-name" href="#home">
            my-will
          </Navbar.Brand>
          <Nav className="ms-auto align-items-center">
            <InputGroup className="me-3 search-input">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="border-end-0"
              />
              <InputGroup.Text className="bg-white border-start-0">
                <FiSearch style={{ color: "black", fontSize: "1.2rem" }} />
              </InputGroup.Text>
            </InputGroup>
            
            <Nav.Link href="#notifications">
              <RiNotification3Line
                style={{ color: "black", fontSize: "1.2rem" }}
              />
            </Nav.Link>
            <Nav.Link href="#settings">
              <FiSettings style={{ color: "black", fontSize: "1.2rem" }} />
            </Nav.Link>
            <Nav.Link href="#settings">
              <CgProfile style={{ color: "black", fontSize: "1.2rem" }} />
            </Nav.Link>
            <Nav.Link href="#settings">
              <ImSwitch style={{ color: "black", fontSize: "1.2rem" }} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar className="nav-custom-bg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <h5>Good morning, Vinoth!</h5>
            <h6>Today is {currentDate}</h6>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
