import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import Image from '../components/images/one.png';
import Image1 from '../components/images/trolley.png';
import Image2 from '../components/images/scrubbers.png';
import Image3 from '../components/images/vacuum-cleaner.png';
import Image4 from '../components/images/chemicals.jpg';
import Image5 from '../components/images/towel.jpg';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div className="about">
           <Container fluid>
            <h1 style={{ color:"black", marginTop:"20px" }}>Information About Us</h1>
            <div >
            <Row style={{ backgroundColor:"white" }}>
              <Col>
                    <img src={Image} style={{width:"400px", height:"400px", marginTop:"20px"}}/> 
              </Col>
            </Row>
            <Row style={{ backgroundColor:"white"}}>
              <h2>My name is Stanley Nnamani. Am the managing director of Basic Rengoring ApS. The companies office is located at Greve.
                I have run the company for over 15yrs now. The company has over 20 -30 workers. It is a small company that is managing by qualified Manager. 
                We work to please our customers.
              </h2>
              <p></p>
            </Row>
            </div>

            <Row style={{ backgroundColor:"green"}}>
                 <Col>
                 <p style={{ fontSize:"30px", marginTop:"30px" }}>Since 2004, Basic Rengøring ApS has provided quality cleaning at 
                   reasonable prices throughout Greater Copenhagen. 
                   With us, you get a personal service with an understanding of your needs. 
                   We carry out our work quickly and efficiently and ensure you a clean and professional result. 
                   We take pride in our work and keep our promises. We clean with the heart.
                   </p>
                     <p style={{ fontSize:"30px", marginTop:"30px" }}>We clean up and clean up when the damage has occurred. 
                   We help with cleaning when the craftsmen have finished their work. 
                   Quick action is important so that the extent of the damage is minimized.
                    We perform all clean-up, cleaning, purification and odor remediation.</p>
                   
                   </Col>
                 <Col>
                    <img src={Image2} style={{width:"500px", height:"500px"}}/> 
                 </Col>
            </Row>
            <Row style={{ backgroundColor:"white" }}>
              <Col><img src={Image1} style={{width:"500px", height:"500px"}}/> </Col>
              <Col>
               <p style={{ fontSize:"30px", marginTop:"30px", justifyContent:"left", marginRight:"30px" }}>
                 We make sure to work with a reliable cleaning equipment in other to satisfy our customers. We provide
                  personal cleaning tailored to your needs, We have more than 15 years of experience with quality cleaning.
                  We arrive at agreed times. Whether it is daily, weekly, monthly or yearly cleaning agreement.
                  We only have happy customers. Should we help you?.
                </p>
              </Col>
            </Row>
            <Row style={{ backgroundColor:"green" }}>
              <Col><img src={Image3} style={{width:"500px", height:"500px", backgroundColor:"white", marginTop:"20px"}}/> </Col>
              <Col><img src={Image4} style={{width:"500px", height:"500px", marginTop:"20px", marginBottom:"20px"}}/> </Col>
              <Col><img src={Image5} style={{width:"500px", height:"500px", marginTop:"20px", marginBottom:"20px"}}/> </Col>
            </Row>
    

          </Container>

          <Footer />
        </div>
    )
}

export default AboutUs;
