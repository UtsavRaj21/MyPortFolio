import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Tilt from "react-tilt";
import Card from "react-bootstrap/Card";
import Spark from "../../assets/img/experience/spark.png";

import "./experience.css";

const Experience = () => {
  return (
    <div id="experience" className="mt-5 pt-5">
      <h1 className="pt-5 text-center font-details-b pb-5">EXPERIENCE</h1>
      <div className="text-center pb-5">
             <img className="spark" alt="Spark" src={Spark} thumbnail />
        </div >
      {/* <Jumbotron className="jumbo-style">
        <Container>
            <div>
             <img className="spark profile justify-content-end" alt="Spark" src={Spark} thumbnail />
            </div>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Associate Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Role:</strong> Developer & Production Support
                    <br />
                    <strong>Description:</strong> <strong>Developed & enhanced multiple features</strong> with full customizability option across web application. Debugging existing code to solve problems. Also worked as <strong>Production Support</strong> providing system maintenance, performing CRUD operations on databases along with extensive support during Critical Care Period.
                    <br />
                    <strong>Technology:</strong> DOTNET, C# and MS-SQL
                    <br />
                    <strong>Duration:</strong> June 2019 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron> */}
    </div>
  );
};

export default Experience;