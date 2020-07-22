import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';


class Navbar extends Component {


  render() {
    return (
      <div className="Navbar">

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
  
        </Container>
  
              </div>
                    )
            }
      </div>
    );
  }
}

export default Navbar;

