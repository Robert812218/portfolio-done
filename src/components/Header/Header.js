import React, { useEffect } from "react";
import './Header.css';

export default function Header() {
  function moveHeader() {
    const left = document.getElementById("left-side");

    const handleMove = e => {
      left.style.width = `${e.clientX / window.innerWidth * 100}%`;
    }

    document.onmousemove = e => handleMove(e);

    document.ontouchmove = e => handleMove(e.touches[0]);
  }

  useEffect(() => {
    moveHeader()
  }, [])

  return (
    <div className="header-container">

    <div id="left-side" className="side">
      <h1 className="title">
        Robert Kelly
        {/* <span className="fancy">Developer</span>       */}
      </h1>
    </div>
    <div id="right-side" className="side">
      <h1 className="title">
        {/* Robert Kelly   */}
        <span className="fancy">Developer</span>     
      </h1>
    </div>


    </div>
  )
}
