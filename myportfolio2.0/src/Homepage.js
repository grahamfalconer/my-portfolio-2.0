import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';


class Homepage extends Component {


  render() {
    return (
      <div className="Homepage">

              <div>

<Container>
          <Row id="top-row">
              <Col>
                <ul className="nav nav-pills">
                    <li role="presentation" class="active"><a href="#">Home</a></li>
                </ul>
              </Col>
              <Col>
              </Col>
  
            <Col>
                <Row>
                  <ul className="nav nav-pills">
                    <Col>
                        <li role="presentation"><a href="#"> Blog </a></li> &nbsp;
                    </Col>
                    <Col>
                        <li role="presentation"><a href="#"> Projects </a></li> &nbsp;
                    </Col>
                  </ul>
                </Row>
            </Col>
          </Row>
  
          <Row>
  
            <Col>
              <h1> graham-falconer.com</h1>
            </Col>
  
          </Row>
  
          <Row>
  
            <Col className="color-col">
              <strong class="special-p console-style"> SoftwareDeveloper</strong>
            </Col>
  
            <Col>
            </Col>
  
            <Col>
            </Col>
  
          </Row>
          <Row>
            <Col>
            </Col>

            <Col>
            </Col>

            <Col>
            <img src="arrow.png" alt="arrow-scrbbl"/>
            <p class="scribbly-text"> checkout my stuff  </p>
            </Col>
          </Row>
        </Container>
        <canvas></canvas>
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

