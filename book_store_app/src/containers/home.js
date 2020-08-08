import React from "react";
import "./home.css";
import BookList from "./bookList.js";
import AddButton from "./addButton.js";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="title_area">
          <p className="title">本棚アプリ</p>
        </div>
        <BookList />
        <AddButton />
      </>
    );
  }
}

export default Home;
