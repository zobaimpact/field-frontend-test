import React from 'react';
import { Container, Row } from 'reactstrap';
import HomeCard from './components/HomeCard';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <HomeCard />
    </Row>
  </Container>
);

export default ExamplePage;
