import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import certImg1 from "../assets/img/cert1.png";
import certImg2 from "../assets/img/cert2.png";
import certImg3 from "../assets/img/cert3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Projects = () => {
  const projects = [
    {
      title: "StudentAlly",
      description:
        "A collaborative platform for alumni and students featuring user authentication, role-based access (Admin, Moderator, Super Admin), event and job posting, donations, mentorship, and profile management. Developed using React and TailwindCSS (Frontend), Express.js and Node.js (Backend), and PostgreSQL (Database).",
      imgUrl: projImg3,
      link: "https://github.com/sakshikedari/StudentAlly_Project",
    },
    {
      title: "Pet Care Universe",
      description:
        "A decentralized Web3-based virtual pet care platform where users can adopt, care, and interact with digital pets. Developed using HTML, CSS, and JavaScript with integrations for crypto wallets and smart contracts to provide a gamified blockchain experience.",
      imgUrl: projImg1,
      link: "https://sakshikedari.github.io/petproject/",
    },
    {
      title: "Food Ordering System",
      description:
        "A complete full-stack food ordering platform with user and admin roles. Users can browse menus, place orders, and track delivery status. Built using HTML, CSS, JavaScript for the frontend and PHP with MySQL for the backend. Includes dynamic order management, cart functionality, and admin dashboard for restaurants.",
      imgUrl: projImg2,
      link: "https://github.com/sakshikedari/Food-Ordering-System",
    },
    {
      title: "Face Recognition System",
      description:
        "A Python-based facial recognition security system using OpenCV and Machine Learning. Detects and identifies faces in real time for access control. Trained on custom datasets with an intuitive GUI for adding new users and managing recognized profiles.",
      imgUrl: projImg4,
      link: "https://github.com/sakshikedari/Face-detection",
    },
  ];

  const certifications = [
    {
      title: "Data Structure and Algorithm",
      imgUrl: certImg1,
    },
    {
      title: "DIPEX national competition",
      imgUrl: certImg2,
    },
    {
      title: "API Development with Postman",
      imgUrl: certImg3,
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have worked on multiple full-stack projects, focusing on
                    scalable and user-friendly applications. My key project, the
                    Student Alumni Association platform, integrates React,
                    Node.js, and PostgreSQL with authentication and role-based
                    access. I’ve also contributed to open-source (GSSoC), built
                    automated workflows with n8n, and developed a food ordering
                    system, a face recognition system for security, and Pet Care
                    Universe, a Web3-based virtual pet care platform.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Certifications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        {projects.map((project, index) => (
                          <ProjectCard {...project} key={index} />
                        ))}
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <h3 className="text-center mb-4">Certifications</h3>
                        <Carousel
                          responsive={responsive}
                          infinite={true}
                          autoPlay
                          className="certification-slider"
                        >
                          {certifications.map((cert, index) => (
                            <div className="item text-center px-3" key={index}>
                              <img
                                src={cert.imgUrl}
                                alt={cert.title}
                                style={{
                                  width: "100%",
                                  borderRadius: "12px",
                                  marginBottom: "10px",
                                }}
                              />
                              <h5>{cert.title}</h5>
                            </div>
                          ))}
                        </Carousel>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <h3 className="text-center mb-4">Experience</h3>
                        <div className="experience-card">
                          <h5>
                            Open Source Contributor – GirlScript Summer of Code
                            (GSSoC) 2024
                          </h5>
                          <p className="mb-2">
                          </p>
                          <ul>
                            <li>
                              Ranked Top 500 among 4000+ participants in GSSoC
                              2024, earning 8 badges for impactful open-source
                              contributions.
                            </li>
                            <li>
                              Worked on 3 different projects, focusing on bug
                              fixes, feature additions, and improving
                              documentation.
                            </li>
                            <li>
                              Completed the Postman API Challenge and actively
                              collaborated with mentors and teams.
                            </li>
                            <li>
                              Built a blockchain-based project during Hack
                              Web3Conf.
                            </li>
                          </ul>

                          <h5 className="mt-4">
                            Programmer – Team Falcon, Robotics Department
                          </h5>
                          <ul>
                            <li>
                              1 year of experience programming robots, including
                              developing a line-following robot for the World
                              Robotics Championship.
                            </li>
                            <li>
                              Led a team of 15 students, organized and conducted
                              workshops on advanced robotics technologies.
                            </li>
                            <li>
                              Delivered technical sessions on automation,
                              embedded systems, and algorithm design for robotic
                              movement.
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};
