import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2">
            <h5>Navigate</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
              <li>
                <Link to="/ride">Ride</Link>
              </li>
            </ul>
          </Col>
          <Col xs="6" sm="3" className="text-center">
            
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}

export default Footer
