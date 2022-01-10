import React from 'react';
import { Container, Card , Row, Col} from 'react-bootstrap';
import '../pages/styles.css';
import Image1 from '../components/images/background1.JPG';
import Footer from '../components/Footer';

const Companies = () => {
    return (
        <div className="companies">
              <div>
                 <img src={Image1} style={{width:"100%", height:"100%"}}/>  
            </div>
            <Container fluid>
                
            <h1 style={{ marginTop:"20px", color:"black"}}>Cleaning in Companies </h1>
            <Card>
                <Row>
                    <Col>
                    <h2 style={{ color:"green" }}>Office Cleaning</h2>

                       <p style={{ fontSize:"26px", margin:"20px 10px 10px 20px" }}>
                        We handle cleaning of offices and business premises of all sizes. 
                        We come as often as you need it. If you need daily cleaning, 
                        we can come every day and ensure a clean working environment for your employees. 
                        We make a cooperation agreement that suits your needs and take care of the cleaning when
                         you take time off.
                        </p>
                    </Col>
                    <Col>
                    <h2 style={{ color:"green" }}>Industrial Cleaning</h2>
                    <p style={{ fontSize:"26px", margin:"20px 10px 10px 20px" }}>
                        We also clean industrial buildings. It can be, for example, a production hall, 
                        a warehouse, a workshop or something completely different. 
                        We have the expertise and the right equipment and can provide high quality cleaning, 
                        no matter how big or small the property is.
                        </p></Col>
                </Row>
            </Card>
           
            </Container>
              <div>
                 <img src={Image1} style={{width:"100%", height:"100%"}}/>  
            </div>
            <Footer />
        </div>
    )
}

export default Companies;
