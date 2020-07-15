import React from 'react';

import Layout from '../components/Layout';
import { USES } from '../constants/Uses';

function Uses({ og }) {
  return (
    <>
      <Layout secondaryPage>
        <h1 className="uses-h1">Things I use</h1>

        <div className="uses-intro">
          Thought i'd share the things I use daily since people like those
          things
        </div>

        {USES.map(({ title, stack }) => (
          <ul className="uses-list" key={title}>
            <li className="head">{title}</li>

            {stack.map(({ name, description, link }) => (
              <li key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {name}
                </a>
                <span>{description}</span>
              </li>
            ))}
          </ul>
        ))}
      </Layout>
    </>
  );
}

Uses.getInitialProps = () => {
  return {
    data: {
      og: {
        description: 'Everyday setup.',
        image: 'https://elyalamillo.com/og/uses.png',
      },
    },
  };
};

export default Uses;
