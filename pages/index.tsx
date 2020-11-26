import React from 'react';
import matter from 'gray-matter';
import Link from 'next/link';
import { Row, Col } from 'react-flexbox-grid';

import { Layout } from '@Components';

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
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
        <Row>
          {writings.map(({ document, slug }) => {
            const {
              data: { title, date },
            } = document;

            return (
              <Col md={12} key={slug}>
                <div className="writing-row" key={title}>
                  <Row>
                    <Col md={12}>
                      <div className="writing-date">{formatDate(date)}</div>
                    </Col>

                    <Col md={12}>
                      <Link href="/blog/[slug]" as={`/blog/${slug}`}>
                        <a>
                          {freshWriting(date) && <div className="pulse" />}
                          <span className="writing-title">{title}</span>
                        </a>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
            );
          })}
        </Row>
      </Layout>
    </>
  );
}

Homepage.getInitialProps = async _context => {
  const writings = (ctx => {
    const keys = ctx.keys();
    const values = keys.map(ctx);
    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      const value = values[index];
      // FIXME:
      // @ts-ignore
      const document = matter(value.default);
      return { document, slug };
    });

    return data.slice().sort(
      (a, b) =>
        // cast to number
        +new Date(b.document.data.date) - +new Date(a.document.data.date)
    );
  })(require.context('../writings', true, /\.md$/));

  return {
    writings,
  };
};
export default Homepage;
