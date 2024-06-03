import React, { useEffect, useMemo, useState } from "react";
import { adjustHoverTarget } from "../components/home/funcs";
import WheelCircle from "../components/WheelCircle";
import { HoverTypes } from "../components/WheelCircle/types";
// import pfp from "../content/pfp.jpeg";
// import WheelCircle from "../components/WheelCircle";
// import { HoverTypes } from "../components/WheelCircle/types";

const Home = () => {
  const about_links = [
    { label: "about", href: "/about" },
    { label: "Resume", href: "/resume" },
    { label: "github", href: "https://github.com/cameron-d28" },
  ];

  const learn_links = [
    { label: "stripe press", href: "https://press.stripe.com/" },
    { label: "acquired podcast", href: "https://www.acquired.fm/" },
  ];

  const future_links = [
    { label: "coming soon", href: "/" },
    { label: "coming soon", href: "/" },
    { label: "coming soon", href: "/" },
    { label: "coming soon", href: "/" },
  ];

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const person = useMemo(() => {
    return adjustHoverTarget({
      window: windowSize,
      bg_image: { width: 1290, height: 1278 },
      div_size: { width: 150, height: 150 },
      div_pos: { left: 570, top: 270 },
    });
  }, [windowSize]);

  const sun = useMemo(() => {
    return adjustHoverTarget({
      window: windowSize,
      bg_image: { width: 1290, height: 1278 },
      div_size: { width: 190, height: 180 },
      div_pos: { left: 915, top: 140 },
    });
  }, [windowSize]);

  const hole = useMemo(() => {
    return adjustHoverTarget({
      window: windowSize,
      bg_image: { width: 1290, height: 1278 },
      div_size: { width: 1200, height: 400 },
      div_pos: { left: 70, top: 780 },
    });
  }, [windowSize]);

  // const [target, setTarget] = useState<{
  //   pos: { left: number | string; top: number | string };
  //   size: { width: number | string; height: number | string };
  //   // stretch: boolean;
  // }>({
  //   pos: { left: 0, top: 0 },
  //   size: { width: 0, height: 0 },
  //   // stretch: false,
  // });

  useEffect(() => {
    // const handleTarget = () => {
    //   // console.log("change target");
    //   setTarget(
    //     adjustHoverTarget({
    //       window: windowSize,
    //       bg_image: { width: 1290, height: 1278 },
    //       div_size: { width: 150, height: 150 },
    //       div_pos: { left: 570, top: 270 },
    //     })
    //   );
    // };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      // handleTarget();
    };

    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    // handleTarget();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    // document.addEventListener("DOMContentLoaded", handleTarget);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      // document.removeEventListener("DOMContentLoaded", handleTarget);
    };
  }, [windowSize]);

  return (
    <div className="App">
      {/* <header className="app-header">
        <img src={pfp} className="personal-pfp" alt="Profile Pic" />
        <p>cameron davis</p>
        <p>carpe diem</p>
      </header> */}
      <div className="background-container">
        <p>
          Window Size: {windowSize.width}px x {windowSize.height}px
        </p>
        <p>
          Mouse Position: {mousePosition.x}px x {mousePosition.y}px
        </p>
        <p>w/h Ratio: {windowSize.width / windowSize.height}</p>
        <p>h/w Ratio: {windowSize.height / windowSize.width}</p>

        <p>Background Ratio: {1290 / 1278}</p>
        <p>
          {person.size.height} compared{" "}
          {(0.074 * windowSize.height) / (windowSize.width / windowSize.height)}
        </p>
        {/* <div className="dynamic-navigation-body"> */}
        {/* <div
          className="hover-target"
          style={{
            left: person.pos.left,
            top: person.pos.top,
            width: person.size.width,
            height: person.size.height,
            opacity: 0.5,
          }}
        >
          Hover me!
        </div> */}
        {/* <div
          className="hover-target"
          style={{
            left: sun.pos.left,
            top: sun.pos.top,
            width: sun.size.width,
            height: sun.size.height,
            opacity: 0.5,
          }}
        >
          Hover me!
        </div>
        <div
          className="hover-target"
          style={{
            left: hole.pos.left,
            top: hole.pos.top,
            width: hole.size.width,
            height: hole.size.height,
            opacity: 0.5,
          }}
        >
          Hover me!
        </div> */}
        <WheelCircle
          style={{
            left: person.pos.left,
            top: person.pos.top,
            width: person.size.width,
            height: person.size.height,
          }}
          hovertype={HoverTypes.straight}
          links={about_links}
        />

        <WheelCircle
          style={{
            left: hole.pos.left,
            top: hole.pos.top,
            width: hole.size.width,
            height: hole.size.height,
          }}
          hovertype={HoverTypes.straight}
          links={learn_links}
        />

        <WheelCircle
          style={{
            left: sun.pos.left,
            top: sun.pos.top,
            width: sun.size.width,
            height: sun.size.height,
          }}
          hovertype={HoverTypes.spiral}
          links={future_links}
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
