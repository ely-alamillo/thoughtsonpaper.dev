import React, {
  useState,
  useEffect,
  FunctionComponent,
  ReactNode,
} from 'react';
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

  const layoutClasses = isHomepage
    ? 'mx-auto w-full h-5/6'
    : 'w-full sm:px-20 md:px-28 xl:px-80';

  if (!mounted) return <div />;

  return (
    <div className="mx-auto w-10/12 w:10/12 md:w-10/12 h-screen">
      <div className="top-menu relative flex items-center justify-between h-16">
        <div className="flex-1 flex sm:items-stretch sm:justify-start">
          <ul className="list-none flex justify-start -ml-2.5">
            {menu.map(({ path, name }) => (
              <li key={name}>
                <Link href={path} as={path}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="theme-switch-button"
            onClick={() => switchTheme()}
          >
            {theme === 'dark' ? (
              <Zap />
            ) : (
              <Moon className="hover:animate-pulse" />
            )}
          </button>
        </div>
      </div>
      <div className={`${layoutClasses}`}>
        {!secondaryPage && (
          <h1
            className="blog-title text-6xl mb-20 mt-20 font-bold tracking-wide"
            style={isHomepage && { textAlign: 'left' }}
          >
            {'thoughts on paper'}
          </h1>
        )}

        {children}
      </div>
      <footer className="pt-14 pb-5">
        &copy; {new Date().getFullYear()} {' Ely Alamillo'}
      </footer>
    </div>
  );
};
