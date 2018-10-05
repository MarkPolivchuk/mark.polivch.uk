import React from 'react';
import { withSiteData } from 'react-static';

import { Container, Row, Col } from '../components/tailwindcss';
import { IconLabel, Badge, Card } from '../components/application';

const languages = [
  'JavaScript',
  'HTML',
  'CSS',
  'SQL',
  'Swift',
  'C#',
  'Java',
];

const frameworks = [
  'Node', 'React', 'Redux', 'React-Native', 'Bootstrap', 'Tailwind', 'Mocha', 'Postgres', 'Redis', 'Stripe',
];

const tools = [
  'Git', 'AWS', 'Docker', 'Windows', 'MacOS',
];

const applications = [
  'Adobe Creative Suite',
  'Office',
  'iWork',
  'VS Code',
  'Xcode',
  'Sketch',
];

export default withSiteData(() => (
  <div>
    <Container padding={0} className="bg-white shadow-lg sm:rounded-lg mb-4 pb-2 text-black">
      <div className="bg-cover-img border-b border-grey flex items-end justify-center md:justify-start">
        <img src="/assets/img/cover.jpg" className="profile-img rounded-full border-white border-4 shadow-md block md:inline-block -mb-24 mbmx-auto md:mx-8 " alt="Profile" />
      </div>

      <div className="flex my-2 flex-wrap">
        <div className="w-full md:w-48 h-24 md:w-0 md:mx-8" />
        <div className="w-auto flex-1">
          <Row className="h-full">
            <Col md="3/4" className="text-center md:text-left mx-4 md:mx-0">
              <div className="flex flex-col justify-center h-full py-2">
                <h1 className="text-4xl text-black">Mark Polivchuk</h1>
                <p className="text-darker opacity-75 pt-0 text-lg font-thin leading-normal">
            Software Developer / Calgary, AB
                </p>
              </div>
            </Col>
            <Col md="1/4" className="text-center md:text-left mx-4 md:mx-0 md:pr-4">
              <div className="flex justify-center md:justify-end items-center h-full py-2">
                <a href="https://github.com/MarkPolivchuk" target="_blank" rel="noopener noreferrer" alt="Github">
                  <i className="fab fa-2x mx-4 fa-github text-grey-darkest hover:text-black" />
                </a>
                <a href="https://www.linkedin.com/in/mark-polivchuk-72165873/" target="_blank" rel="noopener noreferrer" alt="LinkedIn">
                  <i className="fab fa-2x mx-4 fa-linkedin text-grey-darkest hover:text-black" />
                </a>
                <a href="https://twitter.com/MarkPolivchuk" target="_blank" rel="noopener noreferrer" alt="Twitter">
                  <i className="fab fa-2x mx-4 fa-twitter text-grey-darkest hover:text-black" />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>

    </Container>
    <Container className="py-24 px-16 text-center ">
      <blockquote className="my-24">
        <h1 className="text-grey-dark text-5xl test-light italic mb-4"><span className="text-grey m-4">&ldquo;</span>Mark is a great developer<span className="text-grey m-4">&rdquo;</span></h1>
        <p className="text-grey text-lg font-bold ml-32">- Mark</p>
      </blockquote>
    </Container>

    <Container padding={0}>
      <Row className="-mx-2">
        <Col md="1/3" className="px-2 mb-8">
          <Card className="sm:rounded-lg border-t-4 border-red">
            <h3 className="text-black mb-4 flex-1 font-light">Education</h3>
            <div className="mb-4 flex align-leading">
              <a href="https://www.ucalgary.ca/" target="_blank" rel="noopener noreferrer" alt="University of Calgary">
                <img src="/assets/img/uofc.jpg" className="h-12 w-12 rounded inline-block mr-2 border border-grey-light" alt="University of Calgary" />
              </a>
              <div className="flex-1 inline-block">
                <p className="font-bold mb-2">University of Calgary</p>
                <IconLabel label="Calgary, AB" icon="map-marker-alt" />
                <IconLabel label="Bachelor of Science" icon="flask" />
                <IconLabel label="Majored in Computer Science" icon="code-branch" />
                <IconLabel label="Minored in Pure Math" icon="calculator" />
                <IconLabel label="Graduated in 2015" icon="graduation-cap" />
              </div>
            </div>
            <div className="mb-4 flex align-leading">
              <a href="http://schools.cbe.ab.ca/b816/" target="_blank" rel="noopener noreferrer" alt="Western Canada High School">
                <div className="h-12 w-12 flex items-center h-12 w-12 rounded inline-block border border-grey-light mr-2" alt="Western Canada High School">
                  <img src="/assets/img/wchs.png" className="" alt="Profile" />
                </div>
              </a>
              <div className="flex-1 inline-block">
                <p className="font-bold mb-1">Western Canada High School</p>
                <IconLabel label="Calgary, AB" icon="map-marker-alt" />
                <IconLabel label="Graduated in 2011" icon="graduation-cap" />
              </div>
            </div>
          </Card>
        </Col>
        <Col md="1/3" className="px-2 mb-8">
          <Card className="sm:rounded-lg border-t-4 border-blue">
            <h3 className="text-black mb-4 flex-1 font-light">Skills</h3>
            <div className="flex flex-wrap align-start justify-start leading-normal">
              { languages.map(l => <Badge key={l} color="green">{l}</Badge>)}
              { frameworks.map(f => <Badge key={f} color="orange">{f}</Badge>)}
              { tools.map(t => <Badge key={t} color="purple">{t}</Badge>)}
              { applications.map(a => <Badge key={a} color="teal">{a}</Badge>)}
            </div>
          </Card>
        </Col>
        <Col md="1/3" className="px-2 mb-8">
          <Card className="sm:rounded-lg border-t-4 border-yellow-dark">
            <h3 className="text-black mb-4 flex-1 font-light">Employment</h3>

          </Card>
        </Col>
      </Row>
    </Container>
  </div>
));
