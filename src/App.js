import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Button,Card,Col,Row, Container } from 'react-bootstrap';


function App() {
  let headerInfo={
    email:'mehakaijaz@gmail.com',
    phone:'234567890'
  }
  // let name='mehak';
  // let l=[12,13,23,24,34,45,46];
  // let obj={
  //   'name':'cvb',
  //   'cname':'dftghju',
  //   'desc':'asdfgyujk'
  // }
  // let status=true;
  return (
    <div className="main">
      {/* <h1>{name} hiiii</h1>
      {l.map((v)=>{ //direct data render krne k lie
        return (
          <h2>{v}</h2>
        )
      })}
      <div>{obj.name} </div>
      <div>{obj.cname} </div>
      <div>{obj.desc} </div>
      { (status)  ? 
        <div style={{color:'red',backgroundColor:'yellow'}}>welcome to ws</div>
      : ""} */ }
      
      {/* <Header  email='mehakaijaz@gmail.com'  phone='234567890'/> */}
          <Header headerInfo={headerInfo} c='helloooo'>
                  <h5>welcome to header section </h5>
          </Header>
          <div className="container">
          hello

        </div>
        <Container fluid>hiiiii</Container>
        <Container>
            <Row>
              <Col className='col-12 text-center py-4'>
                <h1>our courses</h1>
              </Col>
            </Row>
            <Row>
              <Col lg='3' md='6'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Course 1</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
              </Col>
              <Col lg='3' md='6'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Course 1</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
              </Col>
              <Col lg='3' md='6'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Course 1</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
              </Col>
              <Col lg='3' md='6'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Course 1</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
              </Col>
              
            </Row>
        </Container>
      <Footer/>
      </div>
      
  );
}

export default App;


// function Card(){
//   return(
//     <div className='carditems'>Card Div</div>
//   )
// }