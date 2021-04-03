import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import ProgressBar from 'react-scroll-progress-bar';

import { GetStaticPaths } from 'next';
import { Layout, CodeBlock } from '@Components';
import { getAllPosts, getPostBySlug } from 'utils/api';

export const Writing = ({ content, data }) => {
  const frontmatter = data;
  const { title } = frontmatter;

  return (
    <>
      <div className="writing-progress">
        <ProgressBar height="5px" />
      </div>

      <Layout secondaryPage noHead isHomepage={false}>
        <div className="pt-6">
          <Link href="/" as="/">
            <a className="back-button">back</a>
          </Link>
          <h1 className="text-6xl mb-20 mt-10 font-bold tracking-wide leading-normal">
            {title}
          </h1>
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

export const getStaticProps = async ({ params }) => {
  // TODO: fix overfetching
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);

  const content = await import(`../../_blogs/${params.slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      content: data.content,
      data: { ...data.data },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default Writing;
