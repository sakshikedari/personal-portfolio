import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Card className="project-card p-3 mb-4 border-0 shadow-sm rounded-4">
      <Row className="align-items-center">
        <Col md={5} sm={12}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={imgUrl}
              alt={title}
              className="img-fluid rounded-3 project-image-hover"
              style={{ width: "100%", height: "auto", cursor: "pointer" }}
            />
          </a>
        </Col>
        <Col md={7} sm={12}>
          <div className="p-3 text-white">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </Col>
      </Row>
    </Card>
  );
};
