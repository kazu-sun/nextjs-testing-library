import Head from 'next/head';
import Link from 'next/link';

interface TITLE {
  title: string;
}

const Layout: React.FC<TITLE> = ({ children, title = 'Nextjs' }) => {
  return (
    <div className='flex justify-self-center items-center flex-col min-h-screen font-mono'>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className='bg-gray-800 w-screen'>
          <div className='flex items-center pl-8 h-14'>
            <div className='flex space-x-4'>
              <Link href='/'>
                <a
                  data-testid='home-nav'
                  className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'
                >
                  Home
                </a>
              </Link>
              <Link href='/blog-page'>
                <a
                  data-testid='blog-nav'
                  className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'
                >
                  Home
                </a>
              </Link>
              <Link href='/comment-page'>
                <a
                  data-testid='comment-nav'
                  className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'
                >
                  Home
                </a>
              </Link>
              <Link href='/context-page'>
                <a
                  data-testid='context-nav'
                  className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'
                >
                  Home
                </a>
              </Link>
              <Link href='/task-page'>
                <a
                  data-testid='task-nav'
                  className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'
                >
                  Home
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className='flex flex-1 justify-center items-center flex-col w-screen'>
        {children}
      </main>
      <footer className='flex items-center'>
        <a
          className='flex items-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-temp;ate&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='vercel Logo' className='h4-4 ml-2' />
        </a>
      </footer>
    </div>
  );
};
export default Layout;
