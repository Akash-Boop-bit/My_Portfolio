import React, { useRef } from "react";
import classes from "./css/Home.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypeWriterEffect from "./TypeWriterEffect";
import Navbar from "./Navbar";
import About from "./About";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  const trigg = useRef(null);
  const vid = useRef(null);
  const card = useRef(null);

  useGSAP(() => {
    gsap.to(vid.current, {
      y: 1300,
      scrollTrigger: {
        trigger: trigg.current,
        scrub: true,
      },
    });
    const tl = gsap.timeline({});

    tl.set(card.current, {
      xPercent: -100,
      opacity: 0,
    });
    tl.to(card.current, {
      duration: 1,
      xPercent: 0,
      opacity: 1,
    });
    tl.to(card.current, {
      xPercent: 150,
      yPercent: 180,
      opacity: 0,
      scrollTrigger: {
        trigger: trigg.current,
        scrub: true,
      },
    });
  });

  return (
    <>
      <div className={classes.main}>
        <div className={classes.vid}></div>
        <video ref={vid} className={classes.video} autoPlay muted loop>
          <source src="./videos/video.mp4" />
          <source src="./videos/video.webm" />
        </video>

        <div className={classes.main2}>
          <div ref={card} className={classes.card}>
            <div className={classes.navbar}>
              <Navbar home={true} />
            </div>
            <div className={classes.cardmain}>
              <div className={classes.card1}>
                <h1>Hello !</h1>
                <p>
                  I'm Akash, a Full Stack Web Developer skilled in the MERN
                  stack with 1-2 years of development experience. Currently, I'm
                  a first-year B.Tech CSE student, passionate about building
                  innovative and scalable applications.
                </p>
                <TypeWriterEffect />
              </div>
              <div className={classes.card2}></div>
            </div>
          </div>
        </div>
        <div ref={trigg} className={classes.trigger}></div>
        {/* <div className={classes.fade}></div> */}
        <div>
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;