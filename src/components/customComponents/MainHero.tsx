'use client';
import { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import { brandColours } from './utils/cn';
import { Reveal } from './Reveal';
import Header from './Header';
import { Experience } from './Experience';

export default function Home() {
  const [currentTab, setCurrentTab] = useState(true);
  return (
    <>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main className="w-screen h-screen relative">
        <Parallax
          pages={3}
          style={{ top: '0', left: '0' }}
          className="animation"
        >
          <div
            className="flex items-center w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(main-bg.webp)' }}
          ></div>

          <ParallaxLayer offset={0} speed={0}>
            <div className="pl-20 md:pl-40 pb-56 mt-20 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
              <Reveal
                children={
                  <h1 className="text-[50px] text-white font-semibold">
                    Hey, I am
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                      {' '}
                      Aman.
                    </span>
                  </h1>
                }
              />
              <Reveal
                children={
                  <h1 className="text-[30px] text-white font-semibold">
                    I Am a
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                      {' '}
                      Full Stack Developer.
                    </span>
                  </h1>
                }
              />
              <p className="text-gray-200  md:block">
                <div className="summary">
                  I am a software engineer with a passion for building scalable
                  and user-friendly software applications. With 5+ years of
                  expertise, skilled in both backend (4 years) and frontend (2
                  years) development. Demonstrated expertise in database
                  management, REST API integration, and agile methodology.
                  Proficient in database management, Rest API integration, and
                  agile methodology, I excel in designing efficient data flow
                  structures.
                </div>
              </p>
            </div>
            <div className="flex">
              <Experience />
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={1.1}>
            <div className="absolute bottom-0 z-[5] w-full h-auto">
              <img
                src="trees.webp"
                alt="trees"
                width={2000}
                height={2000}
                className="w-full h-full"
              />
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.8}>
          <div className="absolute bottom-1 right-0 z-[10] md:hidden">
              <img
                src="horse.png"
                alt="horse"
                height={150}
                width={150}
                className="absolute right-10 py-30 top-40"
              />
              <img src="cliff.webp" alt="cliff" width={180} height={180} />
            </div>
            <div className="hidden md:block absolute bottom--10 right-0 z-[10]">
              <img
                src="horse.png"
                alt="horse"
                height={300}
                width={300}
                className="absolute right-55 top-40"
              />
              <img src="cliff.webp" alt="cliff" width={480} height={480} />
            </div>
          </ParallaxLayer>

          {/* <ParallaxLayer offset={0} speed={-1}>
                    <div className="absolute bottom-0 right-0 z-[10]">
                    <img
                  src="stars.png"
                  alt="stars"
                  height={300}
                  width={300}
                  className="absolute top-0 left-0 z-[10]"
                />
                    </div>
                  </ParallaxLayer> */}
        </Parallax>
      </main>
    </>
  );
}
