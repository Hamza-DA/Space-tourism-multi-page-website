import Head from 'next/head';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <Head>
        <title>Space Travel - Home</title>
        <meta
          name='description'
          content='So, you want to travel to space? you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this
          world experience!'
        />
        <meta property='og:title' content='Space Travel' />
        <meta
          property='og:description'
          content='So, you want to travel to space? you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this
          world experience!'
        />
      </Head>
      <div className='bg-cover bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-no-repeat relative min-h-screen flex items-center'>
        <main className='2xl:container 2xl:mx-auto gap-14 md:gap-28 flex flex-col xl:flex-row items-center justify-center xl:justify-between xl:items-end  xl:px-32'>
          <div
            className='flex flex-col items-center xl:items-start text-center xl:text-left justify-center mx-6 md:mx-40 xl:m-0 md:pt-28 w-auto xl:w-1/3
        '
          >
            <h6 className='subheading-2 text-[20px] lg:text-[28px] text-light-blue'>
              SO, YOU WANT TO TRAVEL TO
            </h6>
            <h1 className='heading-3 text-[80px] md:text-[150px]'>SPACE</h1>
            <p className='body-text text-[15px] md:text-[16px] lg:text-lg tracking-normal text-light-blue'>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <Link
            href='/destination'
            className=' bg-white w-40 h-40 md:w-60 md:h-60 rounded-full text-dark-blue font-display-1 relative text-[20px] md:text-3xl flex items-center justify-center before:scale-100 before:w-full before:h-full before:bg-white before:rounded-full before:absolute before:bg-opacity-5 hover:before:scale-150 before:transition before:-z-10 hover:scale-95 transition'
          >
            EXPLORE
          </Link>
          {/* <Image
          className='w-screen h-screen object-cover fixed inset-0 -z-10'
          fill='cover'
          srcSet='/home/background-home-mobile.jpg 375w, /home/background-home-tablet.jpg 768w, /home/background-home-desktop.jpg 1440w'
          src='/home/background-home-mobile.jpg'
          sizes='(max-width: 375px) 375px, (max-width: 600px) 100%, 1440px'
          alt=''
        /> */}
        </main>
      </div>
    </>
  );
}
