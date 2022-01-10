import React from 'react';
import { Card, Container, Stack, Row, Col } from 'react-bootstrap';
import Image1 from '../components/images/background1.JPG';
import Image2 from '../components/images/three.png';
import Image3 from '../components/images/two.png';
import Image4 from '../components/images/4-1.png';
import Image5 from '../components/images/5.png';
import Image6 from '../components/images/6.png';
import '../pages/styles.css';


const HousingAsso = () => {
    return (
        <div>
              <div>
                 <img src={Image1} style={{width:"100%", height:"100%"}}/>  
            </div>
            <Container>
            <h1 style={{ marginTop:"20px", color:"black", fontSize:"34px"}}>Housing Associations</h1>

            <p style={{ marginTop:"10px", color:"white", fontSize:"26px", textAlign:"center"}}>
                Among other things, we perform the following services for housing associations:</p>


            <div>
                <Container fluid>
                {/* <Stack direction="horizontal" gap={5}> */}
                    <Row>
                        <Col>
                      <div>
                          <Card>
                         <img src={Image2} style={{width:"390px", height:"380px"}}/>
                        <h2>Sweeping and Cleaning</h2>
                        </Card>
                    </div>
                    </Col>
                     <Col>
                    <div>
                         <Card>
                         <img src={Image3} style={{width:"390px", height:"380px"}}/>
                        <h2>Stair Washing</h2>
                        </Card>
                    </div>
                  </Col>
                   <Col>
                    <div>
                         <Card>
                         <img src={Image4} style={{width:"390px", height:"380px"}}/>
                        <h2>Lawn Mowing</h2>
                        </Card>
                    </div>
                    </Col>
                    </Row>

                    <Row>
                         <Col md={{ span: 5, offset: 0.5 }}>
                    <div>
                         <Card>
                         <img src={Image5} style={{width:"500px", height:"450px", alignContent:"center"}}/>
                        <h2>Gardening</h2>
                        </Card>
                    </div>
                    </Col>
                             <Col></Col>
                     <Col md={{ span: 5, offset: 0 }}>
                    <div>
                         <Card>
                         <img src={Image6} style={{width:"500px", height:"450px"}}/>
                            <h2>Snow removal and salting</h2>
                            </Card>
                    </div>
                    </Col>
                </Row>
                {/* </Stack> */}
                </Container>
            </div>
            </Container>
              <div>
                 <img src={Image1} style={{width:"100%", height:"100%"}}/>  
            </div>
        </div>
    )
}

export default HousingAsso;
