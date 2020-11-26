import React, {
  useState,
  useEffect,
  FunctionComponent,
  ReactNode,
} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Moon, Zap } from 'react-feather';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
  isHomepage: boolean;
  secondaryPage: boolean;
  noHead?: boolean;
}

const menu = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/uses',
    name: 'Uses',
  },
];

export const Layout: FunctionComponent<LayoutProps> = ({
  children,
  isHomepage,
  secondaryPage,
  // _noHead = false,
}) => {
  const onLoadTheme =
    typeof localStorage !== 'undefined' && localStorage.getItem('BLOG_THEME');
  const [theme, setTheme] = useState(onLoadTheme);
  const [mounted, setMounted] = useState(false);
  const switchTheme = () => {
    const setTo = theme === 'dark' ? 'light' : 'dark';

    setTheme(setTo);
  };

  useEffect(() => {
    if (onLoadTheme) return;

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('BLOG_THEME', theme);

    setMounted(true);
  }, [theme]);

  const containerProps = {
    ...(isHomepage && { md: 12 }),
    ...(!isHomepage && { md: 8, mdOffset: 2 }),
  };

  if (!mounted) return <div />;

  return (
    <>
      <div className="top-menu">
        <Row>
          <Col xs={10}>
            <ul>
              {/* <li className="logo">
                <Link href="/" as="/">
                  <a>⧩</a>
                </Link>
              </li> */}

              {menu.map(({ path, name }) => (
                <li key={name}>
                  <Link href={path} as={path}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={2} style={{ textAlign: 'right' }}>
            <button
              type="button"
              className="theme-switch-button"
              onClick={() => switchTheme()}
            >
              {theme === 'dark' ? <Zap /> : <Moon />}
            </button>
          </Col>
        </Row>
      </div>

      <Grid>
        <Row>
          <Col {...containerProps}>
            {!secondaryPage && (
              <h1
                className="blog-title"
                style={isHomepage && { textAlign: 'left' }}
              >
                thoughts on " paper "
              </h1>
            )}

            {children}
          </Col>
        </Row>
      </Grid>

      <footer>
        &copy; {new Date().getFullYear()} {' Ely Alamillo'}
      </footer>
    </>
  );
};
