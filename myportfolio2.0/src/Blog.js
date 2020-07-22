import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import './Blog.scss';


class Blog extends Component {


  render() {
    return (
      <div className="Blog">
        <Container>
          <Row>
            <u><h2> Welcome to my Blog.  </h2></u>

          </Row>
        </Container>

        <nav id="bottom-helper" class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
                  <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        {/* section 1 */}
                        <Row>
                            <h3> Would you like to get in contact with Graham?  </h3> <h3 class="vis-on-hov"> yes</h3> <h3 class="vis-on-hov"> no </h3>

                        </Row>
                      </li>
                    </ul>
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        {/* section 2 */}
                        <Row>
                        
                      
                        </Row>
                      </li>
                    </ul>
                  </div>
            </nav>

      </div>
    );
  }
}

export default Blog;

