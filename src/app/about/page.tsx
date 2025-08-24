"use client";
import { useRevealer } from "@/hooks/useRevealer";

const About = () => {
  useRevealer();
  return (
    <>
    <div className="revealer"></div>
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
            <p>Nude - Radiohead</p>
            <img src="/song1.jpg" alt="" />
          </div>
          <div className="col">
            <p>SUMMER - BROCKHAMPTON</p>
            <img src="/song2.jpg" alt="" />
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
