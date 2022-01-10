import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../pages/styles.css';
import Image1 from '../components/images/background1.JPG';
import Image2 from '../components/images/7.jpg';

const Offices = () => {
    return (
        <div>
             <div>
                 <img src={Image1} style={{width:"100%", height:"100%"}}/>  
            </div>
            <Container fluid>
        <h1 style={{ fontSize:"48px", color:"black", marginTop:"20px" }}>Renovation and damage</h1>
       <Row>
           <Col>
               <div>
                  {/* <Card style={{width:"100%", height:"100%", marginRight:"10px", paddingRight:"10px"}}> */}
                 <img src={Image2} 
                 style={{width:"100%", height:"100%", marginBottom:"40px", marginLeft:"20px"}}/>
                 {/* </Card> */}
            </div>
        </Col>
           <Col>
          
           <ul className="window-li">
                <h2 style={{ fontSize:"36px", color:"green" }}>We clean up and clean up after:</h2>
               <li>Water damage</li>
               <li>Fire damage</li>
               <li>Other insurance cases</li>
           </ul>
           </Col>
           <Col>
           
              <p style={{ fontSize:"28px", marginRight:"20px" }}>
           We clean up and clean up when the damage has occurred. 
           We help with cleaning when the craftsmen have finished their work. 
           Quick action is important so that the extent of the damage is minimized. 
           We perform all clean-up, cleaning, purification and odor remediation.</p>
          
           
           </Col>
       </Row>

        </Container>
       <div>
                 <img src={Image1} style={{width:"100%", height:"100%"}}/>  
            </div>
        </div>
    )
}

export default Offices;
