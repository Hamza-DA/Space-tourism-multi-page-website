import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  useEffect(() => {
    setIsOpen(false);
  }, [currentRoute]);
  const paths = [
    { name: 'home', url: 'home' },
    { name: 'destination', url: 'destination' },
    { name: 'crew', url: 'crew' },
    { name: 'technology', url: 'technology' },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='fixed top-0 z-[9999] lg:top-2 w-screen flex items-center justify-between p-6 md:pl-9 md:p-0 lg:pl-12 2xl:container 2xl:mx-auto 2xl:left-1/2 2xl:-translate-x-1/2'>
      <Link href='/' className='w-10 h-10 md:h-12 md:w-12 relative'>
        <Image src={'/shared/logo.svg'} fill='cover' alt='' />
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className='relative z-10 md:hidden'
      >
        {isOpen ? (
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21'>
            <g fill='#D0D6F9' fillRule='evenodd'>
              <path d='M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z' />
              <path d='M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z' />
            </g>
          </svg>
        ) : (
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='21'>
            <g fill='#D0D6F9' fillRule='evenodd'>
              <path d='M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z' />
            </g>
          </svg>
        )}
      </button>
      <div
        className={`fixed top-0 bottom-0 right-0 h-screen w-2/3 bg-white bg-opacity-5 backdrop-blur-3xl transition md:hidden ${
          isOpen ? '' : 'translate-x-full'
        }`}
      >
        <ul className='font-display-1 flex flex-col gap-6 mt-28'>
          {paths.map((path, index) => (
            <li key={index} className='nav-text uppercase flex items-center '>
              <Link
                className={`relative py-2 ml-8 w-full after:content-[''] after:absolute after:h-full after:w-1 after:top-0 after:right-0 after:scale-y-0 after:transition ${
                  currentRoute === `/${path.url}`
                    ? 'after:bg-white after:scale-y-100'
                    : 'after:bg-neutral-500 hover:after:scale-y-100'
                }`}
                href={`/${path.url}`}
              >
                <strong className='mr-1'>0{index}</strong> {path.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className='border-neutral-600 hidden lg:block w-1/3 translate-x-20 z-10' />
      <ul className='font-display-1 px-9 flex-row gap-6 lg:gap-8 lg:px-24 bg-white bg-opacity-5 hidden md:flex  backdrop-blur-3xl'>
        {paths.map((path, index) => (
          <li key={index} className='nav-text uppercase flex items-center '>
            <Link
              className={`relative m-0 mx-4 py-9 after:content-[''] after:absolute after:w-full after:h-1 after:bottom-0 after:left-0 after:scale-x-0 after:transition ${
                currentRoute === `/${path.url}`
                  ? 'after:bg-white after:scale-x-100'
                  : 'after:bg-neutral-500 hover:after:scale-x-100'
              }`}
              href={`/${path.url}`}
            >
              <strong className='mr-1 md:hidden lg:inline'>0{index}</strong>
              {path.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
