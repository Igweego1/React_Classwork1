import "./App.css";
import IMAGES from "./assets/img/image";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Container className="custom-con" fluid>
        <Row className="gx-0">
          <Col lg={6} md={6} sm={12} className=" mt-5">
            <div className="w-100">
              <div className="bg-left"></div>
            </div>
          </Col>
          <Col lg={5} md={6} sm={12} className="mt-5">
            <div className="mt-5">
              <h2 className="fw-b my-3">About Us</h2>
              <h5 className="ff">Sample Headline</h5>
              <p className="mt-4 line-h">
                Article evident arrived express highest men did boy. Mistress
                sensible entirely am so. Quick can manor smart money hopes worth
                too. Comfort produce husband boy her had hearing. Law others
                theirs passed but wishes. You day real less till dear read.
                Considered use dispatched melancholy sympathize discretion led.
                Oh feel if up to till like.
              </p>

              <p className="my-3 ff">
                Image from{" "}
                <a
                  className="text-color-dark"
                  href="https://www.freepik.com/free-psd/hands-holding-smartphone-device-mock-up-color-background_30587610.htm"
                >
                  Freepik
                </a>
              </p>

              <button className="custom-btn mb-3">CONTACT US</button>
            </div>
          </Col>
          <Col lg={1} md={12} sm={12}></Col>
        </Row>

        <div className="siz mx-auto">
          <Row>
            <Col lg={4} md={12} sm={12}>
              <Card
                className="p-4 card-cus"
                style={{
                  backgroundColor: "#f5773d",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    <Card.Img className="img-siz" src={IMAGES.phone} />
                    <span className="ms-1">CALL US</span>
                  </Card.Title>
                  <Card.Text>
                    <p className="pt-1">
                      1 (234) 567-891, <br></br>1 (234) 987-654
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={12} sm={12}>
              <Card
                className="p-4 card-cus"
                style={{
                  backgroundColor: "#f5773d",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    <Card.Img className="img-siz" src={IMAGES.location} />
                    <span className="ms-1">LOCATION</span>
                  </Card.Title>
                  <Card.Text>
                    <p className="pt-1">
                      121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={12} sm={12}>
              <Card
                className="p-4 card-cus"
                style={{
                  backgroundColor: "#f5773d",
                }}
              >
                <Card.Body>
                  <Card.Title className="d-flex gap-2">
                    <Card.Img className="img-siz" src={IMAGES.clock} />
                    <span>HOURS</span>
                  </Card.Title>
                  <Card.Text>
                    <p className="pt-1">
                      Mon – Fri …… 11 am – 8 pm, Sat, Sun&nbsp;&nbsp;…… 6 am – 8
                      pm
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <footer>
        <Container className="foot-con" fluid></Container>
      </footer>
    </Fragment>
  );
}

export default App;
