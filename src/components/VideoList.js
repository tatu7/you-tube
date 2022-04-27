import React from "react";
import VideoDetail from "./VideoDetail";
class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoData: [] };
  }

  renderList = () => {
    return this.props.data.data?.items.map((val) => {
      return <VideoDetail key={val.id.videoId} val={val} />;
    });
  };
  render() {
    return <>{this.renderList()}</>;
  }
}
export default VideoList;
