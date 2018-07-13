import React from 'react';
import { withSiteData } from 'react-static';

import { Container, Row, Col } from '../components/tailwindcss';

const languages = [
  'JavaScript',
  'Swift',
  'C#',
  'Java',
  'HTML',
  'CSS',
];

const frameworks = [
  'Node', 'React', 'React-Native', 'Bootstrap', 'Tailwind', 'Mocha',
];

const tools = [
  'Git', 'AWS', 'Docker',
];

export default withSiteData(() => (
  <div>
    <Container padding={0} className="bg-white shadow-md rounded-sm mb-4 pb-4 text-black">
      <div className="bg-cover-img border-b border-grey">
        <img src="/assets/img/cover.jpg" className="profile-img rounded-full border-white border-4 shadow-md block md:inline-block mx-auto md:mx-8 " alt="Profile" />
      </div>

      <div className="flex my-2 flex-wrap">
        <div className="w-full md:w-48 h-24 md:w-0 md:mx-8" />
        <div className="w-auto flex-1 text-center md:text-left mx-4 md:mx-0">
          <h1 className="text-4xl text-black">Mark Polivchuk</h1>
          <div className="text-darker opacity-75 pt-0 text-lg font-thin leading-normal">
            Software Developer / Calgary, AB
          </div>
        </div>
      </div>

    </Container>
    <Container padding={0} className="bg-white shadow-md rounded-sm">
      <Row className="-mx-2 px-4 py-2">
        <Col md="1/3" className="my-2 px-2">
          <h3 className="text-black mb-3 flex-1 font-light">Education</h3>
          <div className="mb-4 flex align-leading">
            <img src="/assets/img/cover.jpg" className="h-12 w-12 rounded inline-block mr-2" alt="Profile" />
            <div className="flex-1 inline-block">
              <p className="font-bold mb-1">University of Calgary</p>
              <div className="flex items-center text-grey-dark mb-1">
                <svg className="fill-current h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>
                <p className="text-xs">Calgary, AB</p>
              </div>
              <div className="flex items-center text-grey-dark mb-1">
                <svg className="fill-current h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z" /></svg>
                <p className="text-xs">Graduated in 2015</p>
              </div>
            </div>
          </div>
          <div className="mb-4 flex align-leading">
            <img src="/assets/img/cover.jpg" className="h-12 w-12 rounded inline-block mr-2" alt="Profile" />
            <div className="flex-1 inline-block">
              <p className="font-bold mb-1">Western Canada High School</p>
              <div className="flex items-center text-grey-dark mb-1">
                <svg className="fill-current h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>
                <p className="text-xs">Calgary, AB</p>
              </div>
              <div className="flex items-center text-grey-dark mb-1">
                <svg className="fill-current h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z" /></svg>
                <p className="text-xs">Graduated in 2011</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md="1/3" className="my-2 px-2">
          <h3 className="text-black mb-3 flex-1 font-light">Skills</h3>
          <div className="flex flex-wrap align-start justify-start leading-normal">
            { languages.map(l => <span key={l} className="rounded-lg bg-green px-2 py-1 mr-2 mb-2 text-xs font-medium text-white">{l}</span>)}
            { frameworks.map(l => <span key={l} className="rounded-lg bg-orange px-2 py-1 mr-2 mb-2 text-xs font-medium text-white">{l}</span>)}
            { tools.map(l => <span key={l} className="rounded-lg bg-purple px-2 py-1 mr-2 mb-2 text-xs font-medium text-white">{l}</span>)}
          </div>
        </Col>
      </Row>
    </Container>
  </div>
));
