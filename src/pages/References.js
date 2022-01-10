import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import '../pages/styles.css';
import Image1 from '../components/images/dsm_logo.png';
import Image2 from '../components/images/background1.JPG';

const References = () => {
    return (
        <div>
              <div>
                 <img src={Image2} style={{width:"100%", height:"100%"}}/>  
            </div>
            <Container fluid>
            <h2 style={{ color:"white", textAlign:"center", fontSize:"46px", marginTop:"20px" }}>What do customers say</h2>
              <Row>
                 <Col>
                 <h1 style={{ marginTop:"40px" }}>bysted</h1>
                 <h3>Basic Rengøring and his skilled crew have since 2005 been responsible for the cleaning 
                     at Bysted A / S. They always deliver proper work done on time.</h3>
                     <p><h3>Dorte Paaske</h3>
                        <h3>Chief Financial Officer</h3>
                        <h3>Bysted A/S</h3></p>
                </Col>
                 <Col>
                 <h1 style={{ marginTop:"40px" }}>BINDSLEV<sup>A/S</sup></h1>
                 <h3>We have been using Basic Cleaning for almost 4 years and are very happy with their cleaning. 
                     They are service-minded and also very flexible; we have always been able to change the date 
                     and time when we will have cleaned if we e.g. has had an evening meeting where it has not 
                     been appropriate that it was cleaned at the same time.</h3>
                 <p><h3>Malene Frost</h3>
                        <h3>Production Manager and Administrator</h3>
                        <h3>BindslevA/S</h3></p>
                </Col>
                 <Col>
                 <h1 style={{ marginTop:"10px" }}>
                    <Image src={Image1} style={{ width:"30%", height:"30%" }} /></h1>
                 <h3>The cleaning is always top notch! Coupled with the great flexibility, 
                     sociable staff and a fair price, we could not wish for a better cleaning solution.</h3>    
                       <p><h3>Carina Marker</h3>
                        <h3>Finance & Administration Manager</h3>
                        <h3>DSM</h3></p>
            </Col>
            </Row>
            </Container>
             <div> <img src={Image2} style={{width:"100%", height:"100%"}}/>  </div>
        </div>
    )}
export default References;
