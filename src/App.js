import axios from "axios";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import VideoList from "./components/VideoList";
import "./components/main.scss";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { inputKey: "", videoList: [] };
  }
  getData = async (kalitSuz) => {
    const key = "AIzaSyAheMJMek78FF7b0aRPtgVP2tnuObquSGI";
    const data = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          typs: "video",
          maxResults: 10,
          key: key,
          q: kalitSuz,
        },
      }
    );

    this.setState({ videoList: data });
  };
  render() {
    return (
      <div className="app">
        <div className="nav">
          <Navbar getData={this.getData} />
        </div>
        <div className="container">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="sections">
            <VideoList data={this.state.videoList} getData={this.getData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
