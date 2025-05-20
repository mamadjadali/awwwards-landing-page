'use client';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Bento from "../components/BentoGrid";
import Landing from '../components/Landing';
import LogoCloud from "../components/LogoCloud";
import Preloader from '../components/Preloader';
import SlidingImages from '../components/SlidingImages';
import Stats from "../components/Stats";
import "./globals.css";
import styles from './page.module.scss';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Bento/>
      
      <SlidingImages />
      <Stats/>
      <LogoCloud/>
      
      
    </main>
  )
}
