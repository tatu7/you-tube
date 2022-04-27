import React from "react";
import "./main.scss";
class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chanel: "", vaqt: "" };
  }
  getDate() {
    let date = new Date(this.props.val.snippet.publishTime).getTime();
    console.log(date);
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
  getChanelImg = async () => {
    // const data = await axios.get(
    //   "https://www.googleapis.com/youtube/v3/channels/",
    //   {
    //     params: {
    //       part: "snippet",
    //       id: this.props.val.snippet.channelId,
    //       fields: "id%2Csnippet%2Fthumbnails",
    //       key: "AIzaSyALzKAC2x2XpT51a33xJHKesSJXHViYVAA",
    //     },
    //   }
    // );
    // console.log(data);
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${this.props.val.snippet.channelId}&fields=items(id%2Csnippet%2Fthumbnails)&key=AIzaSyALzKAC2x2XpT51a33xJHKesSJXHViYVAA`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log();
        this.setState({ chanel: data.items[0].snippet.thumbnails.medium.url });
      });
  };
  render() {
    this.getDate();
    this.getChanelImg();

    return (
      <>
        <div className="video_deteil">
          <div className="detail__left">
            <img src={this.props.val.snippet.thumbnails.default.url} alt="" />
          </div>
          <div className="detail__right">
            <h3 className="detail__right--title">
              {this.props.val.snippet.title}
            </h3>
            <p className="detail__right--date">{this.state.vaqt}</p>
            <div className="detail__right--chanel">
              <img src={this.state?.chanel} alt="" />
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
