import React from 'react';
import { Card, CardBody, Col, Row, Container } from 'reactstrap';

const HomeCard = () => (
  
  <Container fluid='lg' className='main_container'>
    <Row xs='2' className='main_container-row'>
      <Col
        className='bg-light border'
        md={6}
        className='main_container-row-cols mood_select_area'
      >
        <div className='mood_select_area_inner'>
          <div  className='mood_select_area_inner-qs'>
           <div  className='mood_select_area-inner-img-wrap'>
          <img src={catImg} alt="Cat Image" width="" height="">
           </div>
          </div>
        </div>
      </Col>
      <Col
        className='bg-light border'
        md={6}
        className='main_container-row-cols mood_display_area'
      >
        <div className='mood_select_display-inner'></div>
      </Col>
    </Row>
  </Container>
);

export default HomeCard;
