"use client";
import { useRevealer } from "@/hooks/useRevealer";
import { useEffect, useRef, useState } from "react";

const About = () => {
  useRevealer();
  const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
  
    const fadeAudio = (fadeType: "in" | "out", duration = 2000) => {
      if (!audioRef.current) return;
      const audio = audioRef.current;
      const step = 0.05;
      let volume = fadeType === "in" ? 0 : audio.volume;
      audio.volume = volume;
      if (fadeType === "in") audio.play();
      const interval = setInterval(() => {
        if (fadeType === "in") {
          volume = Math.min(1, volume + step);
          audio.volume = volume;
          if (volume >= 1) clearInterval(interval);
        } else {
          volume = Math.max(0, volume - step);
          audio.volume = volume;
          if (volume <= 0) {
            audio.pause();
            clearInterval(interval);
          }
        }
      }, duration * step / 1);
    };
  
    const togglePlay = () => {
      if (!audioRef.current) return;
      if (isPlaying) {
        fadeAudio("out");
      } else {
        fadeAudio("in");
      }
      setIsPlaying(!isPlaying);
    };
  
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0;
        fadeAudio("in");
      }
  
      const handleBeforeUnload = () => {
        fadeAudio("out", 1000); // Fade out 1 detik sebelum unload
      };
  
      window.addEventListener("beforeunload", handleBeforeUnload);
  
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
        fadeAudio("out", 1000); // Fade out juga saat komponen unmount
      };
    }, []);
  
  return (
    <>
    <div className="revealer"></div>
    <audio ref={audioRef} src="/waste.wav" autoPlay loop />
      <div className="about">
        <div className="col">
            <h2>God plan.</h2>
        </div>
        <div className="col">
            <h2>I'm a developer and I have interest in art.</h2>
            <h2>
              I started my journey in programming several years ago, exploring various technologies and frameworks. Over time, I discovered a passion for creating interactive and visually appealing web experiences.
              My interest in art has influenced my approach to development, allowing me to blend creativity with technical skills. I enjoy working on projects that challenge me to think outside the box and push the boundaries of design and functionality.
              Whether it's building dynamic user interfaces or experimenting with animation libraries, I strive to deliver solutions that are both efficient and aesthetically pleasing.
            </h2>
            <div className="about-img">
                <img src="/about.jpeg" alt="" />
            </div>
        </div>
      </div>

      <div className="song">
        <div className="col">
          <h2>Song.</h2>
        </div>

        <div className="title">
          <h2>"Too weird to live,Too rare to die"</h2>
          <div className="col">
            <p>SUMMER - BROCKHAMPTON</p>
            <img src="/song2.jpg" alt="" />
          </div>
          <div className="col">
            <p>Nude - Radiohead</p>
            <img src="/song1.jpg" alt="" />
          </div>
          <div className="col">
            <p>WASTE - BROCKHAMPTON</p>
            <img src="/song3.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
