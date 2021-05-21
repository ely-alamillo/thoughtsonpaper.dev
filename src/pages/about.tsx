import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import { Layout, Icon } from '@Components';
import { PRESENT } from 'utils/constants';

/* eslint-disable-next-line */
// const TextTransition = dynamic(() => import('react-text-transition'), {
//   ssr: false,
// });

function About() {
  const [_index, setIndex] = useState(0);

  useEffect(() => {
    const _intervalId = setInterval(
      () => setIndex(index => index + 1),
      3000 // every 3 seconds
    );
  }, []);

  return (
    <>
      <Layout secondaryPage isHomepage={false}>
        <div style={{ marginTop: 50 }}>
          <h1 className="text-6xl mb-20 mt-20 font-bold tracking-wide">
            Ely Alamillo
            {/* <TextTransition
              text={SKILLS[index % SKILLS.length]}
              springConfig={config.gentle}
              style={{ display: 'inline-block' }}
            /> */}
          </h1>

          <div className="about-intro">
            <div className="pb-10">
              I'm a frontend engineer with 3+ years of experience and I'm
              currently working at{' '}
              <a href="https://aws.amazon.com/iot/">AWS IoT</a>. Over the past
              few months i've had an itch of sharing my knowledge with the dev
              community and never followed through. I eventually decided to
              buckle down and start this blog. Hopefully I can share things that
              interests other as much as me.
              <br />
              <br />
              I'm still not sure what exactly i'll be writing about but i'm sure
              as time goes on i'll find my groove.
              <br />
              <br />
            </div>
            {/* <hr /> */}
            <h3>Things i've worked with: </h3>
            <div
              style={{ marginTop: 30 }}
              className="grid grid-cols-3 md:grid-cols-5 gap-5"
            >
              {PRESENT.map(s => (
                <div
                  className="flex flex-col justify-center content-center"
                  key={s}
                >
                  <Icon type={s} />
                  <div className="stack-name text-center">{s}</div>
                </div>
              ))}
            </div>
            <div className="pt-16">
              <div className="twitter-follow">
                Follow me on{' '}
                <a
                  href="https://twitter.com/botdev_"
                  rel="noopener noreferrer nofollow"
                >
                  Twitter
                </a>{' '}
                for more
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
