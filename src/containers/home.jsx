import React from 'react';
import { withSiteData } from 'react-static';

import { Container, Row, Col } from '../components/tailwindcss';

export default withSiteData(() => (
  <div>
    <Container className="bg-red h-screen">
      <Row>
        <Col className="bg-yellow h-12" md="1/2">&nbsp;</Col>
        <Col className="bg-orange h-12" md="1/2">&nbsp;</Col>
        <Col className="bg-blue h-12" md="1/3">&nbsp;</Col>
        <Col className="bg-purple h-12" md="1/3">&nbsp;</Col>
        <Col className="bg-pink h-12" md="1/3">&nbsp;</Col>
        <Col className="bg-grey-light h-12" md="1/4">&nbsp;</Col>
        <Col className="bg-grey h-12" md="1/4">&nbsp;</Col>
        <Col className="bg-grey-dark h-12" md="1/4">&nbsp;</Col>
        <Col className="bg-grey-darker h-12" md="1/4">&nbsp;</Col>
      </Row>
    </Container>
  </div>
));
