import React from "react";
import "./main.scss";
class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chanel: "", vaqt: "", videoId: "" };
  }
  getDate() {
    let date = new Date(this.props.val.snippet.publishTime);
    let kun = date.getDate();
    let oy = date.getMonth();
    let yil = date.getFullYear();
    let dateNow = new Date();
    let kunNow = dateNow.getDate();
    let oyNow = dateNow.getMonth();
    let yilNow = dateNow.getFullYear();
    let natijaYil = yilNow - yil;
    let natijaOy = oyNow - oy;
    let natijaKun = kunNow - kun;
    let vaqtNatija = natijaKun
      ? `  ${natijaYil ? natijaYil + "yil ." : ""}  ${
          natijaOy ? natijaOy + " oy." : ""
        } ${natijaKun ? natijaKun + "kun oldin" : ""} `
      : "Hozir";
    this.setState({ vaqt: vaqtNatija });
  }
  getChannelInfo = async (id) => {
    const data = await fetch(
      `  https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&fields=items(id%2Csnippet%2Fthumbnails)&key=AIzaSyDXZdLg3XezWfbwftMKP7r2mJyzOf2AO1Q`
    );
    const getJson = await data.json();
    return getJson.items[0].snippet.thumbnails.default.url;
  };
  async componentDidMount() {
    let a = await this.getChannelInfo(this.props.val.snippet.channelId);
    this.setState({ chanel: a });
    this.getDate();
  }
  getVideoId = () => {
    this.setState({ videoId: this.props.id.videoId });
  };
  render() {
    return (
      <>
        <div className="video_deteil">
          <div className="detail__left">
            <img src={this.props.val.snippet.thumbnails.medium.url} alt="" />
          </div>
          <div className="detail__right">
            <a
              style={{ cursor: "pointer" }}
              className="detail__right--title"
              onClick={this.getVideoId}
            >
              {this.props.val.snippet.title}
            </a>
            <p className="detail__right--date">{this.state.vaqt}</p>
            <div className="detail__right--chanel">
              <img src={this.state.chanel} alt="" />
              <p>{this.props.val.snippet.channelTitle}</p>
            </div>
            <div className="detail__right--description">
              {this.props.val.snippet.description}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default VideoDetail;
