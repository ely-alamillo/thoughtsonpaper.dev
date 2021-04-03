import React from 'react';

import { Layout } from '@Components';
import { USES } from 'utils/constants';

function Uses() {
  return (
    <>
      <Layout secondaryPage isHomepage={false}>
        <h1 className="text-6xl mb-10 mt-20 font-bold tracking-wide">
          Things I use
        </h1>

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

export const getStaticProps = async () => {
  return {
    props: {
      data: {
        og: {
          description: 'Everyday setup.',
          image: 'https://elyalamillo.com/og/uses.png',
        },
      },
    },
  };
};

export default Uses;
