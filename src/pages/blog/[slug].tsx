import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import ProgressBar from 'react-scroll-progress-bar';

import { Layout, CodeBlock } from '@Components';

export const Writing = ({ content, data }) => {
  const frontmatter = data;
  const { title } = frontmatter;

  return (
    <>
      <div className="writing-progress">
        <ProgressBar height="5px" />
      </div>

      <Layout secondaryPage noHead isHomepage={false}>
        <div style={{ marginTop: 50 }}>
          <Link href="/" as="/">
            <a className="back-button">back</a>
          </Link>
          <h1 className="writing-title-h1">{title}</h1>
          <div className="writing-container">
            <ReactMarkdown
              source={content}
              escapeHtml={false}
              renderers={{
                code: CodeBlock,
                link: props => {
                  if (!props.href.startsWith('http')) {
                    return props.href;
                  }

                  return (
                    <a
                      href={props.href}
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                    >
                      {props.children}
                    </a>
                  );
                },
                image: props => {
                  return <img {...props} style={{ marginTop: '1em' }} alt="" />;
                },
              }}
            />

            <div className="twitter-follow">
              If you have any questions feel free to find me on{' '}
              <a
                href="https://twitter.com/_elyalamillo"
                rel="noopener noreferrer nofollow"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

// TODO: UPDATE TO USE GETSTATICPROPS AND GETSTATICPATHS
Writing.getInitialProps = async context => {
  const { slug } = context.query;
  const content = await import(`../../writings/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};

export default Writing;
