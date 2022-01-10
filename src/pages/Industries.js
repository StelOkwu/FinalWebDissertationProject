import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import '../pages/styles.css';
import Image1 from '../components/images/background1.JPG';
import Image2 from '../components/images/windowcleaner.jpg';

const Industries = () => {
    return (
        <div>
           <div>
                 <img src={Image1} style={{width:"100%", height:"100%"}}/>  
            </div>
            <Container fluid>
        <h1 style={{ fontSize:"48px", color:"black", marginTop:"20px" }}>Industries Window Cleaning</h1>
       <Row>
           <Col>
           <p style={{ fontSize:"28px", marginLeft:"20px" }}>We clean your windows when you need them. We arrive at agreed times. Whether it is daily, weekly, monthly or yearly window cleaning. We window wash all sizes of properties and domiciles.</p>
           </Col>
           <Col>
          
           <ul className="window-li">
                <h2 style={{ fontSize:"36px", color:"green" }}>We plaster Windows for:</h2>
               <li>Shops</li>
               <li>Companies</li>
               <li>Private</li>
           </ul>
           </Col>
           <Col>
           
              <div>
                  {/* <Card style={{width:"100%", height:"100%", marginRight:"10px", paddingRight:"10px"}}> */}
                 <img src={Image2} 
                 style={{width:"100%", height:"100%", marginBottom:"40px"}}/>
                 {/* </Card> */}
            </div>
           
           </Col>
       </Row>

        </Container>
            <div>
                 <img src={Image1} style={{width:"100%", height:"100%"}}/>  
            </div>
        </div>
    )
}

export default Industries;
