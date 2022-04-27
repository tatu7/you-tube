import React from "react";
import "./main.scss";
function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <i class="home icon"></i> <p>Home</p>
        </li>
        <li>
          <i class="compass icon"></i> <p>Navigator</p>
        </li>
        <li>
          <i class="youtube icon"></i> <p>Shorts</p>
        </li>
        <li>
          <i class="square icon"></i> <p>Follow</p>
        </li>
        <div className="draw"></div>
        <li>
          <i class="book icon"></i> <p>Library</p>
        </li>
        <li>
          <i class="history icon"></i> <p>History</p>
        </li>
        <li>
          <i class="video icon"></i>
          <p>All </p>
        </li>
        <li>
          <i class="clock icon"></i>
          <p>Old </p>
        </li>

        <li>
          <i class="thumbs up icon"></i>
          <p>Like</p>
        </li>
        <div className="draw"></div>
      </ul>
    </div>
  );
}

export default SideBar;
