import React from "react";
import "./home.css";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{this.props.text}</h1>
          <input
            name="title"
            type="text"
            className="inputTitle"
            placeholder="本の題名"
          />
          <br />
          <input
            name="description"
            type="text"
            className="inputDescription"
            placeholder="説明"
          />
          <br />
          <input type="submit" value="Add" className="button" />
          <br />
          <br />
          <button onClick={this.props.closePopup}>close</button>
        </div>
      </div>
    );
  }
}

class AddButton extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    return (
      <div className="addButton_area">
        <a onClick={this.togglePopup.bind(this)} className="addButton">
          +
        </a>
        {this.state.showPopup ? (
          <Popup text="投稿フォーム" closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default AddButton;
