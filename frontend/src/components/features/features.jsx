import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function Features() {
  const videoRef = useRef();
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });

  // Function to play the video
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Use useEffect to play the video when inView is true
  useEffect(() => {
    if (inView) {
      playVideo();
    }
  }, [inView]);

  return (
    <div className="features bg-f1fdf7 flex flex-col justify-center py-10">
      <h1 className="font-bold text-4xl ml-10 mb-5 ">
        A whole world of freelance talent at your fingertips
      </h1>
      <div className="container w-1400 flex flex-col md:flex-row items-center gap-20">
        <div className="item flex flex-col gap-5 flex-2 w-half">
          <div className="title flex items-center gap-2 text-gray-600">
            <img src="./img/check.png" alt="" className="w-2 h-2" />
            The best for every budget
          </div>
          <p className="text-gray font-light mx-5">
            Find high-quality services at every price point. No hourly rates, just project-based pricing.
          </p>
          <div className="title flex items-center gap-2 text-gray-600">
            <img src="./img/check.png" alt="" className="w-6 h-6" />
            Quality work done quickly
          </div>
          <p className="text-gray font-light mx-5">
            Find the right freelancer to begin working on your project within minutes.
          </p>
          <div className="title flex items-center gap-2 text-gray-600">
            <img src="./img/check.png" alt="" className="w-6 h-6" />
            Protected payments, every time
          </div>
          <p className="text-gray font-light mx-5">
            Always know what you'll pay upfront. Your payment isn't released until you approve the work.
          </p>
          <div className="title flex items-center gap-2 text-gray-600">
            <img src="./img/check.png" alt="" className="w-6 h-6" />
            24/7 support
          </div>
          <p className="text-gray font-light  mx-5 ">
            Find high-quality services at every price point. No hourly rates, just project-based pricing.
          </p>
        </div>
        <div className="item flex-3">
          <video
            ref={videoRef}
            src="/videos/vid.mp4"
            controls
            className="w-72"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
