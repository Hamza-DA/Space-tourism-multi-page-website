import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
const Role = ({ crew }) => {
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  if (router?.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Space Travel - Crew</title>
        <meta
          name='description'
          content='So, you want to travel to space? you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this
          world experience!'
        />
        <meta property='og:title' content='Space Travel - Crew' />
        <meta
          property='og:description'
          content='So, you want to travel to space? you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this
          world experience!'
        />
      </Head>
      <div className=' bg-cover bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-no-repeat relative min-h-screen'>
        <main className='2xl:container 2xl:mx-auto pt-24 md:pt-28 px-9 lg:px-32 pb-24 lg:pb-0'>
          <h6 className='uppercase text-center subheading-2 text-[20px] lg:text-[28px]  mb-8 text-white md:text-left'>
            <strong className='mr-1 opacity-25 lg:mr-5'>02</strong>
            meet your crew
          </h6>

          <article className=' flex flex-col items-center mx-4 md:mx-28 lg:mx-0 gap-6 md:gap-10 md:flex-col-reverse md:justify-between lg:flex-row-reverse'>
            <div className='relative w-full lg:w-1/2 h-auto aspect-square border-b-[1px] border-neutral-600 md:border-none'>
              {crew?.map((e, i) => (
                <Image
                  key={i}
                  className={` object-contain transition ${
                    i == current
                      ? 'opacity-100'
                      : 'opacity-0 select-none pointer-events-none'
                  }`}
                  src={e.images.png}
                  fill='contain'
                  alt={e.name}
                />
              ))}
            </div>
            <div className='flex flex-col gap-6 md:gap-10 lg:w-1/2 items-center lg:items-start lg:gap-28 md:flex-col-reverse'>
              <span className='flex'>
                {crew?.map((e, i) => (
                  <button
                    key={i}
                    className='p-2'
                    onClick={() => {
                      setCurrent(i);
                    }}
                  >
                    <span
                      className={`w-[10px] h-[10px] transition ${
                        current == i
                          ? 'bg-white'
                          : 'bg-neutral-500 hover:bg-neutral-400'
                      } block rounded-full`}
                    ></span>
                  </button>
                ))}
              </span>
              <div className='relative w-full'>
                {crew?.map((e, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center text-center lg:items-start lg:text-left transition ${
                      i == current ? 'block' : 'hidden'
                    }`}
                  >
                    <span className='font-display-1 uppercase opacity-50 md:text-2xl lg:text-3xl lg:mb-4'>
                      {e?.role}
                    </span>
                    <h1 className='text-[24px] font-display-1 uppercase mb-4 lg:mb-7 md:text-[40px] lg:text-5xl'>
                      {e?.name}
                    </h1>
                    <p className=' text-light-blue text-sm md:text-base lg:max-w-[44ch] '>
                      {e?.bio}
                    </p>
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

export default Role;
// export const getStaticPaths = async () => {
//   const results = await axios.get('http://localhost:3000/api/crew');
//   const paths = results.data.map((result) => ({
//     params: { crew: result.name },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticProps = async () => {
  const results = await axios(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/crew`
  );
  return {
    props: { crew: results.data || null },
  };
};
