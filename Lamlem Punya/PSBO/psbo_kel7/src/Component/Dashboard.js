import { Container, Col, Row, Card } from "react-bootstrap";

const Dashboard = () => {
    return(
        <div className="dashboard">
            <Container className="text-black d-flex justify-content-left 
            align-item-centre">
              <Row>
                <Col>
                  <div className="ingfo"> INFORMATION </div>
                </Col>
              </Row>
            </Container>
        </div>
        
    )
}

export default Dashboard