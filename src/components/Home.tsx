"use client";

import { useCallback, useEffect, useState } from "react";
import Preloader from "./Preloader";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Approach from "./Approach";
import Showcase from "./Showcase";
import Outcomes from "./Outcomes";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const markDone = useCallback(() => setIntroDone(true), []);

  // Failsafe: never leave the homepage locked behind the intro.
  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 3200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Preloader onDone={markDone} />
      <Navbar show={introDone} />
      <main>
        <Hero start={introDone} />
        <About />
        <Approach />
        <Showcase />
        <Outcomes />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
