import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Head from 'next/head';
const Technology = ({ technology }) => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <Head>
        <title>Space Travel - Technology</title>
        <meta
          name='description'
          content='So, you want to travel to space? you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this
          world experience!'
        />
        <meta property='og:title' content='Space Travel - Technology' />
        <meta
          property='og:description'
          content='So, you want to travel to space? you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this
          world experience!'
        />
      </Head>
      <div className='bg-cover bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-no-repeat relative min-h-screen'>
        <main className='2xl:container 2xl:mx-auto pt-24 md:pt-28 px-0 lg:pl-32 lg:pr-0 '>
          <h6 className='uppercase text-center subheading-2 text-[20px] lg:text-[28px]  mb-8 text-white md:text-left'>
            <strong className='mr-1 opacity-25 lg:mr-5'>03</strong>
            SPACE LAUNCH 101
          </h6>

          <article className=' flex flex-col items-center mx-0 md:mx-0 lg:mx-0 gap-6 md:gap-10 md:flex-col md:justify-between lg:flex-row-reverse'>
            <div className='relative w-full h-52 md:h-96 lg:h-auto lg:w-1/2 lg:aspect-square border-b-[1px] border-neutral-600 md:border-none'>
              {technology.map((e, i) => (
                <Image
                  key={i}
                  className={`object-cover transition ${
                    i == current
                      ? 'opacity-100'
                      : 'opacity-0 select-none pointer-events-none'
                  }`}
                  src={e.images.portrait}
                  fill='cover'
                  alt={e.name}
                />
              ))}
            </div>
            <div className='flex flex-col gap-6 md:gap-10 lg:w-1/2 items-center lg:items-start lg:gap-10 md:flex-col lg:flex-row'>
              <span className='flex flex-row lg:flex-col gap-4 lg:gap-6'>
                {technology.map((e, i) => (
                  <button
                    key={i}
                    className={`w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 relative rounded-full text-base lg:text-3xl font-display-1 transition ${
                      current == i
                        ? 'bg-white text-dark-blue'
                        : 'bg-transparent border-[1px] border-neutral-600 hover:border-white'
                    }`}
                    onClick={() => {
                      setCurrent(i);
                    }}
                  >
                    <span className={` block uppercase`}>{i + 1}</span>
                  </button>
                ))}
              </span>
              <div className='relative w-full'>
                {technology.map((e, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center text-center lg:items-start lg:text-left transition ${
                      i == current ? 'block' : 'hidden'
                    }`}
                  >
                    <span className='font-display-2 tracking-widest uppercase opacity-50 text-base lg:mb-4'>
                      The terminology...
                    </span>
                    <h1 className='text-[24px] font-display-1 uppercase mb-4 lg:mb-7 md:text-[40px] lg:text-5xl'>
                      {e.name}
                    </h1>
                    <p className='body-text  text-light-blue text-sm md:text-base max-w-[80%] md:max-w-[70ch] lg:max-w-[44ch] '>
                      {e.description}
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

export default Technology;
export const getStaticProps = async () => {
  const res = await axios(`${process.env.BASE_URL}api/technology`);
  return {
    props: {
      technology: res.data,
    },
  };
};
