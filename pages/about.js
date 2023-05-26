import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const About = () => {
    return (
      <><Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="emilio.jpg" />
              <Card.Body>
                <Card.Title>Emilio Aguinaldo</Card.Title>
                <Card.Text>
                  Emilio Aguinaldo y Famy was a Filipino revolutionary, statesman, and military leader who is the youngest president of the Philippines (1899–1901) and became the first president of the Philippines and of an Asian constitutional republic. He led the Philippine forces first against
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row><Row xs={1} md={2} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="manuel.jpg" />
                <Card.Body>
                  <Card.Title>Manuel Quezon</Card.Title>
                  <Card.Text>
                  Manuel Luis Quezon y Molina, also known by his initials MLQ, was a Filipino lawyer, statesman, soldier, and politician who served as president of the Commonwealth of the Philippines from 1935 until his death in 1944.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row></>
    )
  }
  
export default About