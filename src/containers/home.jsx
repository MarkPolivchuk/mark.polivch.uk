import React, { Children } from 'react';
import { withSiteData } from 'react-static';

import { Container, Row, Col } from '../components/tailwindcss';

export default withSiteData(() => (
  <div>
    <Container className="my-32" padding={0}>
      <h1 className="text-white text-5xl text-center">
        Mark Polivchuk
      </h1>
      <p className="text-blue-lightest opacity-75 text-center pt-2 text-lg font-thin">
        writes apps
      </p>
      <Row className="my-32">
        <Col sm="1/3" className="text-center text-white">
          <div className="w-32 h-32 bg-white rounded-full shadow text-blue mx-auto my-3 p-3 flex justify-center align-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current w-1/2">
              <path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z" />
            </svg>
          </div>
          <p className="text-white font-thin text-xl pt-2">Programmer</p>
        </Col>
        <Col sm="1/3" className="text-center text-white">
          <div className="w-32 h-32 bg-white rounded-full shadow text-blue mx-auto my-3 p-3 flex justify-center align-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current w-1/2">
              <path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z" />
            </svg>
          </div>
          <p className="text-white font-thin text-xl pt-2">Programmer</p>
        </Col>
        <Col sm="1/3" className="text-center text-white">
          <div className="w-32 h-32 bg-white rounded-full shadow text-blue mx-auto my-3 p-3 flex justify-center align-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current w-1/2">
              <path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z" />
            </svg>
          </div>
          <p className="text-white font-thin text-xl pt-2">Programmer</p>
        </Col>
      </Row>
    </Container>
    <Container className="bg-white shadow-lg p-3 rounded-lg">
      Test
    </Container>
  </div>
));
