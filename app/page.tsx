"use client"; // simple one-page application for demonstration purposes - using client for this :)
import { useEffect, useState } from 'react';
import Circles from './components/circles';
import { useSearchParams } from 'next/navigation';
import GetStartedButton from './components/get-started-button';

export default function Home() {

  const [visits, setVisits] = useState(0);
  const [transitioned, setTransitioned] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('reset') === '1') {
      setVisits(1);
      localStorage.setItem('visits', '1');
    } else {
      let storedVisits = localStorage.getItem('visits') || '0';
      let numVisits = parseInt(storedVisits);
      numVisits += 1;
      setVisits(numVisits);
      localStorage.setItem('visits', numVisits.toString());
    }

  }, []);

  function toggleGradient() {
    setTransitioned(!transitioned);
  }

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-[1000ms] bg-gradient-to-tl from-green-500 via-blue-600 to-purple-600 bg-size-200 bg-pos-0 ${transitioned ? 'bg-pos-100' : 'bg-pos-0'}`}
    >
      <Circles circleCount={visits} />
      {/* <button className='absolute top-10 right-10' onClick={() => localStorage.clear()}>Clear Local Storage</button> */}
      <span className='text-5xl sm:text-7xl sm:pr-36 md:pr-72 md:pb-32 lg:pr-96 text-white font-bold font-google-open-sans mx-2 bg-red-00'>
        <h1>WATCH LIVE</h1>
        <h1>CBS SPORTS</h1>
        <GetStartedButton toggleGradient={toggleGradient} />
      </span>
    </main>
  )
}
