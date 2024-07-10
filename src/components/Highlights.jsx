import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { watchImg, rightImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

gsap.registerPlugin(ScrollTrigger);

function Highlights() {
  useEffect(() => {
    gsap.fromTo(
      "#title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#title",
          start: "top 75%",
          end: "bottom 25%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".link",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: ".link",
          start: "top 75%",
          end: "bottom 25%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        {/* top heading row */}
        <div className="flex mb-12 w-full items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch Image" className="ml-2" />
            </p>
            <p className="link">
              Watch the events
              <img src={rightImg} alt="right Image" className="ml-2" />
            </p>
          </div>
        </div>
        {/* animation video carousel */}
        <div>
          <VideoCarousel />
        </div>
      </div>
    </section>
  );
}

export default Highlights;
