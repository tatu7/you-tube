import React from "react";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyWord: "" };
  }
  onChangeInput = (evt) => {
    this.setState({ keyWord: evt.target.value });
  };
  onSubmitForm = (evt) => {
    evt.preventDefault();
    this.props.getData(this.state.keyWord);
  };
  render() {
    return (
      <>
        <form
          onSubmit={this.onSubmitForm}
          className="ui category search container"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="ui icon input">
            <input
              onChange={this.onChangeInput}
              style={{ width: "60rem", borderRadius: "5px" }}
              className="prompt"
              type="text"
              placeholder="Search animals..."
            />
            <i className="search icon" />
          </div>
          <div className="results" />
        </form>
      </>
    );
  }
}
export default SearchBar;
