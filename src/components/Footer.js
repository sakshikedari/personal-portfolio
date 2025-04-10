import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}></Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/sakshi-kedari-114888260/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://leetcode.com/u/sakiiii2308/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="LeetCode" />
              </a>
              <a
                href="https://github.com/sakshikedari"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="GitHub" />
              </a>
            </div>
            <p>© 2025 Sakshi Kedari. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
