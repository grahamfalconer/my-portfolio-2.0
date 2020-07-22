import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';


class Homepage extends Component {


  render() {
    return (
      <div className="Homepage">
          <div>
              <Container>  
              <Row>
                <Col>
                  <h1> graham-falconer.com</h1>
                </Col>
              </Row>
                  <Row>
                    <Col>
                    <p class="scribbly-text story-message">
                        Hi There, I'm Graham, a 22 year old junior software developer from Cape Town, South Africa.
                        My tech journey began whilst I was attending the University of Birmingham and I had to use data sets
                        with python to construct maps in G.I.S (Geographical Information Systems).

                    </p>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <img src="arrow2.gif" alt="arrow-scrbbl" id="arrow"/>
                        <p class="scribbly-text"> checkout my stuff !! </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <p class="scribbly-text story-message">
                        Since then I have completed the Makers Academy Bootcamp in London, ditched the field trips 
                        and moved onto coding full-time! 
                    </p>

                    </Col>
                    <Col>
                    </Col>
                  </Row>
              </Container>

          <nav id="bottom-helper" class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
                  <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <Row><Col> <p> Download a copy of my CV: </p> </Col></Row>
                      </li>
                    </ul>
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <Row>
                            <Col> 
                            <Row>
                                <a> PDF: </a>
                            </Row>
                            <Row>
                                <img id="pdf" src="pdf.png"/>
                            </Row>
                            </Col>
                            <Col>
                                <a> Word: </a>
                                <img id="word-doc" src="mword-logo.png"/>
                            </Col>
                            <Col>
                                <a> Screenshot: </a>
                                <img id="image-download" src="galleryimg.png"/>
                            </Col>
                        </Row>
                      </li>
                    </ul>
                  </div>
            </nav>
              </div>
                    )
            }
      </div>
    );
  }
}

export default Homepage;

