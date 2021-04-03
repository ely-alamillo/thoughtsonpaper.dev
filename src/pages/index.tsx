import React from 'react';
import matter from 'gray-matter';
import Link from 'next/link';

import { Layout } from '@Components';
import { getAllPosts } from 'utils/api';

function formatDate(date) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const today = new Date(date);

  return today.toLocaleDateString('en-US', options);
}

function freshWriting(date) {
  const writingDate = new Date(date).getTime();
  const today = new Date().getTime();

  return today - writingDate < 60 * 60 * 1000 * 24 * 2; // 2 days old
}

function Homepage({ writings }) {
  return (
    <>
      <Layout isHomepage secondaryPage={false}>
        <div className="w-full">
          {writings.map(({ title, date, slug }) => {
            return (
              <div key={slug}>
                <div className="writing-row" key={title}>
                  <div>
                    <div className="writing-date">{formatDate(date)}</div>
                  </div>

                  <Link href="/blog/[slug]" as={`/blog/${slug}`}>
                    <a className="flex">
                      {freshWriting(date) && (
                        <div className="flex justify-center items-center pr-3">
                          <div className="pulse" />
                        </div>
                      )}
                      <span className="writing-title">{title}</span>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const writings = getAllPosts(['title', 'date', 'slug', 'author']);

  return {
    props: { writings },
  };
};

export default Homepage;
