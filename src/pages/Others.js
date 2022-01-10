import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../pages/styles.css';
import Image1 from '../components/images/background1.JPG';
import Image2 from '../components/images/8.jpg';


const Others = () => {
    return (
           <div>
                 <div>
                 <img src={Image1} style={{width:"100%", height:"100%"}}/>  
            </div>
            <Container fluid>
        <h1 style={{ fontSize:"48px", color:"black", marginTop:"20px" }}>Industries Window Cleaning</h1>
       <Row>
           <Col>
           <p style={{ fontSize:"28px", marginLeft:"20px" }}>
               Mold is harmful both to the house and to the people 
               who live there. We fix problems with moisture and 
               mold for both companies and individuals. 
               We test and find the best solution to get rid of 
               just your mold.</p>
           </Col>
           <Col>
          
           <ul className="window-li">
                <h2 style={{ fontSize:"36px", color:"green" }}>We clean up for:</h2>
               <li>Shops</li>
               <li>Companies</li>
               <li>Private</li>
           </ul>
           </Col>
           <Col>
           
              <div>
                  {/* <Card style={{width:"100%", height:"100%", marginRight:"10px", paddingRight:"10px"}}> */}
                 <img src={Image2} 
                 style={{width:"100%", height:"100%", marginBottom:"40px", marginRight:"20px"}}/>
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

export default Others;
