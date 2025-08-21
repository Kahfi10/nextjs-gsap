"use client" ;
import { useRevealer } from "@/hooks/useRevealer";

export default function Home() {
  useRevealer();
  return <>
    <div className="revealer"></div>
    <div className="home">
      <div className="header">
        <h1>Kahfi</h1>
      </div>

        <div className="hero-img">
          <img src="/header.jpg" alt="" />
        </div>

    </div>
  </>
}
