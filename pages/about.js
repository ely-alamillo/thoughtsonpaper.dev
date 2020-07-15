import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import dynamic from 'next/dynamic';
import { config } from 'react-spring';

const TextTransition = dynamic(() => import('react-text-transition'), {
  ssr: false,
});

import Layout from '../components/Layout';
import Icon from '../components/Icon';
import { PRESENT, SKILLS } from '../constants/Stack';

function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
  }, []);

  return (
    <>
      <Layout secondaryPage>
        <div style={{ marginTop: 50 }}>
          <h1 className="about-h1">
            Ely Alamillo
            {/* <TextTransition
              text={SKILLS[index % SKILLS.length]}
              springConfig={config.gentle}
              style={{ display: 'inline-block' }}
            /> */}
          </h1>

          <div className="about-intro">
            <Row>
              <Col md={12}>
                I'm a frontend engineer with 3+ years of experience and I'm
                currently working at{' '}
                <a href="https://aws.amazon.com/iot/">AWS IoT</a>. Over the past
                few months i've had an itch of sharing my knowledge with the dev
                community and never followed through. I eventually decided to
                buckle down and start this blog. Hopefully I can share things
                that interests other as much as me.
                <br />
                <br />
                I'm still not sure what exactly i'll be writing about but i'm
                sure as time goes on i'll find my groove.
                <br />
                <br />
              </Col>
            </Row>
            <hr />
            <h3>Things i've worked with: </h3>
            <Row style={{ marginTop: 30 }}>
              {PRESENT.map((s) => (
                <Col
                  md={2}
                  xs={4}
                  key={s}
                  style={{ textAlign: 'center', marginBottom: 40 }}
                >
                  <Icon type={s} />
                  <div className="stack-name">{s}</div>
                </Col>
              ))}
            </Row>
            <hr />
            <div className="twitter-follow">
              Follow me on{' '}
              <a
                href="https://twitter.com/_elyalamillo"
                rel="noopener noreferrer nofollow"
              >
                Twitter
              </a>{' '}
              for more
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
