"use client";
import { useRevealer } from "@/hooks/useRevealer";


const Work = () => {
  useRevealer();
  return (
    <>
    <div className="revealer"></div>
      <div className="work">
        <h1>My Draw</h1>
        

        <div className="projects">
            <img src="/project1.jpg" alt="" />
            <img src="/project2.jpg" alt="" />
            <img src="/project3.jpg" alt="" />
            <img src="/project 4.jpg" alt="" />
            <img src="/project5.jpg" alt="" />
        </div>
    </div>
  </>
  );
}

export default Work;
