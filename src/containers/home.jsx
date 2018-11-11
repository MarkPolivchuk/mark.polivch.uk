import React from 'react';
import { withSiteData } from 'react-static';

import { Container, Row, Col } from '../components/tailwindcss';
import { IconLabel, Badge, Card } from '../components/application';

const languages = ['JavaScript', 'HTML', 'CSS', 'SQL', 'Swift', 'C#', 'Java'];
const frameworks = ['Node', 'React', 'Redux', 'React-Native', 'Bootstrap', 'Tailwind', 'Mocha', 'Postgres', 'Redis', 'Stripe'];
const tools = ['Git', 'AWS', 'Docker', 'Windows', 'MacOS'];
const applications = ['Adobe Creative Suite', 'Office', 'iWork', 'VS Code', 'Xcode', 'Sketch'];
const patterns = ['MVC', 'MVVM', 'UI', 'UX', 'REST'];

export default withSiteData(() => (
  <div className="flex-1 flex flex-col">
    <Container padding={0} className="bg-white my-8 px-4 text-black">
      <div className="flex my-2 flex-wrap">
        <div className="w-auto flex-1">
          <Row className="h-full">
            <Col md="3/4" className="text-center md:text-left">
              <div className="flex flex-col justify-center h-full py-2">
                <h1 className="text-4xl text-black">Mark Polivchuk</h1>
                <p className="text-darker opacity-75 pt-0 text-lg font-thin leading-normal">
                  Software Developer / Calgary, AB
                </p>
              </div>
            </Col>
            <Col md="1/4" className="text-center md:text-left">
              <div className="flex justify-center md:justify-end items-center h-full py-2">
                <a href="https://github.com/MarkPolivchuk" target="_blank" rel="noopener noreferrer" alt="Github">
                  <i className="fab fa-2x mx-4 fa-github text-grey-darkest hover:text-black" />
                </a>
                <a href="https://www.linkedin.com/in/mark-polivchuk-72165873/" target="_blank" rel="noopener noreferrer" alt="LinkedIn">
                  <i className="fab fa-2x mx-4 fa-linkedin text-grey-darkest hover:text-black" />
                </a>
                <a href="https://twitter.com/MarkPolivchuk" target="_blank" rel="noopener noreferrer" alt="Twitter">
                  <i className="fab fa-2x ml-4 fa-twitter text-grey-darkest hover:text-black" />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>

    </Container>


    <Container padding={0}>
      <Row className="-mx-4">
        <Col md="1/2" className="px-4 flex flex-col">
          <Card className="border-t-4 border-green mb-8 pt-4 px-4 flex-grow">
            <h3 className="text-green-dark tracking-wide text-sm font-semibold uppercase mb-8">Employment</h3>
            <div className="mb-4 flex align-leading">
              <a href="https://www.mmbr.io/" target="_blank" rel="noopener noreferrer" alt="MMBRI.IO">
                <img src="/assets/img/mmbr.jpg" className="h-12 w-12 rounded inline-block mr-4 border border-grey-light" alt="MMBR.IO" />
              </a>
              <div className="flex-1 inline-block">
                <p className="font-bold mb-2">MMBR.IO</p>
                <IconLabel label="Calgary, AB" icon="map-marker-alt" />
                <IconLabel label="Feb. 2017 - present" icon="calendar-alt" />
                <IconLabel label="Developed web client in React" icon="react" iconSet="fab" />
                <IconLabel label="Developed back-end in Node" icon="node-js" iconSet="fab" />
                <IconLabel label="Contributed to and maintained database schema" icon="database" />
                <IconLabel label="Maintained server infrastructure on AWS" icon="cloud" />

              </div>
            </div>
            <div className="mb-4 flex align-leading">
              <a href="https://www.farcast.com/" target="_blank" rel="noopener noreferrer" alt="Farcast">
                <img src="/assets/img/farcast.png" className="h-12 w-12 rounded inline-block mr-4 border border-grey-light" alt="Farcast" />
              </a>
              <div className="flex-1 inline-block">
                <p className="font-bold mb-2">Farcast</p>
                <IconLabel label="Calgary, AB" icon="map-marker-alt" />
                <IconLabel label="Aug. 2016 - present" icon="calendar-alt" />
                <IconLabel label="Developed iOS apps in Swift" icon="mobile-alt" />
                <IconLabel label="Developed web apps in Node" icon="node-js" iconSet="fab" />
              </div>
            </div>
            <div className="mb-4 flex align-leading">
              <a href="https://www.gpspolice.com/" target="_blank" rel="noopener noreferrer" alt="GPS Police">
                <img src="/assets/img/gps.png" className="h-12 w-12 rounded inline-block mr-4 border border-grey-light" alt="GPS Police" />
              </a>
              <div className="flex-1 inline-block">
                <p className="font-bold mb-2">GPS Police</p>
                <IconLabel label="Calgary, AB" icon="map-marker-alt" />
                <IconLabel label="Feb. 2016 - present" icon="calendar-alt" />
                <IconLabel label="Developed mobile apps in Swift and React-Native" icon="mobile-alt" />
                <IconLabel label="Developed web clients in React" icon="react" iconSet="fab" />
              </div>
            </div>
            <div className="mb-4 flex align-leading">
              <a href="https://hbi.ucalgary.ca//" target="_blank" rel="noopener noreferrer" alt="Hotchkiss Brain Institute">
                <img src="/assets/img/hbi.jpeg" className="h-12 w-12 rounded inline-block mr-4 border border-grey-light" alt="Hotchkiss Brain Institute" />
              </a>
              <div className="flex-1 inline-block">
                <p className="font-bold mb-2">Hotchkiss Brain Institute</p>
                <IconLabel label="Calgary, AB" icon="map-marker-alt" />
                <IconLabel label="May - Nov. 2015" icon="calendar-alt" />
                <IconLabel label="Developed image processing software in Java" icon="java" iconSet="fab" />
              </div>
            </div>
          </Card>
        </Col>
        <Col md="1/2" className="px-4 flex flex-col">
          <Card className="border-t-4 border-blue mb-8 pt-4 px-4 flex-grow">
            <h3 className="text-blue-dark tracking-wide text-sm font-semibold uppercase mb-8">Skills</h3>
            <div className="flex flex-wrap align-start justify-start leading-normal">
              { languages.map(l => <Badge color="green">{l}</Badge>)}
              { frameworks.map(f => <Badge color="teal">{f}</Badge>)}
              { tools.map(t => <Badge color="blue">{t}</Badge>)}
              { applications.map(a => <Badge color="indigo">{a}</Badge>)}
              { patterns.map(a => <Badge color="purple">{a}</Badge>)}
            </div>
          </Card>
          <Card className="border-t-4 border-red mb-8 pt-4 px-4 flex-grow">
            <h3 className="text-red-dark tracking-wide text-sm font-semibold uppercase mb-8">Education</h3>
            <div className="mb-4 flex align-leading">
              <a href="https://www.ucalgary.ca/" target="_blank" rel="noopener noreferrer" alt="University of Calgary">
                <img src="/assets/img/uofc.jpg" className="h-12 w-12 rounded inline-block mr-4 border border-grey-light" alt="University of Calgary" />
              </a>
              <div className="flex-1 inline-block">
                <p className="font-bold mb-2">University of Calgary</p>
                <IconLabel label="Calgary, AB" icon="map-marker-alt" />
                <IconLabel label="Graduated with Distinction in 2015" icon="graduation-cap" />
                <IconLabel label="Bachelor of Science" icon="flask" />
                <IconLabel label="Majored in Computer Science" icon="code-branch" />
                <IconLabel label="Concentration in Human-Computer Interaction" icon="users" />
                <IconLabel label="Minored in Pure Math" icon="superscript" />
              </div>
            </div>
            <div className="mb-4 flex align-leading">
              <a href="http://schools.cbe.ab.ca/b816/" target="_blank" rel="noopener noreferrer" alt="Western Canada High School">
                <img src="/assets/img/wchs.png" className="h-12 w-12 rounded inline-block mr-4 border border-grey-light" alt="Western Canada High School" />
              </a>
              <div className="flex-1 inline-block">
                <p className="font-bold mb-1">Western Canada High School</p>
                <IconLabel label="Calgary, AB" icon="map-marker-alt" />
                <IconLabel label="Graduated in 2011" icon="graduation-cap" />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container className="flex-1 flex-col">
      <Card className="border-t-4 border-orange mb-8 pt-4 px-4 flex-1 h-full">
        <h3 className="text-orange-dark tracking-wide text-sm font-semibold uppercase mb-8">About me</h3>
        <Row className="-mx-4">
          <Col md="1/2" className="px-4" >
            <p className="leading-normal text-black mb-4">
              I am a software developer with a strong interest in the user-facing side of applications.
              Front-end development has so many interesting challenges, like visualizing data in a way
              that isn&#39;t only dense and informative, but nice to look at, all while fitting into the
              UX of the app in a consistent way that is as effective on a phone as it is on a desktop.
              (I also know my way around the back-end).
            </p>
            <p className="leading-normal text-black mb-4">
              It&#39;s hard, and I love it (Well, I don&#39;t love supporting IE, but I will. If I have to. I guess.).
            </p>
            <p className="leading-normal text-black mb-8 md:mb-0">
              When I&#39;m not coding, I might be 5-pin bowling (22 years in the game and competing at a
              National level since 2005), playing Overwatch (mostly supports and tanks) or another game,
              or watching some TV comedy for the nth time (Scrubs and Community come to mind).
            </p>
          </Col>
          <Col md="1/2" className="px-4">
            <form action="submit" className="flex flex-col h-full">
              <input type="email" className="mb-4 p-4 bg-grey-lightest focus:bg-grey-lightest border-2 border-grey-lighter hover:border-grey-light focus:border-grey hover:cursor-pointer rounded-lg font-bold" placeholder="Email" />
              <input type="text" className="mb-4 p-4 bg-grey-lightest focus:bg-grey-lightest border-2 border-grey-lighter hover:border-grey-light focus:border-grey hover:cursor-pointer rounded-lg font-bold" placeholder="Subject" />
              <textarea name="body" id="" rows="6" className="flex-grow mb-4 p-4 bg-grey-lightest focus:bg-grey-lightest border-2 border-grey-lighter hover:border-grey-light focus:border-grey hover:cursor-pointer rounded-lg font-bold" placeholder="What do you want to know?" />
              <button className="self-end px-4 py-2 text-green hover:text-green-lightest focus:text-green-lightest rounded bg-white hover:bg-green focus:bg-green border border-green-light font-bold">Send<i className="far fa-paper-plane ml-2" /></button>
            </form>
          </Col>
        </Row>
      </Card>
    </Container>
  </div>
));
