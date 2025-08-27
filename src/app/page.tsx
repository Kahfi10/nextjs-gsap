"use client" ;
import { useRevealer } from "@/hooks/useRevealer";
import { useEffect, useRef, useState } from "react";

export default function Home() {
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
      audioRef.current.muted = true;
      audioRef.current.volume = 0;
      audioRef.current.play();
    }

    const handleUserInteract = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        fadeAudio("in");
        window.removeEventListener("click", handleUserInteract);
      }
    };

    window.addEventListener("click", handleUserInteract);

    const handleBeforeUnload = () => {
      fadeAudio("out", 1000);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("click", handleUserInteract);
      fadeAudio("out", 1000);
    };
  }, []);

  return (
    <>
      <div className="revealer"></div>
      <audio ref={audioRef} src="/summer.wav" autoPlay muted loop />
      <div className="home">
        <div className="header">
          <h1>Godhand.</h1>
        </div>
        <div className="hero-img">
          <img src="/header.jpeg" alt="" />
        </div>
      </div>
    </>
  );
}
