"use client";
import { useRevealer } from "@/hooks/useRevealer";
import { useEffect, useRef, useState } from "react";


const Work = () => {
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
    <audio ref={audioRef} src="/nude.wav" autoPlay loop />
      <div className="work">
        <h1>God did.</h1>
        

        <div className="projects">
            <h2>"Full of Agony and Despair"</h2>
            <div className="col">
              <p>This artwork, titled "Art in Transit," captures a moment of deep agony and despair. The figure, hunched over and isolated, seems trapped within the confines of a fleeting world, surrounded by chaotic lines and symbols. The television displaying "84" and the running silhouettes above suggest a desperate attempt to escape or find meaning amid confusion. The overall composition evokes a sense of struggle, as if the subject is searching for hope or connection in a space defined by movement and uncertainty.</p>
              <img src="/project1.png" alt="" />
            </div>
            <div className="col">
              <img src="/project2.png" alt="" />
              <p>This line art of The Rolling Stones, with faceless figures and minimal detail, evokes a sense of emptiness and longing. Despite their close physical proximity, the absence of identity and expression suggests a deeper agony and despair beneath the surface. The iconic logo above contrasts with the anonymity below, highlighting the tension between fame and the isolation that can exist within it.
            </p>
            </div>
            <div className="col">
              <p>This illustration depicts a figure intensely focused on a wall filled with broken hearts and faceless silhouettes. The fractured heart at the top and the glowing heart below symbolize emotional pain and longing. The act of drawing or observing these symbols suggests a search for healing, yet the repeated motifs of brokenness and anonymity reinforce a theme of agony and despair, as if the artist is trapped in a cycle of unresolved emotion.</p>
              <img src="/project3.png" alt="" />
            </div>
            <div className="col">
              <img src="/project4.png" alt="" />
              <p>In this piece, a solitary figure sits in contemplation, confronted by a dark, monstrous presence. The creature’s menacing grin and shadowy form embody inner torment and fear, while the figure’s posture suggests resignation or exhaustion. The chaotic background and swirling lines above intensify the sense of agony and despair, portraying a struggle with invisible demons and the weight of suffering that lingers in silence.</p>
            </div>
            <div className="col">
              <p>This drawing of two figures in a faceless embrace conveys a poignant sense of agony and despair. Their closeness suggests comfort, yet the absence of identity and expression leaves an emptiness between them. The gesture of affection becomes a silent cry for connection, highlighting the loneliness and longing that can exist even in moments of intimacy.</p>
              <img src="/project5.png" alt="" />
            </div>
            <div className="col">
              <img src="/project6.png" alt="" />
              <p>This illustration of a faceless figure suspended in mid-air evokes a powerful sense of agony and despair. The posture suggests a loss of control, as if the subject is falling or drifting through an uncertain void. The emptiness surrounding the figure amplifies feelings of isolation and vulnerability, capturing a moment of helplessness and emotional descent.</p>
            </div>
            <div className="col">
              <p>This minimalist illustration of a faceless figure, limp and suspended in emptiness, powerfully conveys agony and despair. The posture suggests surrender and exhaustion, as if the subject has been overcome by invisible burdens. The vast white space around the figure amplifies the sense of isolation, highlighting the emotional weight and vulnerability of being lost and alone.
              </p>
              <img src="/project7.png" alt="" />
            </div>
            <div className="col">
              <img src="/project8.png" alt="" />
              <p>This artwork portrays a solitary, faceless figure gazing at two distant silhouettes holding hands. The blurred, textured lines create a sense of separation and emotional fog, emphasizing themes of agony and despair. The lone figure’s posture and the unreachable connection above evoke feelings of longing, isolation, and the pain of witnessing happiness from afar</p>
            </div>
        </div>
    </div>
  </>
  );
}

export default Work;
