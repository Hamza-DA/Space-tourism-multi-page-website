import Image from 'next/image';
import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import Loader from '../components/Loader';
import { useRouter } from 'next/router';

const Destination = ({ destination }) => {
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  if (router?.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>Space Travel - Destination</title>
        <meta
          name='description'
          content='So, you want to travel to space? you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this
          world experience!'
        />
        <meta property='og:title' content='Space Travel - Destination' />
        <meta
          property='og:description'
          content='So, you want to travel to space? you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this
          world experience!'
        />
      </Head>
      {console.log(destination)}
      <div className=' bg-cover bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-no-repeat relative min-h-screen'>
        <main className='2xl:container 2xl:mx-auto pb-24 pt-24 md:pt-28 px-9 lg:pb-0 lg:px-32'>
          <h6 className='uppercase text-center subheading-2 text-[20px] lg:text-[28px]  mb-8 text-white md:text-left'>
            <strong className='mr-1 opacity-25 lg:mr-5'>01</strong>
            Pick your destination
          </h6>
          <article className=' flex flex-col items-center md:mx-28 lg:mx-0 gap-6 md:gap-10 lg:gap-32 md:justify-between lg:justify-center lg:flex-row'>
            <div className='relative w-1/2 md:w-1/2 lg:w-2/5 h-auto aspect-square border-none'>
              {destination?.map((e, i) => (
                <Image
                  key={i}
                  className={` object-contain transition ${
                    i == current
                      ? 'opacity-100 rotate-0'
                      : 'opacity-0 select-none pointer-events-none rotate-3'
                  }`}
                  src={e.images.png}
                  fill='contain'
                  alt={e.name}
                />
              ))}
            </div>
            <div className='flex flex-col gap-6 md:gap-10 items-center lg:items-start md:flex-col'>
              <span className='flex'>
                {destination?.map((e, i) => (
                  <button
                    key={i}
                    className={`py-2 mx-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:transition ${
                      current == i
                        ? 'after:bg-white after:scale-x-100'
                        : 'after:bg-light-blue after:scale-x-0 hover:after:scale-x-100 '
                    }`}
                    onClick={() => {
                      setCurrent(i);
                    }}
                  >
                    <span
                      className={`  ${
                        current == i ? 'text-white' : 'text-light-blue'
                      } block font-display-2 uppercase`}
                    >
                      {e.name}
                    </span>
                  </button>
                ))}
              </span>
              <div className='relative flex gap-6 w-full'>
                {destination?.map((e, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center text-center lg:items-start lg:text-left transition ${
                      i == current ? 'block' : 'hidden'
                    }`}
                  >
                    <h1 className='text-6xl font-display-1 uppercase mb-2 lg:mb-7 md:text-[80px] lg:text-[100px]'>
                      {e.name}
                    </h1>
                    <p className=' text-light-blue text-sm md:text-base lg:max-w-[44ch] '>
                      {e.description}
                    </p>
                    <hr className='border-neutral-600 my-8 w-full' />
                    <div className='flex flex-col md:flex-row md:gap-8 gap-4'>
                      <div className='flex flex-col gap-2'>
                        <h5 className='text-sm text-light-blue font-display-2'>
                          <abbr title='Average'>AVG.</abbr>DISTANCE
                        </h5>
                        <p
                          className='text-2xl font-display-1 uppercase
                    '
                        >
                          {e.distance}
                        </p>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <h5 className='text-sm text-light-blue font-display-2'>
                          <abbr title='Average'>Est.</abbr>travel time
                        </h5>
                        <p
                          className='body-text text-2xl font-display-1 uppercase
                    '
                        >
                          {e.travel}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default Destination;
import fsPromises from 'fs/promises';
import path from 'path';
export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return {
    props: { destination: objectData.destination },
  };
};
